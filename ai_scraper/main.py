from job_scraper import start_scraper
from filter import run_filtering

if __name__ == "__main__":
    start_scraper()      # Runs all spiders dynamically
    run_filtering()      # Runs filtering after scraping
