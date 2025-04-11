from job_scraper import start_scraper
# from filter import run_filtering

if __name__ == "__main__":
    start_scraper()      # Runs all spiders dynamically
    # run_filtering()      # Runs filtering after scraping


# from utils.db import init_db

# init_db()  # Ensure the 'jobs' table exists before any scraping
