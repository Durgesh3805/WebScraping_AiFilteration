import scrapy
from scrapy.http import HtmlResponse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

import json

class JobspressoSpider(scrapy.Spider):
    name = 'jobspresso'
    start_urls = ['https://jobspresso.co/remote-work/']
    

    # Set up the Selenium WebDriver
    def __init__(self, *args, **kwargs):
        super(JobspressoSpider, self).__init__(*args, **kwargs)
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run headless mode (no browser window)
        chrome_options.add_argument('--disable-gpu')
        self.driver = webdriver.Chrome(options=chrome_options)
        self.jobs_data = []  # Initialize an empty list to store job data

    def start_requests(self):
        # Send a request to the start URL
        yield scrapy.Request(url=self.start_urls[0], callback=self.parse)

    def parse(self, response):
        # Get the page using Selenium
        self.driver.get(response.url)

        # Wait for job listings to appear
        try:
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.job_listings li.job_listing"))
            )
        except TimeoutException:
            self.logger.error("Timeout waiting for job listings.")
            return
        
        # Get the page source after it has fully loaded
        selenium_response = HtmlResponse(url=self.driver.current_url, body=self.driver.page_source, encoding='utf-8')

        # Extract job details
        jobs = selenium_response.css("div.job_listings li.job_listing")
        self.logger.info(f"Found {len(jobs)} jobs on the page.")
        
        for job in jobs:
            # Extract each job's details
            title = job.css("h3.job_listing-title::text").get(default="").strip()
            job_link = job.css("a.job_listing-clickbox::attr(href)").get()
            location = job.css("div.job_listing-location a::text").get(default="").strip()
            date_posted = job.css("ul.job_listing-meta li.job_listing-date::text").get(default="").strip()

            # Log extracted job info
            self.logger.info(f"Job Title: {title}")
            
            # Store the job data
            self.jobs_data.append({
                'title': title,
                'location': location,
                'posted_on': date_posted,
                'link': job_link,

            })

    def closed(self, reason):
        # Save the job data to a JSON file when the spider is closed
        if self.jobs_data:
            with open('jobspresso_jobs_output.json', 'w', encoding='utf-8') as f:
                json.dump(self.jobs_data, f, indent=4, ensure_ascii=False)
            self.logger.info(f"✅ Saved {len(self.jobs_data)} jobs to jobspresso_jobs_output.json")
        else:
            self.logger.warning("No job data found to save.")

    def __del__(self):
        # Make sure to close the Selenium driver when done
        self.driver.quit()
