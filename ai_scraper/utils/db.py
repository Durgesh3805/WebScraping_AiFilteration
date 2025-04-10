import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    try:
        return psycopg2.connect(os.getenv("NEON_URL"))
    except Exception as e:
        print("❌ Failed to connect to DB:", e)
        return None

def init_db():
    conn = get_connection()
    if conn is None:
        return
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS jobs (
            id SERIAL PRIMARY KEY,
            title TEXT,
            company TEXT,
            location TEXT,
            description TEXT,
            url TEXT UNIQUE
        );
    """)
    conn.commit()
    cur.close()
    conn.close()

def insert_job(job_data):
    conn = get_connection()
    if conn is None:
        return
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO jobs (title, company, location, description, url)
        VALUES (%s, %s, %s, %s, %s)
        ON CONFLICT (url) DO NOTHING;
    """, (
        job_data["title"],
        job_data["company"],
        job_data["location"],
        job_data["description"],
        job_data["url"]
    ))
    conn.commit()
    cur.close()
    conn.close()
