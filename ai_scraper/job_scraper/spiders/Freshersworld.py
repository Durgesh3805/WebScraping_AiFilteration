import scrapy
import json
import os
import re

class FreshersworldSpider(scrapy.Spider):
    name = "freshersworld"
    allowed_domains = ["freshersworld.com"]
    start_urls = [
        f"https://www.freshersworld.com/jobs/jobsearch/{kw.strip().lower().replace(' ', '-')}"
        for kw in [
            "web dev", "python developer", "java developer", "data analyst",
            "mechanical engineer", "civil engineer", "ui ux designer", "digital marketing",
            "network engineer", "sales executive"
        ]
    ]

    def __init__(self):
        self.data = []

    def parse(self, response):
        jobs = response.css("div.job-container")

        for job in jobs:
            qualifications = job.css("span.qualifications span::text").getall()
            cleaned_qualifications = [q.strip() for q in qualifications if q.strip()]
            formatted_qualification = self.format_qualifications(cleaned_qualifications)

            view_apply_class = job.css("span.view-apply-button::attr(class)").get()
            match = re.search(r'view-apply-button-(\d+)', view_apply_class or "")
            job_id = match.group(1) if match else None
            apply_link = f"https://www.freshersworld.com/view-job?jid={job_id}" if job_id else None

            item = {
                'title': job.css("span.wrap-title.seo_title::text").get(default='').strip(),
                'company': job.css("h3.company-name::text").get(default='').strip(),
                'location': job.css("span.job-location a::text").get(default='').strip(),
                'experience': job.css("span.experience::text").get(default='').strip(),
                'salary': re.sub(r"\s+", " ", job.css("span.qualifications::text").get(default="")).strip(),
                'qualification': formatted_qualification,
                'posted_time': job.css("div.text-ago span.ago-text::text").get(default="").strip(),
                'job_link': apply_link,
                'about_company': "Not available",  # Placeholder; FreshersWorld doesn't have this.
                'full_description': "Not available",  # Optional: could scrape from apply_link if needed.
                'skills_required': [],  # Not directly listed
                'job_type': "Full Time"  # Assumed; FreshersWorld doesn't state job type clearly.
            }

            self.data.append(item)
            yield item

    def format_qualifications(self, tokens):
        result = []
        i = 0
        while i < len(tokens):
            current = tokens[i].strip()
            if i + 1 < len(tokens) and tokens[i + 1].strip().startswith("("):
                base = current
                i += 1
                details = []
                while i < len(tokens):
                    part = tokens[i].strip()
                    cleaned = part.replace("(", "").replace(")", "")
                    if cleaned:
                        details.append(cleaned)
                    if ")" in part:
                        break
                    i += 1
                combined = f"{base}({', '.join(details)})"
                result.append(combined)
            elif current not in ["(", ")", ""]:
                result.append(current)
            i += 1
        return " / ".join(result)

    def closed(self, reason):
        file_path = "freshersworld_jobs_output.json"
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(self.data, f, indent=4, ensure_ascii=False)
        self.logger.info(f"✅ Saved {len(self.data)} jobs to {file_path}")