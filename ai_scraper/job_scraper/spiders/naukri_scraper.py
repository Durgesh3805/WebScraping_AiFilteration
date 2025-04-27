import scrapy
from scrapy_selenium import SeleniumRequest
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
import random
import time

class NaukriSpider(scrapy.Spider):
    name = 'naukri_fresher'
    allowed_domains = ['naukri.com']
    start_urls = ['https://www.naukri.com/fresher-jobs?src=gnbjobs_homepage_srch']

    # Directly set custom settings (middlewares, user-agent, proxy, etc.)
    custom_settings = {
        'DOWNLOADER_MIDDLEWARES': {
            'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
            'naukri_scraper.middlewares.RandomUserAgentMiddleware': 400,
            'naukri_scraper.middlewares.ProxyMiddleware': 410,
            'scrapy_selenium.SeleniumMiddleware': 800,
        },
        'SELENIUM_DRIVER_NAME': 'chrome',
        'SELENIUM_DRIVER_EXECUTABLE_PATH': '/path/to/chromedriver',  # Update this path
        'SELENIUM_DRIVER_ARGUMENTS': ['--headless'],  # Run Chrome in headless mode
        'USER_AGENTS': [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            # Add more User-Agents for rotation
        ],
        'PROXIES': [
            'http://proxy1.example.com',
            'http://proxy2.example.com',
            # Add more proxies for rotation
        ],
    }

    def start_requests(self):
        # Start the request with SeleniumRequest instead of regular Request
        yield SeleniumRequest(url=self.start_urls[0], callback=self.parse)

    def parse(self, response):
        driver = response.request.meta['driver']
        time.sleep(5)  # Wait for the page to load

        # Scrape job data
        job_blocks = response.xpath('//div[@class="list"]/article[@class="jobTuple"]')

        for job in job_blocks:
            job_data = {}
            job_data["title"] = job.xpath('.//a[@class="title"]//text()').get().strip()
            job_data["company"] = job.xpath('.//a[@class="subTitle"]//text()').get().strip()
            job_data["location"] = job.xpath('.//li[@class="location"]//span//text()').get().strip()
            job_data["experience"] = job.xpath('.//li[@class="experience"]//span//text()').get().strip()
            job_data["link"] = job.xpath('.//a[@class="title"]/@href').get()

            yield job_data

    def setup_driver(self, headless=False):
        # Set up the Selenium driver with Chrome options
        options = Options()
        if headless:
            options.add_argument('--headless')
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--window-size=1920,1080')

        return webdriver.Chrome(options=options)

# Middlewares for random user-agent and proxies
class RandomUserAgentMiddleware:
    def process_request(self, request, spider):
        user_agent = random.choice(spider.settings.get('USER_AGENTS'))
        request.headers['User-Agent'] = user_agent

class ProxyMiddleware:
    def process_request(self, request, spider):
        proxy = random.choice(spider.settings.get('PROXIES'))
        request.meta['proxy'] = proxy
