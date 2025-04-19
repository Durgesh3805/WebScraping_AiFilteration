import React from 'react';

export default function RecruitmentCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img src="/RecruitmentCard.png" alt="Recruitment Card" className="w-full h-auto object-cover" />
        </div>
        
        {/* Right side content */}
        <div className="w-full md:w-1/2">
          <p className="text-indigo-500 mb-3 text-sm">Recruitment Automation</p>
          <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
            User-Friendly Applicant Tracking System & Hiring Platform
          </h1>
          
          <p className="text-gray-800 text-sm mb-2 font-semibold">
            Easily manage each step of your hiring process, from new applicants to hires, with our intuitive Applicant Tracking System (ATS).
          </p>
          
          <p className="text-gray-800 text-sm mb-4 font-semibold">
            A better way to manage your entire recruitment online. No more spreadsheets! No more Emails!
          </p>
          
          <div className="space-y-3 mb-2">
            <div className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path 
                  d="M7 10l2 2 4-4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">Customize and automate your hiring stages</span>
            </div>
            
            <div className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path 
                  d="M7 10l2 2 4-4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">Communicate with candidates over live chat</span>
            </div>
            
            <div className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path 
                  d="M7 10l2 2 4-4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">Manage employment offers online with digital signatures</span>
            </div>
            
            <div className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path 
                  d="M7 10l2 2 4-4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">Easily search and filter your database of candidates</span>
            </div>
            
            <div className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path 
                  d="M7 10l2 2 4-4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">Add users to collaborate as a team</span>
            </div>
          </div>
          
          <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700">
            Learn More 
            <svg width="16" height="10" viewBox="0 0 20 20" className="ml-1">
              <path 
                d="M4 8h8M9 4l4 4-4 4" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none"
              />
            </svg>
          </a>
        </div>
      </div>
  );
}
