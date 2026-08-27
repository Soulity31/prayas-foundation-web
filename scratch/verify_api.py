import urllib.request
import json

base = "http://localhost:8000"

endpoints = [
    "/api/dashboard",
    "/api/dashboard/metrics",
    "/api/donations",
    "/api/volunteers",
    "/api/contact",
    "/api/admin/smtp-status",
    "/api/admin/email-logs"
]

all_passed = True
for ep in endpoints:
    url = base + ep
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode())
            print(f"[OK] {ep}: HTTP {res.status} - Result: {data}")
    except Exception as e:
        print(f"[FAIL] {ep}: {e}")
        all_passed = False

if all_passed:
    print("\nALL BACKEND ENDPOINTS PASSED WITH 0 SEED DATA!")
