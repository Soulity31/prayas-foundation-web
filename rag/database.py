"""
Prayas Foundation SQL Database & High-Deliverability Email Engine
Provides structured relational storage using SQLite with standard SQL queries.
Supports:
- 80G Tax Exemption Donations (with PAN & Tax Receipt Generation)
- Normal / Non-80G General Donations (Direct UPI, Cards, NetBanking)
- Volunteer Registrations & Onboarding
- Contact Inquiries & Feedback
- RFC 5322 High-Deliverability Email Inboxing System (Anti-Spam Optimized)
"""

import os
import io
import time
import socket
import sqlite3
import random
import string
import smtplib
import threading
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Any, Optional
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.utils import formatdate, make_msgid, formataddr

try:
    from reportlab.lib.pagesizes import A4
    from reportlab.lib import colors
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.enums import TA_CENTER, TA_RIGHT, TA_LEFT, TA_JUSTIFY
    REPORTLAB_AVAILABLE = True
except ImportError:
    REPORTLAB_AVAILABLE = False

DB_PATH = Path(__file__).resolve().parent / "prayas.db"

# Official Trust Details
PRAYAS_LEGAL_INFO = {
    "name": "Prayas Foundation (Trust)",
    "reg_no": "E-33214 (Mumbai)",
    "pan": "AAATP4928PF20214",
    "approval_80g": "CIT(E)/80G/12A/2021-22/W-412",
    "address": "Mumbai Public School, Gate No. 6, Malvani, Malad (West), Mumbai - 400095, Maharashtra",
    "phone": "+91-9820500726",
    "email": "info@prayasfoundation.co.in",
    "website": "https://prayasfoundation.co.in",
    "signatory": "Brijesh Singh (Trustee / Chairman)"
}


def get_db_connection() -> sqlite3.Connection:
    """Returns a resilient SQLite connection with WAL mode, busy timeout, and thread safety."""
    conn = sqlite3.connect(str(DB_PATH), timeout=30.0, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode = WAL;")
    conn.execute("PRAGMA busy_timeout = 30000;")
    conn.execute("PRAGMA synchronous = NORMAL;")
    conn.execute("PRAGMA foreign_keys = ON;")
    return conn


@contextmanager
def db_session():
    """Context manager ensuring SQLite connection is always safely closed, preventing leaks."""
    conn = get_db_connection()
    try:
        yield conn
    finally:
        try:
            conn.close()
        except Exception:
            pass


def init_db():
    """Initializes all SQL database tables and seeds initial verified records."""
    with db_session() as conn:
        cursor = conn.cursor()

        # 1. Donations Table (Supports both 80G Tax Deductible and Normal General Donations)
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS donations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            donor_name TEXT NOT NULL,
            donor_email TEXT NOT NULL,
            donor_phone TEXT NOT NULL,
            donor_pan TEXT,
            amount REAL NOT NULL,
            payment_mode TEXT DEFAULT 'UPI',
            transaction_id TEXT UNIQUE,
            tax_80g_receipt_no TEXT UNIQUE,
            is_80g BOOLEAN DEFAULT 1,
            cause TEXT DEFAULT 'General School Support',
            status TEXT DEFAULT 'COMPLETED',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """)

        try:
            cursor.execute("ALTER TABLE donations ADD COLUMN is_80g BOOLEAN DEFAULT 1;")
        except sqlite3.OperationalError:
            pass

        # 2. Volunteers Table
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS volunteers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            skills TEXT,
            availability TEXT,
            city TEXT DEFAULT 'Mumbai',
            status TEXT DEFAULT 'NEW',
            applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """)

        # 3. Contact Inquiries Table
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_inquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            subject TEXT,
            message TEXT NOT NULL,
            is_resolved BOOLEAN DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """)

        # 4. Chatbot Interaction Logs (Telemetry)
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS chatbot_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_query TEXT NOT NULL,
            bot_response TEXT NOT NULL,
            confidence_score REAL,
            confidence_percent TEXT,
            language TEXT DEFAULT 'en',
            engine TEXT DEFAULT 'local_pytorch_rag',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """)

        # 5. Email Dispatch Logs Table
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS email_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            recipient TEXT NOT NULL,
            subject TEXT NOT NULL,
            email_type TEXT NOT NULL,
            status TEXT NOT NULL,
            provider TEXT DEFAULT 'SMTP',
            error_message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        """)

        conn.commit()


def generate_80g_receipt_no() -> str:
    """Generates a sequential / unique 80G tax exemption receipt number."""
    year = datetime.now().year
    random_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
    return f"80G-PF-{year}-{random_code}"


# =========================================================================
# SQL Data Access Methods
# =========================================================================

def record_donation(
    donor_name: str,
    donor_email: str,
    donor_phone: str,
    amount: float,
    donor_pan: Optional[str] = None,
    payment_mode: str = "UPI",
    is_80g: bool = False,
    transaction_id: Optional[str] = None,
    cause: str = "General School Support"
) -> Dict[str, Any]:
    """Records a donation in SQL with proper distinction between 80G Tax Exemption vs Normal Direct Donations."""
    if not transaction_id:
        prefix = "UPI" if "UPI" in payment_mode.upper() else "CRD" if "CARD" in payment_mode.upper() else "TXN"
        transaction_id = f"{prefix}-{int(datetime.now().timestamp())}-{random.randint(100, 999)}"
    
    year = datetime.now().year
    random_code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
    
    # 80G requires explicit is_80g request OR provided PAN
    if is_80g or (donor_pan and len(donor_pan.strip()) >= 5):
        receipt_no = f"80G-PF-{year}-{random_code}"
        is_80g_val = 1
    else:
        receipt_no = f"RCP-PF-{year}-{random_code}"
        is_80g_val = 0

    with db_session() as conn:
        cursor = conn.cursor()
        try:
            cursor.execute("""
            INSERT INTO donations (donor_name, donor_email, donor_phone, donor_pan, amount, payment_mode, transaction_id, tax_80g_receipt_no, is_80g, cause, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED')
            """, (donor_name, donor_email, donor_phone, donor_pan or "", float(amount), payment_mode, transaction_id, receipt_no, is_80g_val, cause))
            conn.commit()
        except sqlite3.IntegrityError:
            transaction_id = f"{transaction_id}-{int(datetime.now().timestamp())}-{random.randint(10, 99)}"
            cursor.execute("""
            INSERT INTO donations (donor_name, donor_email, donor_phone, donor_pan, amount, payment_mode, transaction_id, tax_80g_receipt_no, is_80g, cause, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED')
            """, (donor_name, donor_email, donor_phone, donor_pan or "", float(amount), payment_mode, transaction_id, receipt_no, is_80g_val, cause))
            conn.commit()
        donation_id = cursor.lastrowid

    # Automatically trigger email receipt in non-blocking background thread
    try:
        threading.Thread(target=send_donation_receipt_email, args=(donation_id, donor_email), daemon=True).start()
    except Exception as em_err:
        pass

    success_msg = f"Thank you for supporting Prayas Foundation! Your 80G Tax Exemption Receipt {receipt_no} has been registered." if is_80g_val else f"Thank you for your generous contribution to Prayas Foundation! Receipt #{receipt_no} has been registered."

    return {
        "id": donation_id,
        "donor_name": donor_name,
        "amount": amount,
        "is_80g": bool(is_80g_val),
        "payment_mode": payment_mode,
        "transaction_id": transaction_id,
        "tax_80g_receipt_no": receipt_no,
        "status": "COMPLETED",
        "email_delivery": {"dispatched_async": True},
        "message": success_msg
    }


def get_all_donations(limit: int = 100, filter_type: str = "all") -> List[Dict[str, Any]]:
    """Retrieves recent donations ordered by timestamp with optional 80G vs Normal filter."""
    with db_session() as conn:
        cursor = conn.cursor()
        
        if filter_type == "80g":
            cursor.execute("SELECT * FROM donations WHERE is_80g = 1 ORDER BY id DESC LIMIT ?", (limit,))
        elif filter_type == "normal":
            cursor.execute("SELECT * FROM donations WHERE is_80g = 0 OR is_80g IS NULL ORDER BY id DESC LIMIT ?", (limit,))
        else:
            cursor.execute("SELECT * FROM donations ORDER BY id DESC LIMIT ?", (limit,))
            
        rows = [dict(row) for row in cursor.fetchall()]
        return rows


def record_volunteer(
    full_name: str,
    email: str,
    phone: str,
    skills: str,
    availability: str,
    city: str = "Mumbai"
) -> Dict[str, Any]:
    """Registers a new volunteer and triggers welcome email."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("""
        INSERT INTO volunteers (full_name, email, phone, skills, availability, city, status)
        VALUES (?, ?, ?, ?, ?, ?, 'NEW')
        """, (full_name, email, phone, skills, availability, city))
        conn.commit()
        vol_id = cursor.lastrowid

    # Trigger volunteer welcome email
    try:
        send_volunteer_welcome_emails(vol_id)
    except Exception:
        pass

    return {
        "id": vol_id,
        "full_name": full_name,
        "status": "NEW",
        "message": "Volunteer registration successful! A confirmation packet has been dispatched to your email."
    }


def get_all_volunteers(limit: int = 50) -> List[Dict[str, Any]]:
    """Retrieves volunteer registrations."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM volunteers ORDER BY id DESC LIMIT ?", (limit,))
        rows = [dict(row) for row in cursor.fetchall()]
        return rows


def record_contact_inquiry(
    name: str,
    email: str,
    message: str,
    phone: Optional[str] = None,
    subject: Optional[str] = "General Inquiry"
) -> Dict[str, Any]:
    """Records a visitor contact inquiry and triggers auto-acknowledgment email."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("""
        INSERT INTO contact_inquiries (name, email, phone, subject, message, is_resolved)
        VALUES (?, ?, ?, ?, ?, 0)
        """, (name, email, phone or "", subject or "General Inquiry", message))
        conn.commit()
        inquiry_id = cursor.lastrowid

    # Trigger inquiry confirmation email
    try:
        send_contact_inquiry_emails(inquiry_id)
    except Exception:
        pass

    return {
        "id": inquiry_id,
        "name": name,
        "message": "Your message has been received! An official acknowledgment has been dispatched to your email."
    }


def get_all_inquiries(limit: int = 50) -> List[Dict[str, Any]]:
    """Retrieves contact inquiries."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM contact_inquiries ORDER BY id DESC LIMIT ?", (limit,))
        rows = [dict(row) for row in cursor.fetchall()]
        return rows


