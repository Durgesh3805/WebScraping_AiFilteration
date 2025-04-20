

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Copyright Section */}
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <Image 
                src="/gj_logo_new.svg" 
                alt="GrabJobs Logo" 
                width={200} 
                height={50} 
                className="mb-6"
              />
            </Link>
            <div className="mt-8">
              <div className="flex mb-2">
                <Link href="/terms" className="text-blue-500 hover:text-blue-700 text-sm">
                  Term of Use
                </Link>
                <span className="mx-2 text-gray-400">|</span>
                <Link href="/privacy" className="text-blue-500 hover:text-blue-700 text-sm">
                  Privacy Policy
                </Link>
              </div>
              <p className="text-gray-600 text-sm">
                Copyright © 2022 GrabJobs Pte. Ltd.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
            {/* Employers Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Employers</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-800">
                    About GrabJobs
                  </Link>
                </li>
                <li>
                  <Link href="/trial" className="text-gray-600 hover:text-gray-800">
                    14 days Trial
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/sourcing" className="text-gray-600 hover:text-gray-800">
                    Sourcing Channels
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-gray-800">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/job-posting" className="text-red-500 hover:text-red-700">
                    Job Posting
                  </Link>
                </li>
                <li>
                  <Link href="/applicant-screening" className="text-gray-600 hover:text-gray-800">
                    Applicant Screening
                  </Link>
                </li>
                <li>
                  <Link href="/interview-scheduling" className="text-gray-600 hover:text-gray-800">
                    Interview Scheduling
                  </Link>
                </li>
                <li>
                  <Link href="/recruitment-automation" className="text-gray-600 hover:text-gray-800">
                    Recruitment Automation
                  </Link>
                </li>
                <li>
                  <Link href="/candidate-experience" className="text-gray-600 hover:text-gray-800">
                    Candidate Experience
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="text-gray-600 hover:text-gray-800">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compare Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Compare GrabJobs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/compare/indeed" className="text-gray-600 hover:text-gray-800">
                    Best Alternative to Indeed
                  </Link>
                </li>
                <li>
                  <Link href="/compare/jobstreet" className="text-gray-600 hover:text-gray-800">
                    Best Alternative to Jobstreet
                  </Link>
                </li>
                <li>
                  <Link href="/compare/monster" className="text-gray-600 hover:text-gray-800">
                    Best Alternative to Monster
                  </Link>
                </li>
                <li>
                  <Link href="/compare/jobsdb" className="text-gray-600 hover:text-gray-800">
                    Best Alternative to JobsDB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* App Downloads */}
          <div className="mt-8 md:mt-0">
            <div className="flex flex-col space-y-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.grabjobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Get_it_on_Google_play-e1592209121991.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="object-contain"
                />
              </Link>
              <Link
                href="https://apps.apple.com/app/grabjobs/id1251540053"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/app-store-logo-e1592209139911.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="object-contain"
                />
              </Link>
              <Link
                href="https://appgallery.huawei.com/app/C101955487"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image-12.png"
                  alt="Explore it on AppGallery"
                  width={140}
                  height={42}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}