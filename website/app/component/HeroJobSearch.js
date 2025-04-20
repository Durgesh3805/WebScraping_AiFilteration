"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';

// Job category component with icon and title
const JobCategoryCard = ({ icon, title, link }) => {
  return (
    <Link href={link || "#"}>
      <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center transition-all hover:shadow-md cursor-pointer">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${icon.bgColor}`}>
          {icon.svg}
        </div>
        <p className="text-gray-800 font-medium text-center">{title}</p>
      </div>
    </Link>
  );
};

const JobsForYouSection = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const jobCategories = [
    {
      title: "IT Software",
      icon: {
        bgColor: "bg-red-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <polyline points="10 7 8 9 10 11"></polyline>
            <polyline points="14 7 16 9 14 11"></polyline>
          </svg>
        )
      },
      link: "/jobs/it-software"
    },
    {
      title: "Contingent Jobs",
      icon: {
        bgColor: "bg-orange-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        )
      },
      link: "/jobs/contingent"
    },
    {
      title: "Work From Home",
      icon: {
        bgColor: "bg-blue-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#54A0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      },
      link: "/jobs/work-from-home"
    },
    {
      title: "Govt Jobs",
      icon: {
        bgColor: "bg-red-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            <line x1="12" y1="15" x2="12" y2="17"></line>
          </svg>
        )
      },
      link: "/jobs/government"
    },
    {
      title: "Internships",
      icon: {
        bgColor: "bg-purple-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9C66FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <circle cx="12" cy="10" r="2"></circle>
            <path d="M12 14v4"></path>
          </svg>
        )
      },
      link: "/jobs/internships"
    },
    {
      title: "Part-time Jobs",
      icon: {
        bgColor: "bg-orange-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF9F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        )
      },
      link: "/jobs/part-time"
    },
    {
      title: "Walk-in Jobs",
      icon: {
        bgColor: "bg-teal-50",
        svg: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2ED1C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        )
      },
      link: "/jobs/walk-in"
    }
  ];

  // Scroll the carousel to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 300));
    }
  };

  // Scroll the carousel to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollPosition + 300);
    }
  };

  return (
    <div className="py-12 bg-red-50 bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Navigation Arrows */}
        <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center w-full">Jobs For You</h2>

          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft} 
              className="bg-white p-2 rounded-full shadow hover:shadow-md border border-gray-200 transition-all"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight} 
              className="bg-white p-2 rounded-full shadow hover:shadow-md border border-gray-200 transition-all"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {jobCategories.map((category, index) => (
            <div key={index} className="flex-shrink-0 w-48">
              <JobCategoryCard 
                icon={category.icon} 
                title={category.title}
                link={category.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsForYouSection;