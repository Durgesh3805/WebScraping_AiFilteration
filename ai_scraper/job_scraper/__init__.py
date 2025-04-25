from job_scraper.spiders import run_all_spiders
from utils import push_all_jsons_to_db
def start_scraper():
    print("[Scraper] Starting spiders...")
    # run_all_spiders()
    print("[Scraper] Finished scraping. Inserting into DB...")
    push_all_jsons_to_db()