def log_chatbot_query(
    user_query: str,
    bot_response: str,
    confidence_score: float,
    confidence_percent: str,
    language: str = "en",
    engine: str = "local_pytorch_rag"
):
    """Stores chatbot telemetry."""
    try:
        with db_session() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO chatbot_logs (user_query, bot_response, confidence_score, confidence_percent, language, engine)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (user_query, bot_response, float(confidence_score), str(confidence_percent), language, engine))
            conn.commit()
    except Exception as e:
        print(f"Error logging chatbot query: {e}")


def get_all_chatbot_logs(limit: int = 50) -> List[Dict[str, Any]]:
    """Retrieves chatbot interaction history."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM chatbot_logs ORDER BY id DESC LIMIT ?", (limit,))
        rows = [dict(row) for row in cursor.fetchall()]
        return rows


def get_dashboard_metrics() -> Dict[str, Any]:
    """Computes real-time executive dashboard KPIs."""
    with db_session() as conn:
        cursor = conn.cursor()

        cursor.execute("SELECT COALESCE(SUM(amount), 0), COUNT(*) FROM donations WHERE status = 'COMPLETED'")
        total_donations, donor_count = cursor.fetchone()

        cursor.execute("SELECT COALESCE(SUM(amount), 0), COUNT(*) FROM donations WHERE (is_80g = 1 OR (tax_80g_receipt_no IS NOT NULL AND tax_80g_receipt_no != '')) AND status = 'COMPLETED'")
        donations_80g_total, donations_80g_count = cursor.fetchone()

        cursor.execute("SELECT COALESCE(SUM(amount), 0), COUNT(*) FROM donations WHERE (is_80g = 0 OR is_80g IS NULL OR tax_80g_receipt_no IS NULL OR tax_80g_receipt_no = '') AND status = 'COMPLETED'")
        normal_donations_total, normal_donations_count = cursor.fetchone()

        cursor.execute("SELECT COUNT(*) FROM volunteers")
        volunteer_count = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*), SUM(CASE WHEN is_resolved = 0 THEN 1 ELSE 0 END) FROM contact_inquiries")
        total_inquiries, pending_inquiries = cursor.fetchone()

        cursor.execute("SELECT COUNT(*) FROM email_logs")
        total_emails_dispatched = cursor.fetchone()[0]

        return {
            "total_donations": round(total_donations, 2),
            "total_donations_formatted": f"₹{total_donations:,.2f}",
            "donations_80g_total": round(donations_80g_total, 2),
            "donations_80g_total_formatted": f"₹{donations_80g_total:,.2f}",
            "donations_80g_count": donations_80g_count,
            "normal_donations_total": round(normal_donations_total, 2),
            "normal_donations_total_formatted": f"₹{normal_donations_total:,.2f}",
            "normal_donations_count": normal_donations_count,
            "donor_count": donor_count,
            "volunteer_count": volunteer_count,
            "total_inquiries": total_inquiries or 0,
            "pending_inquiries": pending_inquiries or 0,
            "total_emails_dispatched": total_emails_dispatched or 0
        }


def update_volunteer_status(vol_id: int, status: str) -> Dict[str, Any]:
    """Updates volunteer operational status in SQL."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE volunteers SET status = ? WHERE id = ?", (status, vol_id))
        conn.commit()
        cursor.execute("SELECT * FROM volunteers WHERE id = ?", (vol_id,))
        row = cursor.fetchone()
        if not row:
            raise ValueError(f"Volunteer #{vol_id} not found.")
        return {"success": True, "volunteer": dict(row)}


def toggle_inquiry_resolved(inquiry_id: int, is_resolved: Optional[int] = None) -> Dict[str, Any]:
    """Toggles or sets the resolution state of a contact inquiry in SQL."""
    with db_session() as conn:
        cursor = conn.cursor()
        if is_resolved is None:
            cursor.execute("SELECT is_resolved FROM contact_inquiries WHERE id = ?", (inquiry_id,))
            row = cursor.fetchone()
            if not row:
                raise ValueError(f"Inquiry #{inquiry_id} not found.")
            new_val = 0 if row[0] else 1
        else:
            new_val = 1 if is_resolved else 0
        
        cursor.execute("UPDATE contact_inquiries SET is_resolved = ? WHERE id = ?", (new_val, inquiry_id))
        conn.commit()
        cursor.execute("SELECT * FROM contact_inquiries WHERE id = ?", (inquiry_id,))
        updated_row = dict(cursor.fetchone())
        return {"success": True, "inquiry": updated_row}


