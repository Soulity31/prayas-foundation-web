"""
Prayas Foundation RAG Indexer & Vector Store
Chunks scraped domain content, computes PyTorch dense vector embeddings,
builds lexical BM25/TF-IDF indices, and stores the searchable index.
"""

import os
import re
import json
import pickle
import numpy as np
import torch
from pathlib import Path
from typing import List, Dict, Any

DATA_DIR = Path(__file__).resolve().parent / "data"
KNOWLEDGE_FILE = DATA_DIR / "scraped_prayas_knowledge.json"
CHUNKS_FILE = DATA_DIR / "chunks.json"
EMBEDDINGS_FILE = DATA_DIR / "dense_embeddings.pt"
LEXICAL_INDEX_FILE = DATA_DIR / "lexical_index.pkl"


def chunk_text(text: str, chunk_size: int = 120, overlap: int = 30) -> List[str]:
    """Splits a long text into overlapping word-based chunks."""
    words = text.split()
    if len(words) <= chunk_size:
        return [text]
    
    chunks = []
    start = 0
    while start < len(words):
        end = min(start + chunk_size, len(words))
        chunk = " ".join(words[start:end])
        chunks.append(chunk)
        if end >= len(words):
            break
        start += (chunk_size - overlap)
    return chunks


def build_chunks(knowledge_data: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Creates fine-grained semantic chunks from scraped HTML and structured data."""
    chunks = []
    chunk_id = 0

    # 1. Process Structured Knowledge Modules (Clean atomic language entries)
    for item in knowledge_data.get("structured_knowledge", []):
        topic = item.get("topic", "General")
        source = item.get("source", "knowledge_base")
        title = item.get("title", topic.replace("_", " ").title())
        keywords = item.get("keywords", [])
        
        # English atomic entry
        if "en" in item and item["en"]:
            chunk_id += 1
            chunks.append({
                "chunk_id": chunk_id,
                "title": f"Prayas Foundation: {title}",
                "topic": topic,
                "source": source,
                "language": "en",
                "content": item["en"].strip(),
                "keywords": keywords,
                "type": "structured_qa"
            })
            
        # Hindi atomic entry
        if "hi" in item and item["hi"]:
            chunk_id += 1
            chunks.append({
                "chunk_id": chunk_id,
                "title": f"प्रयास फाउंडेशन: {title} (Hindi)",
                "topic": topic,
                "source": source,
                "language": "hi",
                "content": item["hi"].strip(),
                "keywords": keywords,
                "type": "structured_qa"
            })
            
        # Marathi atomic entry
        if "mr" in item and item["mr"]:
            chunk_id += 1
            chunks.append({
                "chunk_id": chunk_id,
                "title": f"प्रयास फाउंडेशन: {title} (Marathi)",
                "topic": topic,
                "source": source,
                "language": "mr",
                "content": item["mr"].strip(),
                "keywords": keywords,
                "type": "structured_qa"
            })
            
        # If it's a rich dedicated full-text (like founder detailed bio, exam progression) without en/hi/mr breakdown
        if "en" not in item and "full_text" in item and item["full_text"]:
            chunk_id += 1
            chunks.append({
                "chunk_id": chunk_id,
                "title": f"Prayas Foundation: {title}",
                "topic": topic,
                "source": source,
                "language": "en",
                "content": item["full_text"].strip(),
                "keywords": keywords,
                "type": "structured_fact"
            })

    # 2. Process HTML Pages
    for page in knowledge_data.get("html_pages", []):
        source = page.get("source", "website")
        page_title = page.get("title", "")
        url_path = page.get("url_path", "/")
        
        # Process individual sections
        for sec in page.get("sections", []):
            h = sec.get("heading", "")
            c = sec.get("content", "")
            if not c or len(c) < 30:
                continue
                
            text_blocks = chunk_text(f"{h}: {c}", chunk_size=100, overlap=25)
            for block in text_blocks:
                chunk_id += 1
                chunks.append({
                    "chunk_id": chunk_id,
                    "title": f"{page_title} - {h}",
                    "topic": h,
                    "source": source,
                    "url": url_path,
                    "language": "en",
                    "content": block,
                    "keywords": [w.lower() for w in h.split() if len(w) > 3],
                    "type": "html_section"
                })

    return chunks


class HybridRAGIndexer:
    """Computes dense PyTorch vector embeddings and BM25/TF-IDF lexical matrix."""
    def __init__(self, model_name: str = "sentence-transformers/all-MiniLM-L6-v2"):
        self.model_name = model_name
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = None
        self.model = None
        self.tfidf_vectorizer = None
        self.tfidf_matrix = None
        self.dense_embeddings = None
        self.chunks = []

    def _init_dense_model(self):
        """Loads PyTorch transformer model for dense vector embeddings."""
        try:
            from transformers import AutoTokenizer, AutoModel
            print(f"Loading dense embedding model '{self.model_name}' on {self.device}...")
            self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
            self.model = AutoModel.from_pretrained(self.model_name).to(self.device)
            self.model.eval()
            print("Embedding model loaded successfully.")
        except Exception as e:
            print(f"Notice: Transformer model load fallback ({e}). Using PyTorch high-dim feature representation.")
            self.tokenizer = None
            self.model = None

    def encode_dense(self, texts: List[str]) -> torch.Tensor:
        """Encodes texts into L2-normalized dense PyTorch embedding vectors."""
        if self.model is not None and self.tokenizer is not None:
            embeddings_list = []
            batch_size = 32
            for i in range(0, len(texts), batch_size):
                batch_texts = texts[i:i + batch_size]
                encoded_input = self.tokenizer(
                    batch_texts, padding=True, truncation=True, max_length=256, return_tensors='pt'
                ).to(self.device)
                
                with torch.no_grad():
                    model_output = self.model(**encoded_input)
                    token_embeddings = model_output[0]
                    input_mask_expanded = encoded_input['attention_mask'].unsqueeze(-1).expand(token_embeddings.size()).float()
                    sum_embeddings = torch.sum(token_embeddings * input_mask_expanded, 1)
                    sum_mask = torch.clamp(input_mask_expanded.sum(1), min=1e-9)
                    batch_embeddings = sum_embeddings / sum_mask
                    batch_embeddings = torch.nn.functional.normalize(batch_embeddings, p=2, dim=1)
                    embeddings_list.append(batch_embeddings.cpu())
                    
            return torch.cat(embeddings_list, dim=0)
        else:
            from sklearn.feature_extraction.text import TfidfVectorizer
            vec = TfidfVectorizer(max_features=512, ngram_range=(1, 2))
            mat = vec.fit_transform(texts).toarray()
            t = torch.tensor(mat, dtype=torch.float32)
            return torch.nn.functional.normalize(t, p=2, dim=1)

    def fit(self, chunks: List[Dict[str, Any]]):
        """Indexes all text chunks into dense PyTorch embeddings and lexical index."""
        self.chunks = chunks
        texts = [f"{c.get('title', '')} {c.get('content', '')}" for c in chunks]
        
        print(f"Indexing {len(chunks)} text chunks...")
        
        from sklearn.feature_extraction.text import TfidfVectorizer
        self.tfidf_vectorizer = TfidfVectorizer(
            ngram_range=(1, 3),
            sublinear_tf=True,
            token_pattern=r'(?u)\b\w+\b'
        )
        self.tfidf_matrix = self.tfidf_vectorizer.fit_transform(texts)
        print("Lexical BM25/TF-IDF index built.")

        self._init_dense_model()
        self.dense_embeddings = self.encode_dense(texts)
        print(f"Dense vector embeddings tensor generated: {self.dense_embeddings.shape}")

    def save(self):
        """Saves chunks, dense embeddings, and lexical index to disk."""
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        
        with open(CHUNKS_FILE, "w", encoding="utf-8") as f:
            json.dump(self.chunks, f, ensure_ascii=False, indent=2)
            
        torch.save(self.dense_embeddings, EMBEDDINGS_FILE)
        
        with open(LEXICAL_INDEX_FILE, "wb") as f:
            pickle.dump({
                "tfidf_vectorizer": self.tfidf_vectorizer,
                "tfidf_matrix": self.tfidf_matrix
            }, f)
            
        print(f"Index successfully saved to {DATA_DIR}!")


def run_indexer():
    """Reads scraped knowledge and produces complete hybrid RAG index."""
    if not KNOWLEDGE_FILE.exists():
        print("Knowledge file not found. Running scraper first...")
        from rag.scraper import run_scraper
        run_scraper()
        
    with open(KNOWLEDGE_FILE, "r", encoding="utf-8") as f:
        knowledge_data = json.load(f)
        
    chunks = build_chunks(knowledge_data)
    print(f"Constructed {len(chunks)} clean domain chunks.")
    
    indexer = HybridRAGIndexer()
    indexer.fit(chunks)
    indexer.save()
    return indexer


if __name__ == "__main__":
    run_indexer()
