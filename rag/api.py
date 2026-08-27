"""
Prayas Foundation RAG AI & SQL Backend REST API Server
Provides high-performance endpoints for:
- Domain AI Chat & Real-Time SSE Token Streaming
- SQL-backed Donations & 80G Tax Exemption Receipts
- SQL-backed Volunteer Registrations & Onboarding
- SQL-backed Contact Inquiries & Feedback
- RFC 5322 High-Deliverability Email Diagnostics & Dispatches
- SQL Executive KPI Dashboard Metrics & Interaction Telemetry
"""

import sys
import os
import json
from pathlib import Path

# Ensure root directory is in sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from typing import List, Optional, Dict, Any
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse, StreamingResponse, Response
from pydantic import BaseModel, Field

from rag.engine import get_rag_engine
from rag.scraper import run_scraper
from rag.indexer import run_indexer
from rag.database import (
    init_db,
    get_db_connection,
    generate_80g_receipt_pdf,
    record_donation,
    get_all_donations,
    send_donation_receipt_email,
    get_smtp_config_status,
    save_smtp_config,
    test_smtp_connection,
    send_test_receipt_email,
    get_email_logs,
    record_volunteer,
    get_all_volunteers,
    update_volunteer_status,
    record_contact_inquiry,
    get_all_inquiries,
    toggle_inquiry_resolved,
    log_chatbot_query,
    get_all_chatbot_logs,
    get_dashboard_metrics
)

class SmtpConfigRequest(BaseModel):
    host: str = Field(..., example="smtp.gmail.com")
    port: int = Field(587, example=587)
    user: str = Field(..., example="your-email@gmail.com")
    password: str = Field(..., example="your-16-char-app-password")
    from_name: str = Field("Prayas Foundation Trust", example="Prayas Foundation Trust")

class SmtpTestConnectionRequest(BaseModel):
    host: Optional[str] = None
    port: Optional[int] = None
    user: Optional[str] = None
    password: Optional[str] = None

class TestEmailRequest(BaseModel):
    recipient_email: str = Field(..., example="donor@gmail.com")

import html
import re

# =========================================================================
# Security Protocols & Sanitization Helpers
# =========================================================================

def sanitize_input(val: Optional[str], max_length: int = 1000) -> str:
    """Strips dangerous HTML/script tags and bounds length to prevent injection and buffer exhaustion."""
    if not val:
        return ""
    # Strip HTML and normalize
    clean = html.escape(str(val).strip()[:max_length])
    return clean

def is_valid_email(email: str) -> bool:
    """Validates email format using standard regex."""
    if not email or len(email) > 120:
        return False
    return bool(re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email.strip()))

import asyncio
import time
from datetime import datetime
import urllib.request

SERVER_START_TIME = time.time()

app = FastAPI(
    title="Prayas Foundation Unified AI & SQL Backend API",
    description="Full-stack AI Domain Engine, SQL Relational Database, and 24/7 Keep-Alive Service for Prayas Foundation",
    version="2.2.0"
)

# Security Headers Middleware
@app.middleware("http")
async def apply_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
    response.headers["Connection"] = "keep-alive"
    response.headers["Keep-Alive"] = "timeout=75, max=1000"
    return response

async def keep_alive_worker():
    """
    Background 24/7 daemon:
    Pings external public endpoint so cloud container load balancers (e.g. Render, Koyeb, Railway)
    register genuine incoming web traffic and never put the container to sleep.
    """
    await asyncio.sleep(10)  # Initial boot grace period
    while True:
        # Determine target ping URL: Prioritize external cloud public URLs
        ext_url = (
            os.getenv("RENDER_EXTERNAL_URL") or 
            os.getenv("PUBLIC_API_URL") or 
            os.getenv("PUBLIC_URL") or 
            os.getenv("BACKEND_URL") or 
            os.getenv("KEEP_ALIVE_URL") or 
            "http://127.0.0.1:8000"
        ).rstrip("/")
        
        target_url = f"{ext_url}/api/health"
        
        try:
            req = urllib.request.Request(
                target_url, 
                headers={
                    "User-Agent": "Prayas-KeepAlive-Worker/2.2",
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache"
                }
            )
            with urllib.request.urlopen(req, timeout=12) as resp:
                pass
        except Exception:
            # If external ping fails or domain not resolved yet, fallback to localhost health check
            try:
                fallback_req = urllib.request.Request(
                    "http://127.0.0.1:8000/api/health", 
                    headers={"User-Agent": "Prayas-KeepAlive-LocalFallback/2.2"}
                )
                with urllib.request.urlopen(fallback_req, timeout=8) as fb:
                    pass
            except Exception:
                pass
        
        # Cloud providers (e.g. Render) idle-sleep after 15 minutes of inactivity.
        # Pinging every 180 seconds (3 minutes) guarantees the container remains permanently awake.
        await asyncio.sleep(180)

