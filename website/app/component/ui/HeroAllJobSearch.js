"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './HeroNavBar';

const HeroSection = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('all'); // Default to All Jobs as in original
  
  // State to track if expanded search is active
  const [expandedSearch, setExpandedSearch] = useState(false);
  
  // Handle search box click to expand search
  const handleSearchFocus = () => {
    setExpandedSearch(true);
  };

  // Handle close button click to return to original view
  const handleClose = () => {
    setExpandedSearch(false);
  };

  return (
    <>
      {/* Red gradient background */}
      <div className="bg-gradient-to-b from-red-500 to-red-600 pt-8 pb-32">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Dynamic tabs and search section based on state */}
          {expandedSearch ? (
            // EXPANDED SEARCH VERSION - Orange tabs with close button
            <>
              {/* Tabs Section with Close Button */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex border-b border-gray-200">
                  <button 
                    className={`mr-8 font-medium pb-4 ${activeTab === 'all' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-600 hover:text-orange-500'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All Jobs
                  </button>
                  <button 
                    className={`font-medium pb-4 ${activeTab === 'internships' 
                      ? 'text-orange-500 border-b-2 border-orange-500' 
                      : 'text-gray-600 hover:text-orange-500'}`}
                    onClick={() => setActiveTab('internships')}
                  >
                    Internships
                  </button>
                </div>
                
                {/* Cross Button */}
                <button 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={handleClose}
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Search Section - With three fields */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                {/* Job Title Search */}
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search Job Title, Company, Skills" 
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                
                {/* Course Selection */}
                <div className="md:w-64">
                  <select 
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Course</option>
                    <option value="engineering">Engineering</option>
                    <option value="mba">MBA</option>
                    <option value="bsc">BSc</option>
                  </select>
                </div>
                
                {/* Location Input */}
                <div className="md:w-64">
                  <input 
                    type="text" 
                    placeholder="Enter location" 
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                
                {/* Search Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-6 py-3 transition-colors">
                  Search Jobs
                </button>
              </div>
              
              {/* Advanced Search Link */}
              <div className="flex justify-end mt-4">
                <Link href="/advanced-search">
                  <span className="text-gray-600 hover:text-red-500 cursor-pointer">Advanced Search</span>
                </Link>
              </div>
            </>
          ) : (
            // ORIGINAL VERSION - Red tab and Fresher Box
            <>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex space-x-2 mb-6 md:mb-0">
                  <button 
                    className={`text-red-500 font-medium border-b-2 border-red-500 pb-2`}
                    onClick={() => setActiveTab('all')}
                  >
                    All Jobs
                  </button>
                  <button 
                    className={`text-gray-600 hover:text-red-500 font-medium pb-2`}
                    onClick={() => {
                      setActiveTab('internships');
                      setExpandedSearch(true); // Also expand search when clicking internships
                    }}
                  >
                    Internships
                  </button>
                </div>

                {/* Right side - Fresher box */}
                <div className="hidden md:block bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">ARE YOU A FRESHER?</h2>
                  <p className="text-gray-600 mb-4">Looking for your first Dream Job?</p>
                  <div className="flex items-center space-x-4">
                    <Link href="/login">
                      <span className="text-red-500 font-medium hover:underline cursor-pointer">REGISTER NOW</span>
                    </Link>
                    <span className="text-gray-400">OR</span>
                    <Link href="/upload-resume">
                      <span className="text-red-500 border border-red-500 rounded-md py-2 px-4 hover:bg-red-50 transition-colors cursor-pointer">Upload Resume</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Simple Search Box */}
              <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search Job Title, Company, Skills" 
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    onFocus={handleSearchFocus}
                    onClick={handleSearchFocus}
                  />
                </div>
                <button 
                  className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-8 py-3 transition-colors"
                  onClick={() => setExpandedSearch(true)}
                >
                  Search Jobs
                </button>
              </div>

              {/* Mobile Fresher Box */}
              <div className="md:hidden mt-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-bold text-gray-800 mb-1">ARE YOU A FRESHER?</h2>
                <p className="text-gray-600 mb-3">Looking for your first Dream Job?</p>
                <div className="flex items-center space-x-3">
                  <Link href="/register">
                    <span className="text-red-500 font-medium hover:underline cursor-pointer">REGISTER NOW</span>
                  </Link>
                  <span className="text-gray-400">OR</span>
                  <Link href="/upload-resume">
                    <span className="text-red-500 border border-red-500 rounded-md py-1 px-3 text-sm hover:bg-red-50 transition-colors cursor-pointer">Upload Resume</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Advertisement Banner - Always present */}
        <div className="mt-8 bg-gray-900 rounded-lg overflow-hidden">
          <Link href="https://example.com/tcs-challenge">
            <div className="relative h-24 md:h-20">
              <Image 
                src="/fresherworldweb.jpg" 
                alt="TCS Careers - The greatest battle of aspiration and skill awaits"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;