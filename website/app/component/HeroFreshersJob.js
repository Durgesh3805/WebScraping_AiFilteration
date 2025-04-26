"use client";
// JobListings.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Briefcase } from 'lucide-react';

const JobListings = () => {
  // State to track which set of jobs to display
  const [currentPage, setCurrentPage] = useState(0);
  
  // All job listings data
  const jobSets = [
    // First set of jobs
    [
      {
        title: "Accountant Admin",
        company: "Steerzman Quality Solutions ...",
        location: "Mumbai",
        experience: "1 to 2 Years",
        timePosted: "9 days ago",
        bgColor: ""
      },
      {
        title: "Digital Marketing",
        company: "Meserii",
        location: "Delhi",
        experience: "0 Years",
        timePosted: "15 hours ago",
        bgColor: ""
      },
      {
        title: "Telecalling",
        company: "Digi Grow Hub Education",
        location: "Pune",
        experience: "0 Years",
        timePosted: "15 hours ago",
        bgColor: "bg-blue-50"
      }
    ],
    // Second set of jobs
    [
      {
        title: "Content Writing",
        company: "KathaVersse Media Network ...",
        location: "Mumbai",
        experience: "0 Years",
        timePosted: "15 hours ago",
        bgColor: ""
      },
      {
        title: "Human Resources HR",
        company: "Flyvheel Digital Solutions Pri...",
        location: "Delhi",
        experience: "0 Years",
        timePosted: "15 hours ago",
        bgColor: ""
      },
      {
        title: "Fashion Design",
        company: "ESQUBE",
        location: "Delhi",
        experience: "0 Years",
        timePosted: "15 hours ago",
        bgColor: ""
      }
    ],
    // Add more sets as needed
  ];

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? jobSets.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === jobSets.length - 1 ? 0 : prev + 1));
  };

  // Current jobs to display
  const currentJobs = jobSets[currentPage];

  return (
    <div className="bg-gray-50 p-8 ">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Freshers Jobs</h1>
          <div className="flex gap-2">
            <button 
              className="p-3 border rounded-md hover:bg-gray-50"
              onClick={goToPrevious}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="p-3 border rounded-md hover:bg-gray-50"
              onClick={goToNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-6 hover:shadow-lg transition-shadow ${job.bgColor}`}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h2>
              <p className="text-gray-600 mb-4">{job.company}</p>
              
              <div className="flex items-center mb-2 text-gray-600">
                <MapPin size={18} className="mr-2 text-red-500" />
                <span>{job.location}</span>
              </div>
              
              <div className="flex items-center mb-6 text-gray-600">
                <Briefcase size={18} className="mr-2 text-red-500" />
                <span>{job.experience}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{job.timePosted}</span>
                <div className="bg-gray-100 p-2 rounded w-12 h-12 flex items-center justify-center">
                  <img src="/1_185X185_FW_Default.png" alt="Building" className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="py-3 px-8 border-2 border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors font-medium">
            View All Freshers Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListings;