"use client";
// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Briefcase, 
  Send, 
  User, 
  Eye, 
  Gift, 
  ArrowRight
} from 'lucide-react';
import JobDetails from '../component/Jobseekerdetail';

export default function JobSeeker() {
  const [selectedJob, setSelectedJob] = useState('Field Sales Executive');
  
  const jobs = [
    {
      id: 1,
      title: 'Field Sales Executive',
      company: 'Electro Control Systems India Pvt Ltd',
      logo: '/uploadedManual-680b9e0d27c8c_whatsapp_image_2025-04-25_at_8.05.50_pm.png',
      impressions: 575,
      daysLeft: 13,
      experience: { min: 1, max: 2 },
      location: 'Rajkot',
      updatedOn: 'Apr 25, 2025',
      requirements: ['Laptop', 'Bike'],
      responsibilities: [
        'Industrial Projects, Electrical Consultancy, Building Projects',
        'Electrical Panel Inquiry, Turnkey Projects Inquiry',
        'Order Conversion',
        'DATA Analytics, DATA Management, Estimation, Negotiations',
        'Lead Generation, Followups, Co-Ordination, Estimation, Negotiation, Followup, Comparison, Products and Market Awareness, Communications, Ability to Convert into Orders, Data Management, Set Reminders, Give Updates to the Senior, Time management',
      ],
      applicationDeadline: '09 May 25, 12:00 PM IST',
      workDays: '6 Days',
      jobType: 'On Field',
      jobTiming: 'Full Time',
      perks: ['Transport', 'Food & Beverages'],
    },
    {
      id: 2,
      title: 'Outside Sales Representative',
      company: 'TekPillar®',
      logo: '/680b941695294_organisation_image-iyxDdJ8Gfj2106167239hEHfyv8Zn7.png',
      responsibilities: [
        'Industrial Projects, Electrical Consultancy, Building Projects',
        'Electrical Panel Inquiry, Turnkey Projects Inquiry',
        'Order Conversion',
        'DATA Analytics, DATA Management, Estimation, Negotiations',
        'Lead Generation, Followups, Co-Ordination, Estimation, Negotiation, Followup, Comparison, Products and Market Awareness, Communications, Ability to Convert into Orders, Data Management, Set Reminders, Give Updates to the Senior, Time management',
      ],
      applicationDeadline: '09 May 25, 12:00 PM IST',
      workDays: '6 Days',
      jobType: 'On Field',
      jobTiming: 'Full Time',
      perks: ['Transport', 'Food & Beverages'],
      impressions: 530,
      daysLeft: 13,
      applied: 1,
    },
    {
      id: 3,
      title: 'Sales Manager',
      company: 'The Royaleum Atelier',
      logo: '/uploadedManual-680b8e8e4bf43_logo_white_h_color_copy_3.png',
      impressions: 1157,
      daysLeft: 13,
    },
    {
      id: 4,
      title: 'Site Supervisor',
      company: 'RG DZINE',
      logo: '/uploadedManual-680b888ea6df9_screenshot_25-4-2025_183351_www.bing.com.png',
      daysLeft: 13,
      applied: 2,
    },
  ];
  
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
        <div className="w-full md:w-1/3 md:border-r border-gray-200 md:h-screen p-4">
          {jobs.map((job) => (
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
