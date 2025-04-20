import React from 'react';

export default function TalentCard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Left side content */}
      <div className="w-full md:w-1/2">
        <p className="text-indigo-500 mb-3 text-sm">TALENT ATTRACTION</p>
        
        <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
          Post Jobs On Multiple Platforms In 1 Click
        </h1>
        
        <p className="text-gray-800 text-sm mb-2 font-semibold">
          Reach millions of job seekers and attract the best talent.
        </p>
        
        <p className="text-gray-800 text-sm mb-2 font-semibold">
          Automatically publish jobs on <a href="#" className="text-blue-500 hover:underline">leading job boards & social networks</a>.
        </p>
        
        <p className="text-gray-800 text-sm mb-3 font-semibold">
          Centralize applicants from all sources onto a single dashboard!
        </p>
        
        <div className="space-y-3 mb-4">
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
            <span className="text-gray-700 text-sm">Free job posting to 20+ Job Boards</span>
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
            <span className="text-gray-700 text-sm">Post jobs on LinkedIn for Free</span>
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
            <span className="text-gray-700 text-sm">Post on your Career Page</span>
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
            <span className="text-gray-700 text-sm">Share on Facebook & LinkedIn pages</span>
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
            <span className="text-gray-700 text-sm">QR codes for bridging offline to online</span>
          </div>
        </div>
        
        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700">
          Learn More 
          <svg width="16" height="16" viewBox="0 0 20 20" className="ml-1">
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
      
      {/* Right side image */}
      <div className="w-full md:w-1/2">
        <img src="/TalentCard.png" alt="Feature Card" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
