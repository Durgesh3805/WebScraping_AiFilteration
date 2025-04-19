import scrapy 
import json
import os
import re

class InternshalaSpider(scrapy.Spider):
    name = "internshala"
    allowed_domains = ['internshala.com']
    start_urls = ['https://internshala.com/jobs/']

    def parse(self, response):
        cards = response.css('div.individual_internship')
        for card in cards:
            job_link = response.urljoin(card.css('h3.job-internship-name a::attr(href)').get())

            experience = card.xpath(
                './/div[contains(@class, "row-1-item")][.//i[contains(@class, "ic-16-briefcase")]]/span/text()'
            ).get(default='').strip()

            if re.search(r'\d+\s*year\(s\)$', experience):
                experience = re.sub(r'\s*year\(s\)$', ' years', experience)

            meta_data = {
                'title': card.css('h3.job-internship-name a::text').get(default='').strip(),
                'company': card.css('p.company-name::text').get(default='').strip(),
                'location': card.css('p.locations a::text').get(default='').strip(),
                'experience': experience or "Not specified",
                'salary': card.css('div.row-1-item span.desktop::text').get(default='').strip(),
                'posted_on': card.css('div.color-labels div span::text').get(default='').strip(),
                'link': job_link
            }

            yield scrapy.Request(job_link, callback=self.parse_details, meta={'meta_data': meta_data})

    def parse_details(self, response):
        job = response.meta['meta_data']

        # Extract skills from the detail page
        skills = response.xpath(
            '//h3[contains(@class, "skills_heading")]/following-sibling::div[contains(@class, "round_tabs_container")][1]'
        ).css('span.round_tabs::text').getall()

        # If no skills found, set to "Not specified"
        job['skills'] = ', '.join([s.strip() for s in skills if s.strip()]) or "Not specified"

        self.save_to_json(job)
        yield job

    def save_to_json(self, job_data):
        file_path = "internshala_jobs.json"

        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        else:
            existing_data = []

        existing_data.append(job_data)

        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(existing_data, f, indent=2, ensure_ascii=False)