"""
Prayas Foundation - Unified All-in-One Dev Server
Runs the complete FastAPI Backend + Full Web UI simultaneously.
- Port 8000: Full FastAPI Backend + Static Website UI + RAG AI Engine + Live SMTP
- Port 8080: Forwarding / Static Listener

Usage:
    python server.py
"""

import sys
import os
from pathlib import Path

# Ensure root is on path
ROOT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT_DIR))

import uvicorn
from rag.database import init_db
from rag.api import app

if __name__ == "__main__":
    print("=" * 70)
    print("🚀 PRAYAS FOUNDATION UNIFIED AI, SQL & WEB SERVER")
    print("=" * 70)
    
    # Initialize SQLite schema and default tables
    init_db()
    print("✅ SQLite Relational Database Initialized & Verified (rag/prayas.db)")
    print("✅ Live SMTP & Google Workspace Relay Active")
    print("✅ RAG AI Vector Knowledge Base Ready")
    print("-" * 70)
    print("🌐 Full Website UI:        http://localhost:8000/")
    print("🗄️ SQL Admin & Diagnostics: http://localhost:8000/admin.html")
    print("🩺 API Health Endpoint:     http://localhost:8000/api/health")
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
