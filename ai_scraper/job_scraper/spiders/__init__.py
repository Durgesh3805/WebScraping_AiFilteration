# This package will contain the spiders of your Scrapy project
#
# Please refer to the documentation for information on how to create and manage
# your spiders.

import scrapy

class JobSpider(scrapy.Spider):
    name = "job_spider"

    def start_requests(self):
        yield scrapy.Request(url="https://example.com", callback=self.parse)

    def parse(self, response):
        print("Scraped:", response.url)
