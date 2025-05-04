"use client";
// pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {getData} from '../actions/job';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Briefcase, 
  Send, 
  User, 
  Eye, 
  Gift, 
  ArrowRight,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import JobDetails from '../component/Jobseekerdetail';

export default function JobSeeker() {
  const [selectedJob, setSelectedJob] = useState('');
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(); 
        setJobs(response); // Update the jobs state with the fetched data 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const nextPage = () => {
    if (currentPage * jobsPerPage < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Calculate the current jobs to display
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  
  const activeJob = jobs.find(job => job?.title === selectedJob) || null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Job Seeker Dashboard</title>
        <meta name="description" content="Find your next career opportunity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row">
        {/* Left sidebar - Job listings */}
        <div className="w-full md:w-1/3 md:border-r border-gray-200 md:h-screen p-4 overflow-y-auto">
          {currentJobs.map((job) => (
            <div 
              key={job.id} 
              className={`mb-4 p-4 rounded-md border cursor-pointer transition-all ${
                selectedJob === job.title 
                  ? 'border-l-4 border-red-500 shadow-md' 
                  : 'border-gray-200 hover:border-l-2 hover:border-l-red-300'
              }`}
              onClick={() => setSelectedJob(job.title)}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  {job && job.logo ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={job.logo}
                        alt={job.company || "Company"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ) : (
                    <Briefcase className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                
                <div className="flex-grow">
                  <p className="text-xs text-gray-500">Job</p>
                  <h3 className="text-lg font-medium text-red-500">{job?.title}</h3>
                  <p className="text-sm text-gray-600">{job?.company}</p>
                  
                  <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                    {job && job.impressions !== undefined && (
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{job.impressions} Impressions</span>
                      </div>
                    )}
                    
                    {job && job.daysLeft !== undefined && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{job.daysLeft} days left</span>
                      </div>
                    )}
                  </div>
                  
                  {job && job.applied !== undefined && (
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{job.applied} Applied</span>
                    </div>
                  )}
                  
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      Experienced Professionals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Pagination controls */}
          {jobs.length > jobsPerPage && (
            <div className="flex justify-between items-center mt-4 mb-4">
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 flex items-center justify-center text-red-500 font-medium bg-white border border-gray-200 rounded-md shadow-sm transition-colors ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span>Previous</span>
              </button>
              
              <div className="text-sm text-gray-600">
                Page {currentPage} of {Math.ceil(jobs.length / jobsPerPage)}
              </div>
              
              <button 
                onClick={nextPage}
                disabled={currentPage * jobsPerPage >= jobs.length}
                className={`px-4 py-2 flex items-center justify-center text-red-500 font-medium bg-white border border-gray-200 rounded-md shadow-sm transition-colors ${
                  currentPage * jobsPerPage >= jobs.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Main content - Job details */}
        <div className="w-full md:w-2/3 md:h-screen overflow-y-auto">
          {activeJob ? (
            <JobDetails job={activeJob} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a job to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}