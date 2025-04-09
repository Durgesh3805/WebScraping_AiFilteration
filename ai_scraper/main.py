import subprocess

def run_spider():
    print("[MAIN] Running Scrapy spider...")
    subprocess.run(["scrapy", "crawl", "job_spider"], cwd="job_scraper")  

if __name__ == "__main__":
    run_spider()