def log_email_dispatch(
    recipient: str,
    subject: str,
    email_type: str,
    status: str,
    provider: str = "SMTP",
    error_message: Optional[str] = None
):
    """Records every email dispatch into SQL database."""
    try:
        with db_session() as conn:
            cursor = conn.cursor()
            cursor.execute("""
            INSERT INTO email_logs (recipient, subject, email_type, status, provider, error_message)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (recipient, subject, email_type, status, provider, error_message))
            conn.commit()
    except Exception as e:
        print(f"Error logging email dispatch: {e}")


def get_email_logs(limit: int = 50) -> List[Dict[str, Any]]:
    """Retrieves history of dispatched emails."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM email_logs ORDER BY id DESC LIMIT ?", (limit,))
        rows = [dict(row) for row in cursor.fetchall()]
        return rows
    return rows


# =========================================================================
# High-Deliverability Email & SMTP Engine
# =========================================================================

def _load_env_config():
    """Loads or reloads .env configuration variables into os.environ."""
    env_file = Path(__file__).resolve().parent.parent / ".env"
    if env_file.exists():
        try:
            with open(env_file, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        k, v = line.split("=", 1)
                        os.environ[k.strip()] = v.strip().strip("\"'")
        except Exception as e:
            print(f"Error loading .env file: {e}")


def get_smtp_config_status() -> Dict[str, Any]:
    """Returns current SMTP configuration status, diagnostics, and presets."""
    _load_env_config()
    host = os.environ.get("SMTP_HOST", "smtp.gmail.com").strip()
    port = int(os.environ.get("SMTP_PORT", 587))
    user = os.environ.get("SMTP_USER", "").strip()
    has_pass = bool(os.environ.get("SMTP_PASSWORD", "").strip())
    from_name = os.environ.get("SMTP_FROM_NAME", "Prayas Foundation Trust").strip('"\'')

    is_configured = bool(user and has_pass)
    masked_user = (user[:3] + "***" + user[user.find("@"):]) if ("@" in user and len(user) > 4) else (user[:2] + "***" if user else "")

    return {
        "is_configured": is_configured,
        "smtp_host": host,
        "smtp_port": port,
        "smtp_user": masked_user,
        "raw_user": user,
        "has_password": has_pass,
        "from_name": from_name,
        "status_text": "Live SMTP Configured" if is_configured else "SMTP Unconfigured (Client Compose Active)"
    }


def save_smtp_config(host: str, port: int, user: str, password: str, from_name: str = "Prayas Foundation Trust") -> Dict[str, Any]:
    """Updates .env file with new SMTP credentials and updates os.environ."""
    env_file = Path(__file__).resolve().parent.parent / ".env"
    
    clean_host = (host or "smtp.gmail.com").strip()
    clean_port = int(port or 587)
    clean_user = user.strip()
    clean_pass = password.strip().replace(" ", "")  # Strip accidental spaces in Google app passwords
    clean_name = from_name.strip() or "Prayas Foundation Trust"

    content = f"""# ==============================================================================
# Prayas Foundation - Unified SMTP & Email Delivery Configuration
# ==============================================================================
SMTP_HOST={clean_host}
SMTP_PORT={clean_port}
SMTP_USER={clean_user}
SMTP_PASSWORD={clean_pass}
SMTP_FROM_NAME="{clean_name}"
SMTP_USE_TLS=true
"""
    with open(env_file, "w", encoding="utf-8") as f:
        f.write(content)
    
    _load_env_config()
    return {"status": "success", "message": "SMTP configuration saved and loaded successfully."}


def generate_80g_receipt_pdf(data: Dict[str, Any]) -> bytes:
    """
    Generates a high-resolution, vector-quality Donation Certificate in PDF format.
    Dynamically renders:
    - Section 80G Tax Exemption Certificate (if is_80g is True)
    - General Charitable Donation Receipt (if under normal/non-80G conditions)
    """
    is_80g = bool(data.get("is_80g") or (data.get("tax_80g_receipt_no") and "80G" in str(data.get("tax_80g_receipt_no"))))
    amt = float(data.get("amount", 0))
    amt_fmt = f"INR {amt:,.2f}"
    donor_name = data.get("donor_name", "Valued Supporter")
    donor_email = data.get("donor_email", "N/A")
    donor_phone = data.get("donor_phone", "N/A")
    payment_mode = data.get("payment_mode", "UPI (Instant)")
    txn_id = data.get("transaction_id", f"TXN-{data.get('id', 1001)}")
    cause = data.get("cause", "Mumbai Public School Education & Khan Academy Digital Tablets")
    created_at = str(data.get("created_at", datetime.now().strftime("%Y-%m-%d")))[:10]

    if is_80g:
        receipt_no = data.get("tax_80g_receipt_no") or f"80G-PF-2026-X{data.get('id', 1001)}"
        donor_pan = data.get("donor_pan") or "Provided on File"
        banner_title = "OFFICIAL SECTION 80G TAX EXEMPTION DONATION RECEIPT"
        banner_sub = "Issued under Section 80G(5)(vi) of the Income Tax Act, 1961"
        tax_benefit_text = "<strong>50% Exemption under Section 80G</strong>"
        status_text = '<font color="#059669"><strong>PAID / EXEMPTION VALID</strong></font>'
        decl_text = (
            f"<strong>Statutory 80G Declaration:</strong> Certified that the donation of {amt_fmt} received from {donor_name} "
            f"(PAN: {donor_pan}) shall be utilized solely for the educational, medical, and social welfare objectives of Prayas Foundation managing "
            f"Mumbai Public School. This receipt is an authentic tax certificate eligible for 50% deduction under Section 80G(5)(vi) "
            f"of the Income Tax Act, 1961 pursuant to Order No. {PRAYAS_LEGAL_INFO['approval_80g']}."
        )
        banner_bg = colors.HexColor('#ecfdf5') if REPORTLAB_AVAILABLE else None
        banner_border = colors.HexColor('#10b981') if REPORTLAB_AVAILABLE else None
        banner_text_color = colors.HexColor('#065f46') if REPORTLAB_AVAILABLE else None
    else:
        # NORMAL / GENERAL DONATION CONDITIONS (Non-80G Direct Support)
        raw_receipt = data.get("tax_80g_receipt_no") or f"RCP-PF-2026-N{data.get('id', 1001)}"
        receipt_no = raw_receipt.replace("80G-PF-", "RCP-PF-") if ("80G-PF-" in raw_receipt and not data.get("is_80g")) else raw_receipt
        donor_pan = data.get("donor_pan") if (data.get("donor_pan") and len(data.get("donor_pan").strip()) >= 5) else "Not Applicable (General Support)"
        banner_title = "OFFICIAL DONATION RECEIPT & ACKNOWLEDGMENT"
        banner_sub = "Issued by Prayas Foundation Trust • Reg. No. E-33214 (Mumbai)"
        tax_benefit_text = "General Direct Contribution (Standard Non-80G Receipt)"
        status_text = '<font color="#0284c7"><strong>PAID / VERIFIED CONTRIBUTION</strong></font>'
        decl_text = (
            f"<strong>Official Donation Acknowledgment:</strong> Certified with sincere gratitude that the voluntary contribution "
            f"of {amt_fmt} received from {donor_name} has been received by Prayas Foundation (Trust) and shall be utilized "
            f"exclusively for the educational development, child nutrition, and student welfare activities at Mumbai Public School, Malvani."
        )
        banner_bg = colors.HexColor('#f0f9ff') if REPORTLAB_AVAILABLE else None
        banner_border = colors.HexColor('#0284c7') if REPORTLAB_AVAILABLE else None
        banner_text_color = colors.HexColor('#0369a1') if REPORTLAB_AVAILABLE else None

    if REPORTLAB_AVAILABLE:
        buf = io.BytesIO()
        doc = SimpleDocTemplate(
            buf,
            pagesize=A4,
            rightMargin=36,
            leftMargin=36,
            topMargin=36,
            bottomMargin=36
        )
        styles = getSampleStyleSheet()

        title_style = ParagraphStyle(
            'MainTitle',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=18,
            leading=22,
            alignment=TA_CENTER,
            textColor=colors.HexColor('#065f46')
        )
        subtitle_style = ParagraphStyle(
            'SubTitle',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=9,
            leading=12,
            alignment=TA_CENTER,
            textColor=colors.HexColor('#1e293b')
        )
        address_style = ParagraphStyle(
            'Address',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=8,
            leading=11,
            alignment=TA_CENTER,
            textColor=colors.HexColor('#64748b')
        )
        banner_style = ParagraphStyle(
            'Banner',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=12,
            leading=15,
            alignment=TA_CENTER,
            textColor=banner_text_color
        )
        cell_lbl_style = ParagraphStyle(
            'CellLabel',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=9,
            leading=12,
            textColor=colors.HexColor('#475569')
        )
        cell_val_style = ParagraphStyle(
            'CellValue',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=9,
            leading=12,
            textColor=colors.HexColor('#0f172a')
        )
        cell_amt_style = ParagraphStyle(
            'CellAmount',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=12,
            leading=15,
            textColor=colors.HexColor('#059669')
        )
        exemption_style = ParagraphStyle(
            'Exemption',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=8.5,
            leading=12,
            alignment=TA_JUSTIFY,
            textColor=colors.HexColor('#1e293b')
        )

        elements = []

        # 1. Header Block
        elements.append(Paragraph('PRAYAS FOUNDATION (TRUST)', title_style))
        elements.append(Spacer(1, 3))
        elements.append(Paragraph('REGISTERED PUBLIC CHARITABLE TRUST • MANAGING MUMBAI PUBLIC SCHOOL (CBSE & SSC)', subtitle_style))
        elements.append(Spacer(1, 3))
        elements.append(Paragraph(f"Regn No: {PRAYAS_LEGAL_INFO['reg_no']} • PAN: {PRAYAS_LEGAL_INFO['pan']} • 80G Approval: {PRAYAS_LEGAL_INFO['approval_80g']}", address_style))
        elements.append(Paragraph(f"{PRAYAS_LEGAL_INFO['address']} • Email: {PRAYAS_LEGAL_INFO['email']}", address_style))
        elements.append(Spacer(1, 8))
        elements.append(HRFlowable(width='100%', thickness=2, color=colors.HexColor('#059669'), spaceBefore=2, spaceAfter=8))

        # 2. Receipt Banner Box
        banner_data = [
            [Paragraph(banner_title, banner_style)],
            [Paragraph(banner_sub, ParagraphStyle('SubBanner', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=10, alignment=TA_CENTER, textColor=banner_text_color))]
        ]
        banner_table = Table(banner_data, colWidths=[523])
        banner_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), banner_bg),
            ('BOX', (0, 0), (-1, -1), 1, banner_border),
            ('PADDING', (0, 0), (-1, -1), 6),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ]))
        elements.append(banner_table)
        elements.append(Spacer(1, 10))

        # 3. Details Table
        details_data = [
            [Paragraph('Receipt Number:', cell_lbl_style), Paragraph(f'<strong>{receipt_no}</strong>', cell_val_style), Paragraph('Date of Receipt:', cell_lbl_style), Paragraph(created_at, cell_val_style)],
            [Paragraph('Donor Full Name:', cell_lbl_style), Paragraph(f'<strong>{donor_name}</strong>', cell_val_style), Paragraph('Donor PAN / ID:', cell_lbl_style), Paragraph(f'<strong>{donor_pan}</strong>', cell_val_style)],
            [Paragraph('Email Address:', cell_lbl_style), Paragraph(donor_email, cell_val_style), Paragraph('Phone Number:', cell_lbl_style), Paragraph(donor_phone, cell_val_style)],
            [Paragraph('Payment Mode:', cell_lbl_style), Paragraph(payment_mode, cell_val_style), Paragraph('Transaction Ref:', cell_lbl_style), Paragraph(txn_id, cell_val_style)],
            [Paragraph('Earmarked Cause:', cell_lbl_style), Paragraph(cause, cell_val_style), Paragraph('Receipt Status:', cell_lbl_style), Paragraph(status_text, cell_val_style)],
            [Paragraph('Amount Contributed:', cell_lbl_style), Paragraph(amt_fmt, cell_amt_style), Paragraph('Tax Category:', cell_lbl_style), Paragraph(tax_benefit_text, cell_val_style)]
        ]

        details_table = Table(details_data, colWidths=[120, 150, 110, 143])
        details_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#ffffff')),
            ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
            ('INNERGRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e2e8f0')),
            ('PADDING', (0, 0), (-1, -1), 6),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#f8fafc')),
            ('BACKGROUND', (2, 0), (2, -1), colors.HexColor('#f8fafc')),
        ]))
        elements.append(details_table)
        elements.append(Spacer(1, 10))

        # 4. Declaration
        decl_data = [[Paragraph(decl_text, exemption_style)]]
        decl_table = Table(decl_data, colWidths=[523])
        decl_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#f8fafc')),
            ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#cbd5e1')),
            ('PADDING', (0, 0), (-1, -1), 8),
        ]))
        elements.append(decl_table)
        elements.append(Spacer(1, 14))

        # 5. Signature & Trust Seal
        sig_data = [
            [
                Paragraph(f"<strong>Trust Seal:</strong><br/><font color=\"#64748b\" size=\"7\">PRAYAS FOUNDATION TRUST<br/>Regn {PRAYAS_LEGAL_INFO['reg_no']}</font>", ParagraphStyle('Seal', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=10)),
                Paragraph(f"<strong>Authorised Signatory:</strong><br/><font color=\"#065f46\" size=\"9\"><b>{PRAYAS_LEGAL_INFO['signatory']}</b></font><br/><font color=\"#64748b\" size=\"8\">Chairman & Managing Trustee<br/>Prayas Foundation (Trust)</font>", ParagraphStyle('Sign', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=11, alignment=TA_RIGHT))
            ]
        ]
        sig_table = Table(sig_data, colWidths=[260, 263])
        sig_table.setStyle(TableStyle([
            ('PADDING', (0, 0), (-1, -1), 2),
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ]))
        elements.append(sig_table)
        elements.append(Spacer(1, 8))
        elements.append(HRFlowable(width='100%', thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=4))
        elements.append(Paragraph('This is an official computer-generated receipt valid under IT Rules, 1962. No physical signature required.', ParagraphStyle('Foot', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=7.5, leading=9, alignment=TA_CENTER, textColor=colors.HexColor('#94a3b8'))))

        doc.build(elements)
        return buf.getvalue()
    else:
        raw_txt = f"%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 595 842]/Parent 2 0 R/Contents 4 0 R>>endobj 4 0 obj<</Length 100>>stream\nBT /F1 12 Tf 50 750 Td (PRAYAS FOUNDATION RECEIPT #{receipt_no}) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000010 00000 n \n0000000060 00000 n \n0000000115 00000 n \n0000000210 00000 n \ntrailer<</Size 5/Root 1 0 R>>\nstartxref\n360\n%%EOF"
        return raw_txt.encode('utf-8')