# Initialize SQL Database Tables and 24/7 Keep-Alive on Startup
@app.on_event("startup")
async def on_startup():
    init_db()
    asyncio.create_task(keep_alive_worker())
    print("[OK] Prayas Foundation SQL Database & 24/7 Keep-Alive Engine initialized successfully (SQLite / prayas.db).")

# Enable CORS for frontend integration with 24h preflight caching
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=86400,
)

UI_DIR = Path(__file__).resolve().parent / "ui"


# =========================================================================
# Pydantic Request & Response Models
# =========================================================================

class ChatRequest(BaseModel):
    query: str
    top_k: Optional[int] = 4
    model: Optional[str] = "local"
    api_key: Optional[str] = None


class SearchRequest(BaseModel):
    query: str
    top_k: Optional[int] = 5


class ChatResponse(BaseModel):
    query: str
    answer: str
    language: str
    confidence: float
    confidence_percent: Optional[str] = "85%"
    engine: str
    sources: List[dict]


class DonationCreateRequest(BaseModel):
    donor_name: str = Field(..., min_length=2)
    donor_email: str = Field(..., min_length=5)
    donor_phone: str = Field(..., min_length=8)
    amount: float = Field(..., gt=0)
    donor_pan: Optional[str] = None
    is_80g: Optional[bool] = True
    payment_mode: Optional[str] = "UPI"
    transaction_id: Optional[str] = None
    cause: Optional[str] = "General School Support"


class VolunteerCreateRequest(BaseModel):
    full_name: str = Field(..., min_length=2)
    email: str = Field(..., min_length=5)
    phone: str = Field(..., min_length=8)
    skills: Optional[str] = "Teaching / Mentorship"
    availability: Optional[str] = "Weekends"
    city: Optional[str] = "Mumbai"


class ContactCreateRequest(BaseModel):
    name: str = Field(..., min_length=2)
    email: str = Field(..., min_length=5)
    message: str = Field(..., min_length=3)
    phone: Optional[str] = None
    subject: Optional[str] = "General Inquiry"


# =========================================================================
# System Health, Heartbeat & Keep-Alive Endpoints
# =========================================================================

@app.get("/api/health")
@app.get("/api/ping")
@app.get("/health")
def health_check():
    """Real-time health check, uptime telemetry, and cold-start keep-alive endpoint."""
    uptime_seconds = int(time.time() - SERVER_START_TIME)
    hours = uptime_seconds // 3600
    minutes = (uptime_seconds % 3600) // 60
    seconds = uptime_seconds % 60
    return {
        "status": "healthy",
        "alive": True,
        "service": "Prayas Foundation Unified AI & SQL Backend",
        "uptime_seconds": uptime_seconds,
        "uptime_formatted": f"{hours}h {minutes}m {seconds}s",
        "timestamp": datetime.now().isoformat(),
        "database": "connected",
        "version": "2.2.0"
    }


# =========================================================================
# Web UI Root
# =========================================================================

@app.get("/")
def serve_ui():
    """Serves the interactive Prayas RAG AI web interface."""
    index_html = UI_DIR / "index.html"
    if index_html.exists():
        return FileResponse(index_html)
    return HTMLResponse("<h1>Prayas Foundation Domain AI & SQL Backend API is Live!</h1>")


