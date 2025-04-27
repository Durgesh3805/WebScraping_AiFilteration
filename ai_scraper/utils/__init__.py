import os
import json
from utils.db import get_connection
from utils.create_jobs_table import create_jobs_table

def insert_job(job):
    conn = get_connection()
    cur = conn.cursor()
    query = """
        INSERT INTO jobs (title, company, location, experience, salary, posted_on, link, skills)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    cur.execute(query, (
        job.get("title"),
        job.get("company"),
        job.get("location"),
        job.get("experience"),
        job.get("salary"),
        job.get("posted_on"),
        job.get("link"),
        job.get("skills")
    ))
    conn.commit()
    cur.close()
    conn.close()

def push_all_jsons_to_db():
    print("Pushing all JSON job data to DB...")
    create_jobs_table()  # ✅ Ensure table exists before pushing

    for filename in os.listdir():
        if filename.endswith(".json"):
            print(f"[DB] Processing {filename}...")
            with open(filename, "r", encoding="utf-8") as f:
                try:
                    jobs = json.load(f)
                    for job in jobs:
                        insert_job(job)
                        print(f"Inserted: {job['title']}")
                except Exception as e:
                    print(f"[ERROR] Failed loading {filename}: {e}")