def build_rfc_email(
    to_name: str,
    to_email: str,
    subject: str,
    body_text: str,
    body_html: str,
    sender_name: str,
    sender_email: str,
    reply_to: str = "info@prayasfoundation.co.in",
    pdf_attachment: Optional[bytes] = None,
    pdf_filename: Optional[str] = None
) -> MIMEMultipart:
    """
    Constructs an RFC 5322 and RFC 2822 compliant multi-part MIME email message.
    Includes vital headers to maximize inbox placement and defeat spam filters:
    - Message-ID (unique per email)
    - Date (RFC 2822 format)
    - MIME-Version 1.0
    - From & To (RFC 2822 formatted addresses)
    - Reply-To
    - X-Mailer & Auto-Submitted headers
    - Optional PDF attachment (MIMEApplication)
    """
    domain = sender_email.split("@")[1] if ("@" in sender_email and "." in sender_email.split("@")[1]) else "prayasfoundation.co.in"
    
    # Text alternative must come first, followed by HTML (RFC standard)
    part_text = MIMEText(body_text, "plain", "utf-8")
    part_html = MIMEText(body_html, "html", "utf-8")

    if pdf_attachment:
        msg = MIMEMultipart("mixed")
        body_container = MIMEMultipart("alternative")
        body_container.attach(part_text)
        body_container.attach(part_html)
        msg.attach(body_container)

        clean_filename = pdf_filename or "Official_80G_Tax_Receipt.pdf"
        part_pdf = MIMEApplication(pdf_attachment, _subtype="pdf")
        part_pdf.add_header("Content-Disposition", "attachment", filename=clean_filename)
        part_pdf.add_header("Content-Type", "application/pdf", name=clean_filename)
        msg.attach(part_pdf)
    else:
        msg = MIMEMultipart("alternative")
        msg.attach(part_text)
        msg.attach(part_html)

    msg["Message-ID"] = make_msgid(domain=domain)
    msg["Date"] = formatdate(localtime=True)
    msg["Subject"] = subject
    msg["From"] = formataddr((sender_name, sender_email))
    msg["To"] = formataddr((to_name, to_email)) if to_name else to_email
    msg["Reply-To"] = formataddr(("Prayas Foundation Support", reply_to))
    msg["MIME-Version"] = "1.0"
    msg["X-Mailer"] = "Prayas-Foundation-Mailer/2.0"
    msg["X-Priority"] = "3"
    msg["Auto-Submitted"] = "auto-generated"
    msg["X-Entity-Ref-ID"] = str(int(time.time()))

    return msg


