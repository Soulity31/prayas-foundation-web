"""
Prayas Foundation Domain RAG AI Verification Test Suite
Automates retrieval and generation quality checks across core website domain queries.
"""

import sys
import time
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# Ensure workspace root is in path
WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
if str(WORKSPACE_ROOT) not in sys.path:
    sys.path.insert(0, str(WORKSPACE_ROOT))

from rag.engine import get_rag_engine

TEST_CASES = [
    {
        "id": "TC-01",
        "category": "Founder & Background",
        "query": "Who is Brijesh Singh and what is his background with Prayas Foundation?",
        "expected_keywords": ["Brijesh Singh", "Ruia", "Founder", "Malad"]
    },
    {
        "id": "TC-02",
        "category": "School Operations",
        "query": "Tell me about Mumbai Public School Malvani, its location and curriculum.",
        "expected_keywords": ["Mumbai Public School", "Malvani", "CBSE", "SSC"]
    },
    {
        "id": "TC-03",
        "category": "Khan Academy Impact Metrics",
        "query": "What are the Khan Academy prelim exam score improvements for Ankur and Arunuday groups?",
        "expected_keywords": ["Khan Academy", "487", "Ankur", "Arunuday"]
    },
    {
        "id": "TC-04",
        "category": "Tax & Donations",
        "query": "Are donations to Prayas Foundation eligible for 80G tax exemption?",
        "expected_keywords": ["80G", "tax", "exemption", "50%"]
    },
    {
        "id": "TC-05",
        "category": "Volunteering & Contact",
        "query": "How can I volunteer and what is the office contact number?",
        "expected_keywords": ["volunteer", "9820500726"]
    },
    {
        "id": "TC-06",
        "category": "Hindi Domain Query",
        "query": "प्रयास फाउंडेशन के संस्थापक कौन हैं और इसका मुख्य उद्देश्य क्या है?",
        "expected_keywords": ["ब्रिजेश", "फाउंडेशन", "शिक्षा"]
    },
    {
        "id": "TC-07",
        "category": "Marathi Domain Query",
        "query": "मुंबई पब्लिक स्कूल मालवणी येथे कोणत्या सुविधा उपलब्ध आहेत?",
        "expected_keywords": ["शाळा", "मुंबई पब्लिक स्कूल", "मालवणी"]
    }
]


def run_tests():
    print("=" * 70)
    print("  PRAYAS FOUNDATION DOMAIN RAG AI - AUTOMATED VERIFICATION SUITE")
    print("=" * 70)
    
    start_time = time.time()
    engine = get_rag_engine()
    
    if not engine.is_ready:
        print("[FAIL] RAG Engine failed to initialize properly.")
        return False
        
    print(f"[OK] RAG Engine loaded with {len(engine.chunks)} indexed chunks.")
    print(f"[OK] Device: {engine.device}, Model: {engine.model_name}")
    print("-" * 70)
    
    passed = 0
    total = len(TEST_CASES)
    
    for tc in TEST_CASES:
        q = tc["query"]
        print(f"\n[{tc['id']}] Category: {tc['category']}")
        print(f" Query: {q}")
        
        t0 = time.time()
        res = engine.generate_answer(q, top_k=4, preferred_model="local")
        dt = (time.time() - t0) * 1000
        
        answer = res.get("answer", "")
        sources = res.get("sources", [])
        confidence = res.get("confidence", 0.0)
        
        # Verify keywords in answer or top sources
        combined_text = (answer + " " + " ".join([s["title"] for s in sources])).lower()
        matched = [kw for kw in tc["expected_keywords"] if kw.lower() in combined_text]
        match_rate = len(matched) / len(tc["expected_keywords"])
        
        is_pass = match_rate >= 0.5 and len(sources) > 0 and confidence > 0.3
        if is_pass:
            passed += 1
            print(f" -> Result: PASS ({dt:.1f}ms) | Confidence: {confidence*100:.0f}%")
        else:
            print(f" -> Result: WARN/FAIL ({dt:.1f}ms) | Match Rate: {match_rate:.0%}")
            
        print(f" -> Top Sources: {[s['title'] for s in sources[:2]]}")
        print(f" -> Answer Snippet: {answer[:180]}...")
        
    print("\n" + "=" * 70)
    duration = time.time() - start_time
    print(f"TEST SUMMARY: {passed}/{total} Passed ({passed/total*100:.1f}%) in {duration:.2f}s")
    print("=" * 70)
    return passed == total


if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)
