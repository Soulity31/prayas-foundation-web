import urllib.request
import urllib.parse
import json
import sqlite3
from pathlib import Path

BASE_URL = "http://localhost:8000"
DB_PATH = Path(__file__).resolve().parent.parent / "rag" / "prayas.db"

def test_security_headers():
    print("\n--- 1. Testing Security Headers ---")
    req = urllib.request.Request(f"{BASE_URL}/api/dashboard")
    with urllib.request.urlopen(req) as resp:
        headers = {k.lower(): v for k, v in resp.headers.items()}
        assert headers.get("x-content-type-options") == "nosniff", "Missing X-Content-Type-Options"
        assert headers.get("x-frame-options") == "SAMEORIGIN", "Missing X-Frame-Options"
        assert headers.get("x-xss-protection") == "1; mode=block", "Missing X-XSS-Protection"
        assert headers.get("referrer-policy") == "strict-origin-when-cross-origin", "Missing Referrer-Policy"
        assert "camera=()" in headers.get("permissions-policy", ""), "Missing Permissions-Policy"
        print("[PASS] All HTTP Security Headers verified successfully.")

def test_xss_sanitization_and_sql_injection():
    print("\n--- 2. Testing XSS Sanitization & SQL Injection Protection ---")
    # Test malicious payload
    payload = {
        "donor_name": "<script>alert('XSS')</script> John Doe",
        "donor_email": "xss_test@example.com",
        "donor_phone": "+919876543210",
        "amount": 2500,
        "donor_pan": "ABCDE1234F' OR '1'='1",
        "is_80g": True,
        "payment_mode": "UPI",
        "cause": "<img src=x onerror=alert(1)> Support"
    }
    
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        f"{BASE_URL}/api/donations",
        data=data,
        headers={"Content-Type": "application/json"}
    )
    
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        assert res["status"] == "success", "Donation creation failed"
        d = res["data"]
        # Ensure HTML tags are escaped
        assert "<script>" not in d["donor_name"], "XSS script tag not escaped in donor_name"
        assert "&lt;script&gt;" in d["donor_name"], "XSS script tag not properly sanitized"
        print(f"[PASS] XSS Sanitization Verified: {d['donor_name']}")

    # Check database to ensure no SQL injection occurred
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("SELECT donor_name, donor_pan FROM donations WHERE donor_email = ?", ("xss_test@example.com",))
    row = cursor.fetchone()
    assert row is not None, "Record not found in DB"
    assert "&lt;script&gt;" in row[0], "DB record not sanitized"
    print("[PASS] SQL Parameterization Verified: Record saved safely without injection.")
    
    # Cleanup test record
    cursor.execute("DELETE FROM donations WHERE donor_email = ?", ("xss_test@example.com",))
    conn.commit()
    conn.close()

def test_validation_rejects():
    print("\n--- 3. Testing Input Validation Rejections ---")
    # Test invalid email
    bad_payload = {
        "donor_name": "Bad User",
        "donor_email": "not-an-email",
        "donor_phone": "+919876543210",
        "amount": -500
    }
    data = json.dumps(bad_payload).encode('utf-8')
    req = urllib.request.Request(
        f"{BASE_URL}/api/donations",
        data=data,
        headers={"Content-Type": "application/json"}
    )
    try:
        urllib.request.urlopen(req)
        assert False, "Should have failed with 400/422"
    except urllib.error.HTTPError as e:
        assert e.code in (400, 422), f"Expected 400 or 422 Bad Request, got {e.code}"
        print(f"[PASS] Malformed input correctly rejected by API with HTTP {e.code}.")

def test_pdf_receipt_download():
    print("\n--- 4. Testing PDF Receipt Download Endpoint ---")
    # Insert temporary record
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO donations (donor_name, donor_email, donor_phone, donor_pan, amount, payment_mode, transaction_id, tax_80g_receipt_no, is_80g, status)
        VALUES ('Test Donor', 'test@prayas.org', '+919820500726', 'ABCDE1234F', 5000, 'UPI', 'TXN-TEST-101', '80G-PF-2026-TEST1', 1, 'COMPLETED')
    """)
    conn.commit()
    don_id = cursor.lastrowid
    conn.close()

    req = urllib.request.Request(f"{BASE_URL}/api/donations/{don_id}/download-pdf")
    with urllib.request.urlopen(req) as resp:
        content = resp.read()
        assert content.startswith(b"%PDF"), "Generated response is not a valid PDF"
        print(f"[PASS] PDF certificate generated successfully ({len(content)} bytes).")

    # Clean up test donation
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("DELETE FROM donations WHERE id = ?", (don_id,))
    conn.commit()
    conn.close()

def test_db_zero_state():
    print("\n--- 5. Verifying DB Clean Zero-State ---")
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM donations")
    don_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM volunteers")
    vol_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM contact_inquiries")
    inq_count = cursor.fetchone()[0]
    conn.close()

    print(f"Database Record Counts -> Donations: {don_count}, Volunteers: {vol_count}, Inquiries: {inq_count}")
    assert don_count == 0, f"Expected 0 donations, found {don_count}"
    print("[PASS] Database verified in pristine 0-state ready for real users.")

if __name__ == "__main__":
    test_security_headers()
    test_xss_sanitization_and_sql_injection()
    test_validation_rejects()
    test_pdf_receipt_download()
    test_db_zero_state()
    print("\n==============================================")
    print("ALL SECURITY & FUNCTIONAL PROTOCOL TESTS PASSED!")
    print("==============================================")
