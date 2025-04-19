import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GrabJobsFooter = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 text-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Company Info + Social */}
          <div className="w-full md:w-1/4">
            <p className="mb-5">
              GrabJobs is the leading recruitment automation platform, helping thousands of companies save 
              time and money by hiring more efficiently.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2 mb-6">
              {/* Facebook */}
              <a href="#" className="bg-red-500 p-2 rounded-full text-white" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.87v-7H8v-3h2.5v-2.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H18l-.5 3h-2.5v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="bg-red-500 p-2 rounded-full text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM4 9h2v10H4V9zm6 0h2v1.4h.03c.28-.5 1-1 2.07-1 2.21 0 2.9 1.46 2.9 3.36V19h-2v-5.6c0-1.34-.47-2.26-1.65-2.26-.9 0-1.44.61-1.67 1.2-.08.2-.1.5-.1.8V19h-2V9z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="bg-red-500 p-2 rounded-full text-white" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.4 1 .4.4.7.9 1 1.4.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.4-.4.4-.9.7-1.4 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.4-1-.4-.4-.7-.9-1-1.4-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.4.4-.4.9-.7 1.4-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.3-2 .5-.5.2-.8.4-1.1.8-.4.3-.6.7-.8 1.1-.2.4-.4 1-.5 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .3 1.6.5 2 .2.5.4.8.8 1.1.3.4.7.6 1.1.8.4.2 1 .4 2 .5 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.3 2-.5.5-.2.8-.4 1.1-.8.4-.3.6-.7.8-1.1.2-.4.4-1 .5-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.3-1.6-.5-2-.2-.5-.4-.8-.8-1.1-.3-.4-.7-.6-1.1-.8-.4-.2-1-.4-2-.5-1.3-.1-1.7-.1-4.8-.1zM12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm5.3-1.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="bg-red-500 p-2 rounded-full text-white" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.9-1.6-.9-2-1-2.8-.2-7-.2-7-.2h-.1s-4.2 0-7 .2c-.5 0-1.3.1-2 .9-.6.7-.8 2.2-.8 2.2S2 8.9 2 10.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.8.9 1.8.9 2.2 1 1.6.2 6.8.2 6.8.2s4.2 0 7-.2c.5 0 1.3-.1 2-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4zM9.7 14.6V9.4l5.3 2.6-5.3 2.6z" />
                </svg>
              </a>
            </div>

            {/* Mobile Apps */}
            <div className="overflow-auto">
            <h3 className="font-semibold text-gray-800 mb-3">Mobile Apps</h3>
                <div className="flex gap-2 whitespace-nowrap">
            <Image src="/Get_it_on_Google_play-e1592209121991.png" alt="Google Play" width={120} height={40} />
    <Image src="/app-store-logo-e1592209139911.png" alt="App Store" width={120} height={40} />
    <Image src="/image-12.png" alt="App Gallery" width={120} height={40} />
  </div>
</div>

          </div>

          {/* Link Sections */}
          <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Employers',
                links: ['Post Jobs for Free', 'Search CVs', 'Applicant Tracking System', 'Pricing', 'Employer Login']
              },
              {
                title: 'Resources',
                links: ['Recruitment Trends', 'HR Templates', 'Hiring Tips', 'Recruitment Cost Calculator', 'Help Center']
              },
              {
                title: 'Job Seekers',
                links: ['Search Jobs', 'Job Descriptions', 'Posting Jobs', 'Interview Chatbots']
              },
              {
                title: 'About GrabJobs',
                links: ['About Us', 'Testimonials', 'Contact Us', 'Sourcing Channels', 'Ads & Marketing Solutions']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="hover:text-black">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternative Section */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {['Jobstreet', 'JobsDB', 'Indeed', 'Monster', 'Simplyhired'].map((alt, idx) => (
            <Link
              key={idx}
              href="#"
              className="border border-gray-300 rounded-full py-2 px-4 text-center hover:bg-gray-100"
            >
              Alternative to {alt}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-200 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p className="mb-2 md:mb-0">© 2024 GrabJobs Pte. Ltd. All Rights Reserved.</p>
          <div className="space-x-2">
            <Link href="#" className="hover:text-gray-800">Terms of Use</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-800">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GrabJobsFooter;
