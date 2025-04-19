"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CompanyLogos from "./components/CompanyLogos";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [expandedMobileMenu, setExpandedMobileMenu] = useState("");

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-between px-6 md:px-16 py-4 shadow-sm relative z-50 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/gj_logo_new.svg"
            alt="GrabJobs Logo"
            width={160}
            height={48}
            className="cursor-pointer"
          />
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden block text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center space-x-6 lg:space-x-8 relative">
          <a href="/Postjobs" className="text-gray-800 font-medium">Post Jobs</a>
          <a href="/Searchjobs" className="text-gray-800 font-medium">Search CVs</a>

          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("product")}
            onMouseLeave={() => setHoveredMenu("")}
          >
            <button className="text-gray-800 font-medium flex items-center">
              Product
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {hoveredMenu === "product" && (
              <div className="absolute top-full left-0 w-85 bg-white shadow-lg rounded-md mt-2 py-2 z-50">
                {[
                  "Talent Acquisition & Job Posting",
                  "Candidate Screening & Interview Chatbot",
                  "Interview Scheduling & Video Interviews",
                  "ATS & Recruitment Automation"
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-5 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="text-gray-800 font-medium">Pricing</a>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("resources")}
            onMouseLeave={() => setHoveredMenu("")}
          >
            <button className="text-gray-800 font-medium flex items-center">
              Resources
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {hoveredMenu === "resources" && (
              <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-md mt-2 py-2 z-50">
                {["Start Hiring Today", "HR Templates", "Hiring Tips"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-5 py-2 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Login Button */}
        <Link href="/login" className="hidden md:block">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-300">
            Employer Login
          </button>
        </Link>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 md:hidden">
            <a href="/" className="text-gray-800 font-medium">Post Jobs</a>
            <a href="/" className="text-gray-800 font-medium">Search CVs</a>

            {/* Product Dropdown - Mobile */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileMenu(expandedMobileMenu === "product" ? "" : "product")
                }
                className="text-gray-800 font-medium w-full text-left"
              >
                Product
              </button>
              {expandedMobileMenu === "product" && (
                <div className="pl-4 mt-2 space-y-2">
                  {[
                    "Talent Acquisition & Job Posting",
                    "Candidate Screening & Interview Chatbot",
                    "Interview Scheduling & Video Interviews",
                    "ATS & Recruitment Automation",
                  ].map((item, index) => (
                    <a key={index} href="#" className="block text-gray-700 text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-gray-800 font-medium">Pricing</a>

            {/* Resources Dropdown - Mobile */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileMenu(expandedMobileMenu === "resources" ? "" : "resources")
                }
                className="text-gray-800 font-medium w-full text-left"
              >
                Resources
              </button>
              {expandedMobileMenu === "resources" && (
                <div className="pl-4 mt-2 space-y-2">
                  {["Start Hiring Today", "HR Templates", "Hiring Tips"].map((item, index) => (
                    <a key={index} href="#" className="block text-gray-700 text-sm">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/login">
              <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md transition duration-300">
                Employer Login
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-12">
        <div className="md:w-1/2 pt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            The Best Recruitment Platform For Smart Companies
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mb-8 text-gray-800">
            Post Jobs & Hire Staff in Minutes!
          </h2>

          {/* Email Form */}
          <div className="mb-8 max-w-xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full sm:w-[60%] border border-gray-300 rounded-2xl px-5 py-3 text-base outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-2xl text-base transition duration-300 w-full sm:w-auto">
                Try GrabJobs Free
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-500 mt-6 text-sm font-medium space-y-3 sm:space-y-0 hover:text-gray-900">
              {["14 Days Free Trial", "No Credit Card Required", "Over 10M+ Candidates"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <svg className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Logos */}
          <CompanyLogos />
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 md:h-full min-h-[300px]">
            <Image
              src="/image.png"
              alt="Recruiter illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
