import os
import json
from psycopg2 import connect, sql
from psycopg2.extras import execute_batch
from utils.db import get_connection
from utils.create_jobs_table import create_jobs_table

# Batch size for bulk insert
BATCH_SIZE = 7000  # You can adjust based on your dataset size and memory

def insert_jobs_batch(jobs_batch):
    """Insert a batch of jobs into the database."""
    conn = get_connection()
    cur = conn.cursor()
    
    query = """
        INSERT INTO jobs (title, company, location, experience, salary, posted_on, link, skills)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """
    
    # Using execute_batch for batch insertion
    execute_batch(cur, query, jobs_batch)
    
    conn.commit()
    cur.close()
    conn.close()

def load_all_jobs_from_json():
    jobs_batch = []
    job_count = 0

    for file in os.listdir():
        if file.endswith(".json"):
            print(f"[+] Loading jobs from: {file}")
            with open(file, "r", encoding="utf-8") as f:
                try:
                    jobs = json.load(f)
                    for job in jobs:
                        jobs_batch.append((
                            job.get("title"),
                            job.get("company"),
                            job.get("location"),
                            job.get("experience"),
                            job.get("salary"),
                            job.get("posted_on"),
                            job.get("link"),
                            job.get("skills")
                        ))
                        
                        # When batch reaches the specified size, insert and reset
                        job_count += 1
                        if len(jobs_batch) >= BATCH_SIZE:
                            print(f"[DB] Inserting batch of {BATCH_SIZE} jobs...")
                            insert_jobs_batch(jobs_batch)
                            jobs_batch = []
                
                    print(f"[+] Finished loading jobs from {file}. Total jobs: {job_count}")
                except Exception as e:
                    print(f"[Error] Failed to load {file}: {e}")

    # Insert any remaining jobs in the batch
    if jobs_batch:
        print(f"[DB] Inserting remaining {len(jobs_batch)} jobs...")
        insert_jobs_batch(jobs_batch)

if __name__ == "__main__":
    create_jobs_table()  # Ensure table exists
    load_all_jobs_from_json()
