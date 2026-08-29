"""
Prayas Foundation - Unified All-in-One Dev Server
Runs the complete FastAPI Backend + Full Web UI simultaneously.
- Port 8000: Full FastAPI Backend + Static Website UI + RAG AI Engine + Live SMTP

Usage:
    python server.py
"""

import sys
import os
from pathlib import Path

# Fix Windows console UTF-8 output encoding
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

# Ensure root is on path
ROOT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT_DIR))

import uvicorn
from rag.database import init_db
from rag.api import app

if __name__ == "__main__":
    print("=" * 70)
    print(">> PRAYAS FOUNDATION UNIFIED AI, SQL & WEB SERVER")
    print("=" * 70)
    
    # Initialize SQLite schema and default tables
    init_db()
    print("[OK] SQLite Relational Database Initialized & Verified (rag/prayas.db)")
    print("[OK] Live SMTP & Google Workspace Relay Active")
    print("[OK] RAG AI Vector Knowledge Base Ready")
    print("-" * 70)
    print("Full Website UI:         http://localhost:8000/")
    print("SQL Admin & Diagnostics: http://localhost:8000/admin.html")
    print("API Health Endpoint:     http://localhost:8000/api/health")
    print("=" * 70)
    
    # Run high-performance ASGI server
    uvicorn.run(
        "rag.api:app",
        host="0.0.0.0",
        port=8000,
        reload=False,
        timeout_keep_alive=75,
        limit_concurrency=100
    )