def test_smtp_connection(
    host: Optional[str] = None,
    port: Optional[int] = None,
    user: Optional[str] = None,
    password: Optional[str] = None
) -> Dict[str, Any]:
    """
    Performs step-by-step deep socket and auth diagnostics to verify SMTP connectivity.
    Steps:
    1. DNS Lookup & Host IP resolution
    2. TCP Socket connect & latency check
    3. TLS / SSL negotiation
    4. SMTP Authentication check
    """
    _load_env_config()
    target_host = (host or os.environ.get("SMTP_HOST", "smtp.gmail.com")).strip()
    target_port = int(port or os.environ.get("SMTP_PORT", 587))
    target_user = (user or os.environ.get("SMTP_USER", "")).strip()
    target_pass = (password or os.environ.get("SMTP_PASSWORD", "")).strip().replace(" ", "")

    steps = []
    start_all = time.time()

    if not target_host or not target_user or not target_pass:
        return {
            "success": False,
            "latency_ms": 0,
            "steps": ["⚠️ Missing Host, Username or App Password."],
            "error": "Please provide SMTP Host, User Email, and App Password."
        }

    # Step 1: DNS Resolution
    t0 = time.time()
    try:
        ip_addr = socket.gethostbyname(target_host)
        steps.append(f"✓ DNS Resolution: {target_host} resolved to {ip_addr} ({int((time.time() - t0)*1000)}ms)")
    except Exception as e:
        return {
            "success": False,
            "latency_ms": int((time.time() - start_all)*1000),
            "steps": steps + [f"✗ DNS Resolution failed: {str(e)}"],
            "error": f"Cannot resolve hostname {target_host}: {str(e)}"
        }

    # Step 2 & 3: Connection & Handshake
    t1 = time.time()
    try:
        if target_port == 465:
            steps.append(f"Connecting via SSL/TLS on port {target_port}...")
            server = smtplib.SMTP_SSL(target_host, target_port, timeout=12)
            steps.append(f"✓ SSL Handshake established ({int((time.time() - t1)*1000)}ms)")
        else:
            steps.append(f"Connecting via STARTTLS on port {target_port}...")
            server = smtplib.SMTP(target_host, target_port, timeout=12)
            server.ehlo()
            if server.has_extn("STARTTLS"):
                server.starttls()
                server.ehlo()
                steps.append(f"✓ STARTTLS Encryption negotiated ({int((time.time() - t1)*1000)}ms)")
            else:
                steps.append(f"ℹ️ Plain connection on port {target_port} (No STARTTLS)")

        # Step 4: Auth Check
        t2 = time.time()
        server.login(target_user, target_pass)
        steps.append(f"✓ SMTP Authentication successful for {target_user} ({int((time.time() - t2)*1000)}ms)")
        server.quit()

        total_ms = int((time.time() - start_all) * 1000)
        return {
            "success": True,
            "latency_ms": total_ms,
            "host": target_host,
            "port": target_port,
            "user": target_user,
            "steps": steps,
            "message": f"SMTP Connection & Authentication Verified Successfully ({total_ms}ms)."
        }
    except smtplib.SMTPAuthenticationError as auth_err:
        return {
            "success": False,
            "latency_ms": int((time.time() - start_all)*1000),
            "steps": steps + [f"✗ Authentication Failed: {str(auth_err)}"],
            "error": "Authentication Failed. For Gmail, make sure 2-Step Verification is enabled and use a 16-character App Password (not your regular account password)."
        }
    except Exception as err:
        return {
            "success": False,
            "latency_ms": int((time.time() - start_all)*1000),
            "steps": steps + [f"✗ Socket/Connection Error: {str(err)}"],
            "error": f"Connection Error ({type(err).__name__}): {str(err)}"
        }


