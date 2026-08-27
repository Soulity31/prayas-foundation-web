import urllib.request
import json
import time

base = "http://localhost:8000"

print("--- 1. Testing Clean Zero-State ---")
req = urllib.request.Request(f"{base}/api/dashboard")
with urllib.request.urlopen(req) as res:
    data = json.loads(res.read().decode())
    print("Initial Dashboard:", json.dumps(data, indent=2))
    assert data["total_donations"] == 0.0
    assert data["donor_count"] == 0

print("\n--- 2. Recording a Real Verified 80G Contribution ---")
payload = {
    "donor_name": "Shreya Kulkarni",
    "donor_email": "shreya.k@gmail.com",
    "donor_phone": "+91-9820551122",
    "amount": 2500.0,
    "donor_pan": "ABCDE1234F",
    "is_80g": True,
    "payment_mode": "UPI (QR Code)",
    "cause": "MPS Malvani School & Digital Labs"
}
req = urllib.request.Request(
    f"{base}/api/donations",
    data=json.dumps(payload).encode(),
    headers={"Content-Type": "application/json"}
)
with urllib.request.urlopen(req) as res:
    rec_data = json.loads(res.read().decode())
    print("Donation Created:", json.dumps(rec_data, indent=2))
    assert rec_data["status"] == "success"
    donation_id = rec_data["data"]["id"]

print("\n--- 3. Verifying Updated Dashboard KPIs & Formatted Dates ---")
req = urllib.request.Request(f"{base}/api/dashboard")
with urllib.request.urlopen(req) as res:
    data = json.loads(res.read().decode())
    print("Updated Dashboard:", json.dumps(data, indent=2))
    assert data["total_donations"] == 2500.0
    assert data["donations_80g_total"] == 2500.0
    assert data["donations_80g_count"] == 1
    assert data["donor_count"] == 1

print("\n--- 4. Verifying Donations Listing with Dates ---")
req = urllib.request.Request(f"{base}/api/donations")
with urllib.request.urlopen(req) as res:
    don_data = json.loads(res.read().decode())
    print("Donations List:", json.dumps(don_data, indent=2))
    assert len(don_data["donations"]) == 1
    d = don_data["donations"][0]
    assert d["donor_name"] == "Shreya Kulkarni"
    assert "created_at" in d and d["created_at"] is not None
    print(f"Recorded Date: {d['created_at']}")

print("\n--- 5. Verifying That No Refund Routes Exist ---")
try:
    req = urllib.request.Request(f"{base}/api/donations/{donation_id}/refund", data=b"{}", headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as res:
        print("Refund endpoint unexpectedly responded with status:", res.status)
except urllib.error.HTTPError as e:
    print(f"Confirmed refund endpoint is removed: HTTP {e.code} (404 Not Found)")
    assert e.code in (404, 405)

print("\nALL VERIFICATIONS PASSED SUCCESSFULLY!")