# =========================================================================
# AI Chat & Search Endpoints
# =========================================================================

@app.post("/api/chat", response_model=ChatResponse)
def chat_endpoint(req: ChatRequest):
    """Processes user query through domain RAG pipeline and logs conversation in SQL."""
    if not req.query or not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
    
    engine = get_rag_engine()
    result = engine.generate_answer(
        query=req.query.strip(),
        top_k=req.top_k or 4,
        preferred_model=req.model or "local",
        api_key=req.api_key
    )

    log_chatbot_query(
        user_query=req.query.strip(),
        bot_response=result.get("answer", ""),
        confidence_score=result.get("confidence", 0.85),
        confidence_percent=result.get("confidence_percent", "85%"),
        language=result.get("language", "en"),
        engine=result.get("engine", "local_pytorch_rag")
    )

    return result


@app.post("/api/chat/stream")
def chat_stream_endpoint(req: ChatRequest):
    """Streams response tokens in real-time using Server-Sent Events (SSE)."""
    if not req.query or not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
        
    engine = get_rag_engine()
    
    def stream_with_logging():
        accumulated_text = ""
        confidence_val = 0.85
        conf_percent = "85%"
        lang = "en"
        
        for chunk in engine.stream_answer_tokens(
            query=req.query.strip(),
            top_k=req.top_k or 4,
            preferred_model=req.model or "local",
            api_key=req.api_key
        ):
            if chunk.startswith("data: "):
                raw_data = chunk[6:].strip()
                if raw_data != "[DONE]":
                    try:
                        event = json.loads(raw_data)
                        if event.get("type") == "meta":
                            confidence_val = event.get("confidence", 0.85)
                            conf_percent = event.get("confidence_percent", "85%")
                            lang = event.get("language", "en")
                        elif event.get("type") == "token":
                            accumulated_text += event.get("content", "")
                    except Exception:
                        pass
            yield chunk
        
        if accumulated_text:
            log_chatbot_query(
                user_query=req.query.strip(),
                bot_response=accumulated_text,
                confidence_score=confidence_val,
                confidence_percent=conf_percent,
                language=lang,
                engine="local_pytorch_rag"
            )

    return StreamingResponse(
        stream_with_logging(),
        media_type="text/event-stream"
    )


@app.post("/api/search")
def search_endpoint(req: SearchRequest):
    """Performs direct hybrid semantic search over website knowledge chunks."""
    if not req.query or not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
    
    engine = get_rag_engine()
    chunks = engine.retrieve(req.query.strip(), top_k=req.top_k or 5)
    return {
        "query": req.query,
        "total_results": len(chunks),
        "results": chunks
    }


# =========================================================================
# SQL Relational Database Endpoints
# =========================================================================

@app.post("/api/donations")
def create_donation(req: DonationCreateRequest):
    """Records a new donation in SQL, auto-generates 80G receipt, and triggers email receipt."""
    if not is_valid_email(req.donor_email):
        raise HTTPException(status_code=400, detail="Invalid donor email address format.")
    if req.amount <= 0 or req.amount > 100000000:
        raise HTTPException(status_code=400, detail="Donation amount must be positive (₹1 to ₹10,00,00,000).")

    try:
        record = record_donation(
            donor_name=sanitize_input(req.donor_name, 120),
            donor_email=sanitize_input(req.donor_email, 120),
            donor_phone=sanitize_input(req.donor_phone, 30),
            amount=req.amount,
            donor_pan=sanitize_input(req.donor_pan, 20) if req.donor_pan else None,
            payment_mode=sanitize_input(req.payment_mode or "UPI", 30),
            is_80g=req.is_80g if req.is_80g is not None else True,
            transaction_id=sanitize_input(req.transaction_id, 64) if req.transaction_id else None,
            cause=sanitize_input(req.cause or "General School Support", 150)
        )
        return {"status": "success", "data": record}
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail="Failed to record donation. Please try again.")


