"use client";
// pages/profile.js
import { useState } from 'react';
import Image from 'next/image';
import { Star, Calendar, MapPin, Clock, Briefcase } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('experience');

  const profileData = {
    name: 'Amelia',
    role: 'Lead - Front End Developer',
    rate: '$45/hr',
    description: 'Develop responsive HTML pages using Bootstrap as per approved mock-ups, implement pixel perfect UI appearance for mobile & mock-ups. Motivated to combine the art of design with the art of programming.',
    basicInfo: {
      age: '28 Years',
      experience: '4 Years',
      ctc: '12.5 Lac',
      location: 'Pune, Maharashtra',
      availability: 'Full Time (40hr/wk)',
      feedback: '100%'
    },
    skills: ['HTML5', 'CSS', 'jQuery', 'Bootstrap', 'JavaScript', 'Angular.JS', 'GitHub'],
    experience: [
      {
        company: 'IBM',
        role: 'Lead - Front end developer',
        period: 'Jan 2020 - Present | Pune, India',
        description: 'Led a team of 5 developers to build responsive web applications using React.js and Redux. Implemented design systems that increased development efficiency by 30%.'
      },
      {
        company: 'LUMEN',
        role: 'Front end developer',
        period: 'July 2018 - Dec 2019 | Delhi, India',
        description: 'Developed and maintained multiple client-facing portals using Angular. Reduced load time by 40% through code optimization and lazy loading techniques.'
      },
      {
        company: 'Infosys',
        role: 'Executive - Front end developer',
        period: 'May 2016 - July 2018 | Pune, India',
        description: 'Created responsive UI components for enterprise applications. Collaborated with UX designers to implement pixel-perfect designs.'
      }
    ],
    education: [
      {
        institution: 'Pune University',
        degree: 'Bachelor of Engineering in Computer Science',
        period: '2012 - 2016',
        score: 'CGPA: 3.8/4.0'
      },
      {
        institution: 'MIT Academy of Engineering',
        degree: 'Post Graduate Diploma in Web Technologies',
        period: '2016 - 2017',
        score: 'CGPA: 3.9/4.0'
      },
      {
        institution: 'Udacity',
        degree: 'Front End Web Developer Nanodegree',
        period: '2017',
        score: 'Completed with Excellence'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer - Associate',
        issuer: 'Amazon Web Services',
        date: 'March 2023',
        credentialId: 'AWS-DEV-12345'
      },
      {
        name: 'Professional Front-End Developer',
        issuer: 'Meta',
        date: 'September 2022',
        credentialId: 'META-FED-6789'
      },
      {
        name: 'JavaScript Algorithms and Data Structures',
        issuer: 'freeCodeCamp',
        date: 'January 2021',
        credentialId: 'FCC-ALGO-3456'
      },
      {
        name: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: 'June 2020',
        credentialId: 'FCC-RWD-7890'
      }
    ],
    similarProfiles: [
      {
        id: 'Olivia',
        role: 'Lead front developer | Pune, India',
        experience: '7 Years Experience',
        imageUrl: "/happy-mature-business-woman-entrepreneur-600nw-2350002273.webp"
        
      },
      {
        id: 'Ava',
        role: 'Team Lead | Pune, India',
        experience: '6 Years Experience',
         imageUrl: "/portrait-young-hispanic-professional-business-600nw-2510293403.webp"
      },
      {
        id: 'Isabella',
        role: 'Lead - Front end developer | Pune, India',
        experience: '5 Years Experience',
        imageUrl: "/AdobeStock-683293737.jpeg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
    
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-red-500 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/1600w-3kXZ3PTBEWw.webp" 
                    alt="Profile" 
                    width={128} 
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-red-500 rounded-full p-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-center">{profileData.name}</h2>
              <p className="text-gray-600 text-center mb-2">{profileData.role}</p>
              <p className="text-red-500 font-bold text-center mb-4">{profileData.rate}</p>
              <p className="text-gray-600 text-sm text-center">{profileData.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-2">Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Middle Column - Basic Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Basic Information:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Age</p>
                    <p className="font-medium">{profileData.basicInfo.age}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Years of Experience</p>
                    <p className="font-medium">{profileData.basicInfo.experience}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">CTC</p>
                    <p className="font-medium">{profileData.basicInfo.ctc}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-medium">{profileData.basicInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Availability</p>
                    <p className="font-medium">{profileData.basicInfo.availability}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Positive Feedback</p>
                    <div className="flex items-center">
                      <p className="font-medium mr-2">{profileData.basicInfo.feedback}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition-colors flex-1">
                  Work Request
                </button>
                <button className="border border-red-500 text-red-500 hover:bg-red-50 py-2 px-4 rounded-md font-medium transition-colors flex-1">
                  Schedule a call
                </button>
              </div>
            </div>
            
            {/* Tabs Container */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex border-b border-gray-300">
                <button 
                  className={`flex-1 py-3 font-medium text-center ${activeTab === 'experience' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 hover:text-red-400'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </button>
                <button 
                  className={`flex-1 py-3 font-medium text-center ${activeTab === 'education' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 hover:text-red-400'}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </button>
                <button 
                  className={`flex-1 py-3 font-medium text-center ${activeTab === 'certification' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600 hover:text-red-400'}`}
                  onClick={() => setActiveTab('certification')}
                >
                  Certification
                </button>
              </div>
              
              <div className="p-6">
                {activeTab === 'experience' && (
                  <div>
                    {profileData.experience.map((exp, index) => (
                      <div key={index} className={`flex ${index > 0 ? 'mt-6' : ''}`}>
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-red-500 font-bold">{exp.company.substring(0, 2)}</span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800">{exp.company}</h4>
                          <p className="text-sm text-gray-600 mb-1">{exp.role}</p>
                          <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                          <p className="text-sm text-gray-700">{exp.description}</p>
                          <div className="mt-2 text-right">
                            <a href="#" className="text-red-500 text-sm hover:underline">View Project</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'education' && (
                  <div>
                    {profileData.education.map((edu, index) => (
                      <div key={index} className={`flex ${index > 0 ? 'mt-6' : ''}`}>
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800">{edu.institution}</h4>
                          <p className="text-sm text-gray-600 mb-1">{edu.degree}</p>
                          <p className="text-xs text-gray-500 mb-2">{edu.period}</p>
                          <p className="text-sm text-gray-700">{edu.score}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'certification' && (
                  <div>
                    {profileData.certifications.map((cert, index) => (
                      <div key={index} className={`flex ${index > 0 ? 'mt-6' : ''}`}>
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                          <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                          <p className="text-xs text-gray-500 mb-2">Issued: {cert.date}</p>
                          <p className="text-sm text-gray-700">Credential ID: {cert.credentialId}</p>
                          <div className="mt-2 text-right">
                            <a href="#" className="text-red-500 text-sm hover:underline">Verify</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Profiles Section */}
        <div className="mt-8">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar Profiles:</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {profileData.similarProfiles.map((profile, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
        
        {/* Image instead of text */}
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img 
            src={profile.imageUrl} 
            alt={profile.id} 
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">{profile.id}</h4>
          <p className="text-sm text-gray-600">{profile.role}</p>
          <p className="text-xs text-gray-500">{profile.experience}</p>
        </div>

      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}