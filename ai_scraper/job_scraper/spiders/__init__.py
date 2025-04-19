from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

# from job_scraper.spiders.another_spider import AnotherSpider  # Add more as needed

def run_all_spiders():
    process = CrawlerProcess(settings=get_project_settings())


    # process.crawl(AnotherSpider)
    # Add more crawlers here dynamically or use config for automation

    process.start()
