import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from rag.database import init_db, get_dashboard_metrics, get_all_donations, get_db_connection

conn = get_db_connection()
cursor = conn.cursor()
cursor.execute("DELETE FROM donations")
cursor.execute("DELETE FROM volunteers")
cursor.execute("DELETE FROM contact_inquiries")
cursor.execute("DELETE FROM email_logs")
cursor.execute("DELETE FROM chatbot_logs")
conn.commit()
conn.close()

init_db()
metrics = get_dashboard_metrics()
donations = get_all_donations()

print("Clean Database Initialized Successfully:")
print(f"Total Donations: {metrics['total_donations']}")
print(f"Total Donors: {metrics['donor_count']}")
print(f"Volunteer Count: {metrics['volunteer_count']}")
print(f"Inquiries: {metrics['total_inquiries']}")
print(f"Total records in donations table: {len(donations)}")
