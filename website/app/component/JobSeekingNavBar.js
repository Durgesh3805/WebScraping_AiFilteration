"use client";
// components/Navbar.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isWorkTypeOpen, setIsWorkTypeOpen] = useState(false);
  const [isUserTypeOpen, setIsUserTypeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('Live');

  return (
    <div className="w-full">
    {/* Main Navbar */}
    <div className="flex items-center justify-between px-4 py-3 border-b">
      {/* Left: Logo */}
      <div className="flex items-center min-w-0 overflow-hidden">
        <Link href="/" className="flex items-center">
          <div className="w-24 sm:w-32 h-10 relative">
            <img
              src="/gj_logo_new.svg" // <-- Replace with your actual logo path
              alt="Your Website Logo"
              className="h-full object-contain"
            />
          </div>
        </Link>
      </div>

 {/* Right: Search and Buttons */}
<div className="flex flex-col sm:flex-row items-center flex-wrap gap-3 w-full">
  {/* Search Box */}
  <div className="w-full sm:max-w-md sm:w-72">
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm"
        placeholder="Search Jobs"
      />
    </div>
  </div>

   {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
  <button className="bg-red-600 text-white px-6 py-2 rounded-full w-full sm:w-auto">
    Login
  </button>
  <button className="border border-gray-300 px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto">
    <span className="mr-1">+</span> Host
  </button>
  <button className="border border-gray-300 bg-yellow-50 px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto">
    <span className="mr-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
      </svg>
    </span>
    For Business
  </button>
</div>
  </div>
</div>


      {/* Navbar Filter Section */}
<div className="flex items-center px-4 py-2 border-b justify-between flex-wrap gap-2">
  <div className="flex gap-2 flex-wrap">
    {/* Jobs Dropdown */}
    <div className="relative">
      <button 
        className={`flex items-center px-4 py-2 text-white rounded-md ${isJobsOpen ? 'bg-red-600' : 'bg-red-500'}`}
        onClick={() => setIsJobsOpen(!isJobsOpen)}
      >
        Jobs
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform ${isJobsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isJobsOpen && (
        <div className="absolute z-10 mt-1 w-56 max-w-[90vw] bg-white rounded-md shadow-lg overflow-y-auto max-h-[70vh]">
          <div className="py-1">
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>Internships</div>
                  </div>
                  <div className="flex items-center px-4 py-3 bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div>Jobs</div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                    <div>Competitions</div>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div>Mentorship</div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <div>Courses</div>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>Practice</div>
                    <div className="ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 3a1 1 0 011.414 1.414l-.707.707.707.707a1 1 0 01-1.414 1.414L14.414 6l-.707.707A1 1 0 0112 6.414l.707-.707-.707-.707A1 1 0 0112 3zM6 16a1 1 0 011-1h1v-1a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>Scholarships</div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>Articles</div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>Conferences</div>
                  </div>
                  <div className="flex items-center px-4 py-3 hover:bg-red-50">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>Workshops</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
            Salary (High to Low)
          </button>

          {/* Filters Button & Dropdown */}
<div className="relative">
  <button 
    className="flex items-center px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
    </svg>
    Filters
    <span className="ml-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
  </button>
  {isFiltersOpen && (
    <div className="absolute z-10 mt-1 w-full sm:w-96 bg-white rounded-md shadow-lg">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200">
          <div className="p-4 font-medium">Filters</div>
          <div className="py-2 px-4 bg-red-50 border-l-4 border-red-500 flex justify-between items-center">
            <div>Status</div>
            <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</div>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100">Type</div>
          <div className="py-2 px-4 hover:bg-gray-100">Timing</div>
          <div className="py-2 px-4 hover:bg-gray-100">Work Days</div>
          <div className="py-2 px-4 hover:bg-gray-100">User Type</div>
          <div className="py-2 px-4 hover:bg-gray-100">Category</div>
          <div className="py-2 px-4 hover:bg-gray-100">Location</div>
        </div>
        <div className="w-full sm:w-2/3 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="font-medium">Status</div>
            <button className="text-orange-500 text-sm">Clear</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="status-live" 
                name="status" 
                className="h-4 w-4 text-red-600"
                checked={statusFilter === 'Live'}
                onChange={() => setStatusFilter('Live')}
              />
              <label htmlFor="status-live" className="ml-2 text-sm">Live</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="status-closed" 
                name="status" 
                className="h-4 w-4 text-red-600"
                checked={statusFilter === 'Registrations Closed'}
                onChange={() => setStatusFilter('Registrations Closed')}
              />
              <label htmlFor="status-closed" className="ml-2 text-sm">Registrations Closed</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="status-expired" 
                name="status" 
                className="h-4 w-4 text-red-600"
                checked={statusFilter === 'Expired'}
                onChange={() => setStatusFilter('Expired')}
              />
              <label htmlFor="status-expired" className="ml-2 text-sm">Expired</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="status-recent" 
                name="status" 
                className="h-4 w-4 text-red-600"
                checked={statusFilter === 'Recent'}
                onChange={() => setStatusFilter('Recent')}
              />
              <label htmlFor="status-recent" className="ml-2 text-sm">Recent</label>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button className="text-orange-500 text-sm">Clear Filter</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
              Apply Filter
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

{/* Location Dropdown */}
<div className="relative">
  <button 
    className="flex items-center px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
    onClick={() => setIsLocationOpen(!isLocationOpen)}
  >
    Location
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform ${isLocationOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  {isLocationOpen && (
    <div className="absolute z-10 mt-1 w-full sm:w-64 bg-white rounded-md shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium">Location</div>
          <button className="text-orange-500 text-sm">Clear</button>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>Use Radius Search</div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          <div className="text-sm text-gray-500">Find nearby Jobs</div>
        </div>
        <div className="mb-4 relative">
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md pl-10" 
            placeholder="Search location"  
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          <div className="flex items-center">
            <input type="checkbox" id="loc-bangalore" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-bangalore" className="ml-2">Bangalore</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="loc-mumbai" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-mumbai" className="ml-2">Mumbai</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="loc-delhi" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-delhi" className="ml-2">Delhi NCR</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="loc-hyderabad" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-hyderabad" className="ml-2">Hyderabad</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="loc-pune" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-pune" className="ml-2">Pune</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="loc-chennai" className="h-4 w-4 text-red-600" />
            <label htmlFor="loc-chennai" className="ml-2">Chennai</label>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 text-sm">Clear</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
            Apply
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}
</div>


         {/* Work Type Dropdown */}
<div className="relative">
  <button 
    className="flex items-center px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
    onClick={() => setIsWorkTypeOpen(!isWorkTypeOpen)}
  >
    Work Type
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform ${isWorkTypeOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  {isWorkTypeOpen && (
    <div className="absolute z-10 mt-1 w-full sm:w-64 bg-white rounded-md shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium">Work Type</div>
          <button className="text-orange-500 text-sm">Clear</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="type-remote" className="h-4 w-4 text-red-600" />
            <label htmlFor="type-remote" className="ml-2">Remote</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="type-onsite" className="h-4 w-4 text-red-600" />
            <label htmlFor="type-onsite" className="ml-2">On-site</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="type-hybrid" className="h-4 w-4 text-red-600" />
            <label htmlFor="type-hybrid" className="ml-2">Hybrid</label>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 text-sm">Clear</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
            Apply
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}
</div>

         {/* User Type Dropdown */}
<div className="relative">
  <button 
    className="flex items-center px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
    onClick={() => setIsUserTypeOpen(!isUserTypeOpen)}
  >
    User Type
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform ${isUserTypeOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  {isUserTypeOpen && (
    <div className="absolute z-10 mt-1 w-full sm:w-64 bg-white rounded-md shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium">User Type</div>
          <button className="text-orange-500 text-sm">Clear</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="user-student" className="h-4 w-4 text-red-600" />
            <label htmlFor="user-student" className="ml-2">Student</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="user-professional" className="h-4 w-4 text-red-600" />
            <label htmlFor="user-professional" className="ml-2">Professional</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="user-fresher" className="h-4 w-4 text-red-600" />
            <label htmlFor="user-fresher" className="ml-2">Fresher</label>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 text-sm">Clear</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
            Apply
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}
</div>

         {/* Category Dropdown */}
<div className="relative">
  <button 
    className="flex items-center px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
  >
    Category
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transform ${isCategoryOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  {isCategoryOpen && (
    <div className="absolute z-10 mt-1 w-full sm:w-64 bg-white rounded-md shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium">Category</div>
          <button className="text-orange-500 text-sm">Clear</button>
        </div>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          <div className="flex items-center">
            <input type="checkbox" id="cat-software" className="h-4 w-4 text-red-600" />
            <label htmlFor="cat-software" className="ml-2">Software Development</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="cat-design" className="h-4 w-4 text-red-600" />
            <label htmlFor="cat-design" className="ml-2">UI/UX Design</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="cat-data" className="h-4 w-4 text-red-600" />
            <label htmlFor="cat-data" className="ml-2">Data Science</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="cat-marketing" className="h-4 w-4 text-red-600" />
            <label htmlFor="cat-marketing" className="ml-2">Marketing</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="cat-hr" className="h-4 w-4 text-red-600" />
            <label htmlFor="cat-hr" className="ml-2">Human Resources</label>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-orange-500 text-sm">Clear</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center text-sm">
            Apply
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}
</div>

        </div>

        {/* Right Side Elements */}
<div className="flex items-center flex-wrap justify-end">
  <div className="mx-2 mb-2 sm:mb-0">
    <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center w-full sm:w-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
      </svg>
      Sort
    </button>
  </div>
  <div className="mx-2 mb-2 sm:mb-0">
    <button className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    </button>
  </div>
  <div className="mx-2 mb-2 sm:mb-0">
    <button className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>
      </div>
    </div>
  );
}