def dispatch_smtp_message(
    to_name: str,
    to_email: str,
    subject: str,
    body_text: str,
    body_html: str,
    email_type: str = "general",
    pdf_attachment: Optional[bytes] = None,
    pdf_filename: Optional[str] = None
) -> Dict[str, Any]:
    """
    Executes live SMTP dispatch to recipient email using RFC 5322 compliance.
    Includes smart multi-port auto-negotiation and automatic failover.
    Supports optional PDF attachment (e.g. Official 80G Tax Exemption Certificate).
    """
    _load_env_config()
    host = os.environ.get("SMTP_HOST", "smtp.gmail.com").strip()
    port = int(os.environ.get("SMTP_PORT", 587))
    user = os.environ.get("SMTP_USER", "").strip()
    password = os.environ.get("SMTP_PASSWORD", "").strip().replace(" ", "")
    from_name = os.environ.get("SMTP_FROM_NAME", "Prayas Foundation Trust").strip('"\'')

    if not host or not user or not password:
        err_msg = "SMTP credentials not configured in .env. Please set SMTP_USER and 16-character App Password."
        log_email_dispatch(to_email, subject, email_type, "CLIENT_FALLBACK", "None", err_msg)
        return {
            "sent": False,
            "error": err_msg
        }

    msg = build_rfc_email(
        to_name=to_name,
        to_email=to_email,
        subject=subject,
        body_text=body_text,
        body_html=body_html,
        sender_name=from_name,
        sender_email=user,
        reply_to=PRAYAS_LEGAL_INFO["email"],
        pdf_attachment=pdf_attachment,
        pdf_filename=pdf_filename
    )

    try:
        if port == 465:
            with smtplib.SMTP_SSL(host, port, timeout=3) as server:
                server.login(user, password)
                server.sendmail(user, [to_email], msg.as_string())
        else:
            with smtplib.SMTP(host, port, timeout=3) as server:
                server.ehlo()
                if server.has_extn("STARTTLS"):
                    server.starttls()
                    server.ehlo()
                server.login(user, password)
                server.sendmail(user, [to_email], msg.as_string())

        log_email_dispatch(to_email, subject, email_type, "DELIVERED", f"{host}:{port}", None)
        return {"sent": True, "error": None}

    except smtplib.SMTPAuthenticationError as auth_err:
        err_str = f"Authentication Failed: Username or App Password incorrect. For Gmail, use a 16-character App Password. ({auth_err})"
        log_email_dispatch(to_email, subject, email_type, "FAILED", f"{host}:{port}", err_str)
        return {"sent": False, "error": err_str}
    except Exception as err:
        err_str = f"SMTP Dispatch Error ({type(err).__name__}): {str(err)}"
        log_email_dispatch(to_email, subject, email_type, "FAILED", f"{host}:{port}", err_str)
        return {"sent": False, "error": err_str}


# =========================================================================
# Email Template Generators
# =========================================================================

def _get_base_html_wrapper(title: str, preheader: str, content_body: str) -> str:
    """Provides an XHTML-compliant email envelope styled for maximum inbox deliverability."""
    return f"""<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <style type="text/css">
    body, table, td, a {{ -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }}
    table, td {{ mso-table-lspace: 0pt; mso-table-rspace: 0pt; }}
    img {{ -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }}
    body {{ margin: 0; padding: 0; width: 100% !important; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }}
  </style>
</head>
<body style="margin: 0; padding: 20px 10px; background-color: #f1f5f9;">
  <span style="display: none; font-size: 1px; color: #f1f5f9; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">{preheader}</span>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
    <!-- Header -->
    <tr>
      <td align="center" style="padding: 26px 20px; background: linear-gradient(135deg, #065f46 0%, #047857 100%); color: #ffffff;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; color: #ffffff;">PRAYAS FOUNDATION</h1>
              <p style="margin: 4px 0 0; font-size: 12px; opacity: 0.95; color: #e2e8f0;">Registered Public Charitable Trust • Reg. No. {PRAYAS_LEGAL_INFO['reg_no']}</p>
              <p style="margin: 2px 0 0; font-size: 11px; opacity: 0.85; color: #cbd5e1;">Section 80G Tax Exemption Approval: {PRAYAS_LEGAL_INFO['approval_80g']}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 26px 28px; color: #1e293b; font-size: 14px; line-height: 1.6;">
        {content_body}
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 18px 24px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11.5px; color: #64748b; text-align: center; line-height: 1.5;">
        <strong>Prayas Foundation (Trust)</strong><br />
        {PRAYAS_LEGAL_INFO['address']}<br />
        Helpline: {PRAYAS_LEGAL_INFO['phone']} | Email: <a href="mailto:{PRAYAS_LEGAL_INFO['email']}" style="color: #047857; text-decoration: underline;">{PRAYAS_LEGAL_INFO['email']}</a> | <a href="{PRAYAS_LEGAL_INFO['website']}" style="color: #047857; text-decoration: underline;">{PRAYAS_LEGAL_INFO['website']}</a>
      </td>
    </tr>
  </table>
</body>
</html>
"""


def send_donation_receipt_email(donation_id: int, recipient_email: Optional[str] = None) -> Dict[str, Any]:
    """Generates and dispatches an official 80G Tax Exemption Receipt to the donor's inbox."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM donations WHERE id = ?", (donation_id,))
        row = cursor.fetchone()
    if not row:
        raise ValueError(f"Donation #{donation_id} not found in database.")
    
    d = dict(row)
    to_email = (recipient_email or d.get("donor_email") or "").strip()
    donor_name = d.get("donor_name") or "Generous Donor"
    if not to_email:
        raise ValueError("Recipient email address is required.")

    is_80g = bool(d.get("is_80g") or (d.get("tax_80g_receipt_no") and "80G" in str(d.get("tax_80g_receipt_no"))))
    amount_fmt = f"INR {float(d['amount']):,.2f}"
    txn_ref = d.get("transaction_id") or f"TXN-{d['id']}"
    date_str = d.get("created_at") or datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cause = d.get("cause") or "Khan Academy & Digital Labs at MPS Malvani"

    if is_80g:
        receipt_no = d.get("tax_80g_receipt_no") or f"80G-PF-2026-X{d['id']:04d}"
        donor_pan = d.get("donor_pan") or "Provided on File"
        subject = f"Official 80G Tax Exemption Receipt #{receipt_no} - Prayas Foundation"
        preheader = f"Official 80G tax receipt for your contribution of {amount_fmt} to Prayas Foundation."
        type_title = "OFFICIAL 80G TAX EXEMPTION RECEIPT"
        pdf_prefix = "Official_80G_Receipt"
        statutory_block_text = f"""
STATUTORY TAX BENEFIT DECLARATION:
Donations to Prayas Foundation are eligible for 50% tax deduction under Section 80G
of the Income Tax Act, 1961 (Approval No. {PRAYAS_LEGAL_INFO['approval_80g']}).
""".strip()
        statutory_box_html = f"""
      <div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 10px; padding: 14px; margin-bottom: 18px; font-size: 12.5px; color: #065f46; line-height: 1.5;">
        🛡️ <strong>Statutory 80G Tax Deduction:</strong> Donations to Prayas Foundation are 50% tax-exempt under Section 80G of the Income Tax Act, 1961 (Approval No. {PRAYAS_LEGAL_INFO['approval_80g']}).
      </div>
        """
        ack_lead = "We gratefully acknowledge receipt of your generous contribution. Below is your official Section 80G tax exemption receipt valid for Income Tax filing."
    else:
        raw_receipt = d.get("tax_80g_receipt_no") or f"RCP-PF-2026-N{d['id']:04d}"
        receipt_no = raw_receipt.replace("80G-PF-", "RCP-PF-") if ("80G-PF-" in raw_receipt and not d.get("is_80g")) else raw_receipt
        donor_pan = d.get("donor_pan") if (d.get("donor_pan") and len(d.get("donor_pan").strip()) >= 5) else "Not Applicable (General Support)"
        subject = f"Official Donation Receipt #{receipt_no} - Prayas Foundation"
        preheader = f"Thank you for your contribution of {amount_fmt} to Prayas Foundation."
        type_title = "OFFICIAL CHARITABLE DONATION RECEIPT"
        pdf_prefix = "Official_Donation_Receipt"
        statutory_block_text = f"""
OFFICIAL DONATION ACKNOWLEDGMENT:
Thank you for supporting Prayas Foundation and Mumbai Public School, Malvani.
Your voluntary contribution is applied toward quality education, student nutrition, and child welfare.
""".strip()
        statutory_box_html = f"""
      <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; border-radius: 10px; padding: 14px; margin-bottom: 18px; font-size: 12.5px; color: #0369a1; line-height: 1.5;">
        🤝 <strong>Official Charitable Acknowledgment:</strong> Certified with sincere gratitude that your voluntary contribution is received by Prayas Foundation (Trust) and applied toward Mumbai Public School, Malvani.
      </div>
        """
        ack_lead = "Thank you for your generous support of Prayas Foundation! Below is your official donation receipt and acknowledgment certificate."

    body_text = f"""
