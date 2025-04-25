from utils.db import get_connection

def create_jobs_table():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS jobs (
            id SERIAL PRIMARY KEY,
            title TEXT,
            company TEXT,
            location TEXT,
            experience TEXT,
            salary TEXT,
            posted_on TEXT,
            link TEXT,
            skills TEXT
        )
    """)
    conn.commit()
    cur.close()
    conn.close()
    print("[+] jobs table created (if not existed already).")

if __name__ == "__main__":
    create_jobs_table()
