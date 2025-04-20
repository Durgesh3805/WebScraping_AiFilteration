'use client';

import { useState } from "react";
import Link from "next/link";

export default function NavbarClient() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [expandedMobileMenu, setExpandedMobileMenu] = useState("");

  return (
    <>
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

      {/* Desktop Login */}
      <Link href="/Login" className="hidden md:block">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition duration-300">
          Login/Sign Up
        </button>
      </Link>

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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 md:hidden">
          <a href="/" className="text-gray-800 font-medium">Post Jobs</a>
          <a href="/" className="text-gray-800 font-medium">Search CVs</a>

          {/* Product - Mobile */}
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

          {/* Resources - Mobile */}
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

          <Link href="/Login">
            <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md transition duration-300">
              Login/Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