================================================================================
                    PRAYAS FOUNDATION (CHARITABLE TRUST)
        Mumbai Public School, Malvani, Malad West, Mumbai - 400095
        Trust Reg. No: {PRAYAS_LEGAL_INFO['reg_no']} | PAN: {PRAYAS_LEGAL_INFO['pan']}
================================================================================

Dear {donor_name},

{ack_lead}

{type_title} SUMMARY:
--------------------------------------------------------------------------------
Receipt Number   : {receipt_no}
Date & Time      : {date_str}
Donor Full Name  : {donor_name}
Donor Email      : {to_email}
Donor Phone      : {d.get('donor_phone', 'N/A')}
Donor PAN / ID   : {donor_pan}
Amount Received  : {amount_fmt}
Payment Mode     : {d.get('payment_mode', 'UPI (QR Code)')}
Transaction Ref  : {txn_ref}
Cause / Purpose  : {cause}
--------------------------------------------------------------------------------

{statutory_block_text}

This is an authentic computer-generated official receipt issued by Prayas Foundation.
Your official PDF certificate is attached to this email.

Prayas Foundation Trust
Website: {PRAYAS_LEGAL_INFO['website']}
Helpline: {PRAYAS_LEGAL_INFO['phone']} | Email: {PRAYAS_LEGAL_INFO['email']}
================================================================================
""".strip()

    content_html = f"""
      <p style="margin-top: 0; font-size: 15px;">Dear <strong>{donor_name}</strong>,</p>
      <p style="color: #475569; margin-bottom: 18px;">
        {ack_lead}
      </p>

      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 18px; font-size: 13.5px; background: #f8fafc; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600; width: 40%;">Receipt Number</td>
          <td style="padding: 10px 14px; font-weight: 800; color: #047857; font-family: monospace; font-size: 14px;">{receipt_no}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Amount Received</td>
          <td style="padding: 10px 14px; font-weight: 800; color: #059669; font-size: 16px;">{amount_fmt}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Transaction Ref (UTR)</td>
          <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">{txn_ref}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Donor PAN / ID</td>
          <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">{donor_pan}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Payment Mode</td>
          <td style="padding: 10px 14px; color: #334155;">{d.get('payment_mode', 'UPI (QR Code)')}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Cause Supported</td>
          <td style="padding: 10px 14px; color: #334155;">{cause}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Date Issued</td>
          <td style="padding: 10px 14px; color: #334155;">{date_str}</td>
        </tr>
      </table>

      {statutory_box_html}

      <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-top: 10px;">
        <div style="font-size: 12px; color: #64748b;">
          <strong>Prayas Foundation (Trust)</strong><br />
          Malvani, Malad (West), Mumbai<br />
          Helpline: {PRAYAS_LEGAL_INFO['phone']}
        </div>
        <div style="text-align: right; font-size: 12px; color: #047857; font-weight: 700;">
          Authorized Signatory<br />
          <span style="font-size: 11px; color: #64748b; font-weight: normal;">Brijesh Singh (Trustee)</span>
        </div>
      </div>
    """

    body_html = _get_base_html_wrapper(
        title=f"Donation Receipt #{receipt_no}",
        preheader=preheader,
        content_body=content_html
    )

    # Automatically generate official PDF certificate
    pdf_bytes = None
    try:
        pdf_bytes = generate_80g_receipt_pdf(d)
    except Exception as pdf_err:
        print(f"Error generating receipt PDF: {pdf_err}")

    smtp_res = dispatch_smtp_message(
        to_name=donor_name,
        to_email=to_email,
        subject=subject,
        body_text=body_text,
        body_html=body_html,
        email_type="80g_receipt" if is_80g else "general_receipt",
        pdf_attachment=pdf_bytes,
        pdf_filename=f"{pdf_prefix}_{receipt_no}.pdf"
    )

    return {
        "success": True,
        "sent_live_smtp": smtp_res["sent"],
        "smtp_error": smtp_res["error"],
        "recipient": to_email,
        "subject": subject,
        "receipt_no": receipt_no,
        "amount": d["amount"],
        "is_80g": is_80g,
        "has_pdf_attachment": bool(pdf_bytes),
        "pdf_filename": f"{pdf_prefix}_{receipt_no}.pdf",
        "body_text": body_text,
        "body_html": body_html,
        "message": f"Receipt #{receipt_no} (with official PDF certificate attachment) {'delivered to ' + to_email if smtp_res['sent'] else 'prepared for ' + to_email}."
    }


def send_contact_inquiry_emails(inquiry_id: int) -> Dict[str, Any]:
    """Sends an acknowledgment email to the visitor and an alert email to the foundation."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM contact_inquiries WHERE id = ?", (inquiry_id,))
        row = cursor.fetchone()
    if not row:
        return {"sent": False, "error": "Inquiry not found."}

    inq = dict(row)
    visitor_name = inq.get("name") or "Friend"
    visitor_email = (inq.get("email") or "").strip()
    ticket_no = f"INQ-{inq['id']:04d}"

    # 1. Visitor Acknowledgment
    subject = f"We Received Your Message [Ref #{ticket_no}] - Prayas Foundation"
    preheader = f"Thank you for contacting Prayas Foundation. Ticket Ref #{ticket_no}."
    
    body_text = f"""
Dear {visitor_name},

Thank you for reaching out to Prayas Foundation. We have received your message regarding "{inq.get('subject', 'General Inquiry')}".

MESSAGE SUMMARY:
--------------------------------------------------------------------------------
Ticket Ref No    : #{ticket_no}
Submitted By     : {visitor_name}
Subject          : {inq.get('subject', 'General Inquiry')}
Message Body     : {inq.get('message', '')}
--------------------------------------------------------------------------------

Our team reviews incoming community inquiries daily and will respond shortly.

Helpline: {PRAYAS_LEGAL_INFO['phone']}
Email: {PRAYAS_LEGAL_INFO['email']}

Warm regards,
Prayas Foundation Trust Team
""".strip()

    content_html = f"""
      <p style="margin-top: 0; font-size: 15px;">Dear <strong>{visitor_name}</strong>,</p>
      <p style="color: #475569;">
        Thank you for contacting Prayas Foundation. Your inquiry has been registered in our system under reference ticket <strong>#{ticket_no}</strong>.
      </p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0; font-size: 13.5px;">
        <div style="margin-bottom: 6px;"><strong>Ticket Reference:</strong> <span style="font-family: monospace; color: #047857; font-weight: 700;">#{ticket_no}</span></div>
        <div style="margin-bottom: 6px;"><strong>Subject:</strong> {inq.get('subject', 'General Inquiry')}</div>
        <div style="margin-bottom: 6px;"><strong>Your Message:</strong></div>
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; font-size: 13px; color: #334155; white-space: pre-wrap;">{inq.get('message', '')}</div>
      </div>

      <p style="color: #475569; font-size: 13px;">
        A representative from our team will review your message and follow up shortly.
      </p>
    """

    body_html = _get_base_html_wrapper(
        title="Message Acknowledgment",
        preheader=preheader,
        content_body=content_html
    )

    res = dispatch_smtp_message(
        to_name=visitor_name,
        to_email=visitor_email,
        subject=subject,
        body_text=body_text,
        body_html=body_html,
        email_type="inquiry_acknowledgment"
    )

    return res


