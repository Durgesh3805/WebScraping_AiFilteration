// components/Navbar.jsx
"use client";
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import JobsDropdown from './components/JobsDropdown';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobsDropdownOpen, setJobsDropdownOpen] = useState(false);
  const [placementDropdownOpen, setPlacementDropdownOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* Alert Banner */}
      <div className="bg-blue-50 py-2 text-center text-sm">
        <p>
          Freshersworld does not charge any amount for job placement. Beware of fraudsters who ask you to pay on the pretext of giving a job.
          <span className="text-blue-500 ml-1 cursor-pointer">Know More</span>
        </p>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image 
                src="/gj_logo_new.svg" 
                alt="Freshersworld Logo" 
                width={180} 
                height={40} 
                className="mr-2"
              />
            </div>
          </Link>
          <span className="text-xs text-gray-500">A TeamLease Company</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setJobsDropdownOpen(true)}
            onMouseLeave={() => setJobsDropdownOpen(false)}
          >
            <div className={`flex items-center text-gray-700 px-3 py-2 ${jobsDropdownOpen ? 'border-b-2 border-red-500 text-red-500' : ''}`}>
              Jobs
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${jobsDropdownOpen ? 'rotate-180 text-red-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <JobsDropdown isOpen={jobsDropdownOpen} setIsOpen={setJobsDropdownOpen} />
          </div>

          <div className="relative group cursor-pointer">
            <span className="flex items-center text-gray-700">
              Placement Paper
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          <span className="text-gray-700 cursor-pointer">Premium Membership</span>

          <div className="text-gray-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>

        {/* Right Side Options */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-gray-700 cursor-pointer">Employer Zone</span>
          <div className="hidden md:flex border-l border-gray-300 h-6"></div>
          <span className="hidden md:inline text-gray-700 cursor-pointer">Sales Enquiry</span>
          
          {/* Login Button */}
          <Link href="/Login">
            <button className="hidden md:flex items-center bg-white border border-red-500 text-red-500 rounded-md px-4 py-2 hover:bg-red-50 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Jobseeker Login
            </button>
          </Link>

          {/* Post Job Button */}
          <Link href="/post-job">
            <button className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition duration-300">
              Post A Job
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-3 px-4 py-3">
            <div className="flex items-center justify-between" onClick={() => setJobsDropdownOpen(!jobsDropdownOpen)}>
              <span className="text-gray-700">Jobs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${jobsDropdownOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {jobsDropdownOpen && (
              <div className="pl-4">
                <h4 className="font-medium text-gray-700 mb-1">Job By Category</h4>
                <ul className="pl-2 space-y-1 mb-2">
                  <li><Link href="/jobs/it-software" className="text-gray-600 hover:text-red-500">IT / Software</Link></li>
                  <li><Link href="/jobs/core-technical" className="text-gray-600 hover:text-red-500">Core Technical</Link></li>
                  <li><Link href="/jobs/more" className="text-gray-600 hover:text-red-500">More...</Link></li>
                </ul>
                
                <h4 className="font-medium text-gray-700 mb-1">Job By Courses</h4>
                <ul className="pl-2 space-y-1 mb-2">
                  <li><Link href="/jobs/be-btech" className="text-gray-600 hover:text-red-500">BE / B.Tech</Link></li>
                  <li><Link href="/jobs/mca" className="text-gray-600 hover:text-red-500">MCA</Link></li>
                  <li><Link href="/jobs/more" className="text-gray-600 hover:text-red-500">More...</Link></li>
                </ul>
                
                <h4 className="font-medium text-gray-700 mb-1">Job By City</h4>
                <ul className="pl-2 space-y-1 mb-2">
                  <li><Link href="/jobs/bangalore" className="text-gray-600 hover:text-red-500">Bangalore</Link></li>
                  <li><Link href="/jobs/mumbai" className="text-gray-600 hover:text-red-500">Mumbai</Link></li>
                  <li><Link href="/jobs/more" className="text-gray-600 hover:text-red-500">More...</Link></li>
                </ul>
                
                <h4 className="font-medium text-gray-700 mb-1">Job By Company</h4>
                <ul className="pl-2 space-y-1">
                  <li><Link href="/jobs/tcs" className="text-gray-600 hover:text-red-500">TCS Jobs</Link></li>
                  <li><Link href="/jobs/infosys" className="text-gray-600 hover:text-red-500">Infosys Jobs</Link></li>
                  <li><Link href="/jobs/more" className="text-gray-600 hover:text-red-500">More...</Link></li>
                </ul>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Placement Paper</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-gray-700">Premium Membership</span>
            <span className="text-gray-700">Employer Zone</span>
            <span className="text-gray-700">Sales Enquiry</span>
            <Link href="/Login">
              <div className="flex items-center text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Jobseeker Login
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;