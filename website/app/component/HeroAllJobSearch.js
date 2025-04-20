"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './HeroNavBar';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedSearch, setExpandedSearch] = useState(true); // Always expanded

  

  return (
    <>
      {/* Red gradient background */}
      <div className="bg-gradient-to-b from-red-400 to-red-500 pt-8 pb-32">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* EXPANDED SEARCH VERSION - Orange tabs with close button */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`mr-8 font-medium pb-4 ${activeTab === 'all'
                  ? 'text-orange-400 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-orange-500'}`}
                onClick={() => setActiveTab('all')}
              >
                All Jobs
              </button>
              <button
                className={`font-medium pb-4 ${activeTab === 'internships'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : 'text-gray-500 hover:text-orange-500'}`}
                onClick={() => setActiveTab('internships')}
              >
                Internships
              </button>
            </div>

           
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
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                autoFocus
              />
            </div>

            {/* Course Selection */}
            <div className="md:w-64">
              <select
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
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
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
              />
            </div>

            {/* Search Button */}
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg px-6 py-3 transition-colors">
              Search Jobs
            </button>
          </div>

          {/* Advanced Search Link */}
          <div className="flex justify-end mt-4">
            <Link href="/advanced-search">
              <span className="text-gray-600 hover:text-red-400 cursor-pointer">Advanced Search</span>
            </Link>
          </div>
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