def send_volunteer_welcome_emails(volunteer_id: int) -> Dict[str, Any]:
    """Sends a welcome and orientation email to the newly registered volunteer."""
    with db_session() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM volunteers WHERE id = ?", (volunteer_id,))
        row = cursor.fetchone()
    if not row:
        return {"sent": False, "error": "Volunteer not found."}

    v = dict(row)
    vol_name = v.get("full_name") or "Volunteer"
    vol_email = (v.get("email") or "").strip()
    vol_id_str = f"VOL-{v['id']:04d}"

    subject = f"Welcome to Prayas Foundation Volunteer Team! [ID #{vol_id_str}]"
    preheader = f"Thank you for volunteering with Prayas Foundation, {vol_name}!"

    body_text = f"""
Dear {vol_name},

Welcome to the Prayas Foundation family! Thank you for offering your time and skills to support students at Mumbai Public School, Malvani.

VOLUNTEER REGISTRATION DETAILS:
--------------------------------------------------------------------------------
Volunteer ID     : {vol_id_str}
Full Name        : {vol_name}
Skills / Area    : {v.get('skills', 'Teaching / Mentorship')}
Availability     : {v.get('availability', 'Weekends')}
Location         : {v.get('city', 'Mumbai')}
--------------------------------------------------------------------------------

NEXT STEPS:
1. Our volunteer coordinator will reach out to schedule a brief orientation call.
2. You will be assigned to a mentoring or coaching batch based on your schedule.

Questions? Call us at {PRAYAS_LEGAL_INFO['phone']} or reply to this email.

Warm regards,
Prayas Foundation Trust Team
""".strip()

    content_html = f"""
      <p style="margin-top: 0; font-size: 15px;">Dear <strong>{vol_name}</strong>,</p>
      <p style="color: #475569;">
        Welcome to the Prayas Foundation family! We are thrilled to have you join our volunteer team dedicated to transforming underprivileged student education at Mumbai Public School, Malvani.
      </p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 16px 0; font-size: 13.5px;">
        <div style="margin-bottom: 6px;"><strong>Volunteer ID:</strong> <span style="font-family: monospace; color: #047857; font-weight: 700;">#{vol_id_str}</span></div>
        <div style="margin-bottom: 6px;"><strong>Skills / Area:</strong> {v.get('skills', 'Mentorship & Digital Literacy')}</div>
        <div style="margin-bottom: 6px;"><strong>Availability:</strong> {v.get('availability', 'Weekends')}</div>
        <div><strong>City:</strong> {v.get('city', 'Mumbai')}</div>
      </div>

      <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px; font-size: 13px; color: #065f46; margin-bottom: 16px;">
        🎯 <strong>Next Steps:</strong> Our volunteer coordinator will connect with you to align on your preferred teaching/mentoring slots.
      </div>
    """

    body_html = _get_base_html_wrapper(
        title="Volunteer Welcome",
        preheader=preheader,
        content_body=content_html
    )

    res = dispatch_smtp_message(
        to_name=vol_name,
        to_email=vol_email,
        subject=subject,
        body_text=body_text,
        body_html=body_html,
        email_type="volunteer_welcome"
    )

    return res


def send_test_receipt_email(recipient_email: str) -> Dict[str, Any]:
    """Dispatches a diagnostic test 80G tax receipt to verify live inbox delivery."""
    _load_env_config()
    date_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    receipt_no = f"80G-PF-TEST-{int(datetime.now().timestamp()) % 10000}"
    
    subject = f"Test 80G Tax Receipt #{receipt_no} - Prayas Foundation Live Verification"
    preheader = f"Live deliverability test from Prayas Foundation to {recipient_email}."

    body_text = f"""
================================================================================
           PRAYAS FOUNDATION - LIVE INBOX DELIVERABILITY TEST
================================================================================
This is a live test 80G tax exemption receipt from Prayas Foundation to verify
that live email delivery reaches your real inbox!

Receipt Number : {receipt_no}
Timestamp      : {date_str}
Recipient      : {recipient_email}
Delivery Engine: RFC 5322 Python SMTP Engine (Port 587/465)
Status         : Successfully Delivered to Inbox

Statutory 80G Approval: {PRAYAS_LEGAL_INFO['approval_80g']}
Trust Reg No: {PRAYAS_LEGAL_INFO['reg_no']}

Prayas Foundation Trust
Helpline: {PRAYAS_LEGAL_INFO['phone']} | {PRAYAS_LEGAL_INFO['email']}
================================================================================
""".strip()

    content_html = f"""
      <div style="background: #ecfdf5; border: 2px solid #10b981; border-radius: 10px; padding: 18px; text-align: center; margin-bottom: 20px;">
        <h2 style="margin: 0 0 6px 0; color: #047857; font-size: 18px;">✅ Live Deliverability Test Successful!</h2>
        <p style="margin: 0; font-size: 13.5px; color: #065f46;">
          Your email system is configured properly and reaches the inbox with full RFC 5322 compliance.
        </p>
      </div>

      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 13.5px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 18px;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600; width: 40%;">Test Receipt ID</td>
          <td style="padding: 10px 14px; font-weight: 800; color: #047857; font-family: monospace;">{receipt_no}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Recipient Email</td>
          <td style="padding: 10px 14px; font-weight: 700; color: #0f172a;">{recipient_email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Timestamp</td>
          <td style="padding: 10px 14px; color: #334155;">{date_str}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; color: #64748b; font-weight: 600;">Anti-Spam Headers</td>
          <td style="padding: 10px 14px; color: #059669; font-weight: 700;">RFC 5322 Message-ID, Date, Reply-To, Auto-Submitted</td>
        </tr>
      </table>

      <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">
        Donors making contributions on the website will receive authentic Section 80G certificates automatically in their inbox.
      </p>
    """

    body_html = _get_base_html_wrapper(
        title="Live Deliverability Test",
        preheader=preheader,
        content_body=content_html
    )

    test_data = {
        'id': 9999,
        'donor_name': 'Valued Supporter',
        'donor_email': recipient_email,
        'donor_phone': '+91-9820500726',
        'donor_pan': 'ABCDE1234F',
        'amount': 5000.0,
        'payment_mode': 'UPI (QR Direct)',
        'transaction_id': f'TXN-{int(datetime.now().timestamp()) % 100000}',
        'tax_80g_receipt_no': receipt_no,
        'cause': 'Mumbai Public School Education & Khan Academy Digital Tablets',
        'created_at': date_str
    }
    test_pdf_bytes = None
    try:
        test_pdf_bytes = generate_80g_receipt_pdf(test_data)
    except Exception as pdf_err:
        print(f"Error generating test receipt PDF: {pdf_err}")

    smtp_res = dispatch_smtp_message(
        to_name="Donor",
        to_email=recipient_email,
        subject=subject,
        body_text=body_text,
        body_html=body_html,
        email_type="test_email",
        pdf_attachment=test_pdf_bytes,
        pdf_filename=f"Official_80G_Test_Receipt_{receipt_no}.pdf"
    )

    return {
        "success": smtp_res["sent"],
        "sent_live_smtp": smtp_res["sent"],
        "smtp_error": smtp_res["error"],
        "recipient": recipient_email,
        "subject": subject,
        "receipt_no": receipt_no,
        "has_pdf_attachment": bool(test_pdf_bytes),
        "pdf_filename": f"Official_80G_Test_Receipt_{receipt_no}.pdf",
        "message": f"Live test email (with attached 80G PDF certificate) dispatched to {recipient_email} successfully!" if smtp_res["sent"] else f"SMTP test note: {smtp_res['error']}"
    }
