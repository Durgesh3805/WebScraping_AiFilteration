from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings

# from job_scraper.spiders.internshala import InternshalaSpider
from job_scraper.spiders.Freshersworld import FreshersworldSpider
# from job_scraper.spiders.quotes_spider import QuotesSpider
# from job_scraper.spiders.another_spider import AnotherSpider  # Add more as needed


def run_all_spiders():
    process = CrawlerProcess(settings=get_project_settings())
    # process.crawl(InternshalaSpider)
    process.crawl(FreshersworldSpider)
    # process.crawl(QuotesSpider)/
    # process.crawl(AnotherSpider)
    # Add more crawlers here dynamically or use config for automation

    process.start()
