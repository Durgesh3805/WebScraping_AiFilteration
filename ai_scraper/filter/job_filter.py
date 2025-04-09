import json
import hashlib

def is_spam(job):
    # Basic rule-based spam filter (replace with ML model later)
    bad_keywords = ["investment", "crypto", "quick money", "MLM", "forex"]
    text = f"{job['title']} {job['description']}".lower()
    return any(word in text for word in bad_keywords)

def clean_text(text):
    return " ".join(text.strip().split())

def hash_job(job):
    # Create a hash to detect duplicate job posts
    return hashlib.md5(f"{job['title']}|{job['company']}|{job['description']}".encode()).hexdigest()

def filter_jobs(input_path="raw_jobs.json", output_path="filtered_jobs.json"):
    with open(input_path, "r", encoding="utf-8") as f:
        jobs = json.load(f)

    seen_hashes = set()
    clean_jobs = []

    for job in jobs:
        # Skip spam
        if is_spam(job):
            continue
        
        # Skip duplicates
        job_hash = hash_job(job)
        if job_hash in seen_hashes:
            continue
        seen_hashes.add(job_hash)

        # Clean description text
        job["description"] = clean_text(job.get("description", ""))
        clean_jobs.append(job)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(clean_jobs, f, indent=2, ensure_ascii=False)

    print(f"[FILTER] Saved {len(clean_jobs)} filtered jobs out of {len(jobs)}")

if __name__ == "__main__":
    filter_jobs()