@app.get("/api/donations")
def list_donations(limit: int = Query(100, ge=1, le=500), filter_type: str = Query("all")):
    """Fetches recent donation records from SQL database with optional 80G vs Normal filter."""
    safe_filter = sanitize_input(filter_type, 20)
    donations = get_all_donations(limit=limit, filter_type=safe_filter)
    return {"total": len(donations), "donations": donations}


@app.post("/api/donations/{donation_id}/email-receipt")
def email_donation_receipt(donation_id: int, recipient_email: Optional[str] = Query(None)):
    """Dispatches a formal 80G tax exemption receipt email to the donor."""
    if recipient_email and not is_valid_email(recipient_email):
        raise HTTPException(status_code=400, detail="Invalid recipient email format.")
    try:
        result = send_donation_receipt_email(donation_id, sanitize_input(recipient_email, 120) if recipient_email else None)
        return {"status": "success", "data": result}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to dispatch receipt email.")


@app.get("/api/donations/{donation_id}/download-pdf")
def download_donation_pdf(donation_id: int):
    """Generates and returns the official Section 80G PDF certificate directly."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM donations WHERE id = ?", (donation_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail=f"Donation #{donation_id} not found.")
    
    d = dict(row)
    is_80g = bool(d.get("is_80g") or (d.get("tax_80g_receipt_no") and "80G" in str(d.get("tax_80g_receipt_no"))))
    pdf_bytes = generate_80g_receipt_pdf(d)
    receipt_no = d.get("tax_80g_receipt_no") or (f"80G-PF-2026-X{donation_id}" if is_80g else f"RCP-PF-2026-N{donation_id}")
    prefix = "Official_80G_Receipt" if is_80g else "Official_Donation_Receipt"
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"inline; filename={prefix}_{receipt_no}.pdf"
        }
    )


@app.get("/api/admin/smtp-status")
def admin_smtp_status():
    """Returns current live SMTP configuration status and diagnostics."""
    status = get_smtp_config_status()
    return {"status": "success", "data": status}


@app.post("/api/admin/smtp-config")
def admin_save_smtp_config(req: SmtpConfigRequest):
    """Saves SMTP credentials to .env file and reloads active configuration."""
    if not is_valid_email(req.user):
        raise HTTPException(status_code=400, detail="Invalid SMTP username email address format.")
    try:
        result = save_smtp_config(
            host=sanitize_input(req.host, 120),
            port=req.port,
            user=sanitize_input(req.user, 120),
            password=req.password,
            from_name=sanitize_input(req.from_name, 100)
        )
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to save SMTP configuration.")


@app.post("/api/admin/smtp-test-connection")
def admin_test_smtp_connection(req: SmtpTestConnectionRequest):
    """Performs deep socket, TLS, and authentication diagnostics on the SMTP server."""
    try:
        result = test_smtp_connection(
            host=sanitize_input(req.host, 120) if req.host else None,
            port=req.port,
            user=sanitize_input(req.user, 120) if req.user else None,
            password=req.password
        )
        return {"status": "success" if result["success"] else "error", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/admin/send-test-receipt")
def admin_send_test_receipt(req: TestEmailRequest):
    """Dispatches a test 80G tax receipt to verify live inbox delivery."""
    if not is_valid_email(req.recipient_email):
        raise HTTPException(status_code=400, detail="Invalid test email address format.")
    try:
        result = send_test_receipt_email(sanitize_input(req.recipient_email, 120))
        return {"status": "success" if result["success"] else "error", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send test email.")


@app.get("/api/admin/email-logs")
def admin_get_email_logs(limit: int = Query(50, ge=1, le=200)):
    """Fetches dispatched email delivery logs."""
    logs = get_email_logs(limit=limit)
    return {"total": len(logs), "logs": logs}


@app.post("/api/volunteers")
def create_volunteer(req: VolunteerCreateRequest):
    """Registers a new volunteer in the SQL database and dispatches welcome packet."""
    if not is_valid_email(req.email):
        raise HTTPException(status_code=400, detail="Invalid volunteer email address format.")
    try:
        record = record_volunteer(
            full_name=sanitize_input(req.full_name, 120),
            email=sanitize_input(req.email, 120),
            phone=sanitize_input(req.phone, 30),
            skills=sanitize_input(req.skills or "Teaching", 150),
            availability=sanitize_input(req.availability or "Weekends", 100),
            city=sanitize_input(req.city or "Mumbai", 100)
        )
        return {"status": "success", "data": record}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to register volunteer.")


@app.get("/api/volunteers")
def list_volunteers(limit: int = Query(50, ge=1, le=200)):
    """Fetches volunteer registrations from the SQL database."""
    volunteers = get_all_volunteers(limit=limit)
    return {"total": len(volunteers), "volunteers": volunteers}


@app.patch("/api/volunteers/{vol_id}/status")
def patch_volunteer_status(vol_id: int, status: str = Query(...)):
    """Updates volunteer onboarding status (e.g. NEW, CONTACTED, ONBOARDED, ACTIVE)."""
    safe_status = sanitize_input(status, 30).upper()
    try:
        result = update_volunteer_status(vol_id, safe_status)
        return {"status": "success", "data": result}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to update volunteer status.")


@app.post("/api/contact")
def create_contact(req: ContactCreateRequest):
    """Saves visitor inquiry message into SQL and triggers auto-acknowledgment email."""
    if not is_valid_email(req.email):
        raise HTTPException(status_code=400, detail="Invalid contact email address format.")
    try:
        record = record_contact_inquiry(
            name=sanitize_input(req.name, 120),
            email=sanitize_input(req.email, 120),
            message=sanitize_input(req.message, 2000),
            phone=sanitize_input(req.phone, 30) if req.phone else None,
            subject=sanitize_input(req.subject or "General Inquiry", 200)
        )
        return {"status": "success", "data": record}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to save contact inquiry.")


@app.get("/api/contact")
def list_contact_inquiries(limit: int = Query(50, ge=1, le=200)):
    """Fetches contact messages from the SQL database."""
    inquiries = get_all_inquiries(limit=limit)
    return {"total": len(inquiries), "inquiries": inquiries}


@app.patch("/api/contact/{inquiry_id}/resolve")
def patch_inquiry_resolve(inquiry_id: int, is_resolved: Optional[int] = Query(None)):
    """Toggles or sets the resolved status of a contact inquiry."""
    try:
        result = toggle_inquiry_resolved(inquiry_id, is_resolved)
        return {"status": "success", "data": result}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=str(ve))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/chatbot-logs")
def list_chatbot_logs(limit: int = Query(50, ge=1, le=200)):
    """Fetches AI chatbot interaction logs from the SQL database."""
    logs = get_all_chatbot_logs(limit=limit)
    return {"total": len(logs), "logs": logs}


@app.get("/api/dashboard/metrics")
@app.get("/api/dashboard")
def dashboard_metrics():
    """Returns aggregated executive dashboard KPIs computed via SQL."""
    metrics = get_dashboard_metrics()
    return metrics


@app.get("/api/stats")
def stats_endpoint():
    """Returns combined AI engine and SQL database statistics."""
    engine = get_rag_engine()
    db_metrics = get_dashboard_metrics()
    return {
        "status": "ready" if engine.is_ready else "initializing",
        "total_chunks": len(engine.chunks),
        "embedding_dimensions": engine.dense_embeddings.shape[1] if engine.dense_embeddings is not None else 0,
        "database": {
            "type": "SQLite (Relational SQL)",
            "file": "rag/prayas.db",
            "kpis": db_metrics
        }
    }


@app.post("/api/reindex")
def reindex_endpoint():
    """Re-scrapes website and rebuilds vector index."""
    try:
        run_scraper()
        run_indexer()
        engine = get_rag_engine()
        engine.load_index()
        return {"status": "success", "message": f"Successfully reindexed {len(engine.chunks)} clean chunks."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    init_db()
    print("Starting Prayas Foundation Unified 24/7 AI, SQL & Email Server on port 8000...")
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        timeout_keep_alive=75,
        limit_concurrency=100
    )
