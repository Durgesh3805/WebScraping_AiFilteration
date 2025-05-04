// components/ProfilePage.jsx (continued)
import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage({ userData }) {
  const [activeTab, setActiveTab] = useState('experience');
  
  if (!userData) {
    return <div className="text-center py-12">Loading...</div>;
  }
  
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - User Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-500">
                {userData.avatar ? (
                  <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <h1 className="text-xl font-bold mt-4 text-center">{userData.name || 'HITe-0125'}</h1>
            <p className="text-gray-600 text-sm">{userData.description?.split('.')[0] || 'Lead - Front end developer'}</p>
            <p className="text-red-500 font-medium mt-2">${userData.hourly_rate || '45'}/hr</p>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <h2 className="text-lg font-semibold mb-3">Basic Information:</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Age</span>
                <span className="font-medium">{userData.age || '28'} Years</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Years of Experience</span>
                <span className="font-medium">{userData.experience_years || '4'} Years</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">CTC</span>
                <span className="font-medium">{userData.ctc || '12.5 Lac'}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Location:</h2>
              <span className="text-sm text-gray-600">{userData.location || 'Pune, Maharashtra'}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Availability</h2>
              <span className="text-sm text-gray-600">{userData.availability || 'Full Time (40hr/wk)'}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 py-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Positive Feedback</h2>
              <div className="flex items-center">
                <span className="text-sm font-medium mr-1">100%</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between space-x-3">
            <button className="flex-1 bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition-colors">
              Work Request
            </button>
            <button className="flex-1 border border-red-500 text-red-500 py-2 rounded font-medium hover:bg-red-50 transition-colors">
              Schedule a call
            </button>
          </div>
        </div>
        
        {/* Right Column - Experience, Education, Certification Tabs */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button 
                className={`pb-4 px-4 font-medium ${activeTab === 'experience' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`pb-4 px-4 font-medium ${activeTab === 'education' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button 
                className={`pb-4 px-4 font-medium ${activeTab === 'certification' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('certification')}
              >
                Certification
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="py-6">
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {(userData.experiences && userData.experiences.length > 0 ? userData.experiences : [
                    { 
                      company: 'IBM', 
                      title: 'Front end developer',
                      start_date: '2020-01-01',
                      end_date: '',
                      location: 'Pune, India'
                    },
                    { 
                      company: 'Lumen', 
                      title: 'Front end developer',
                      start_date: '2016-07-01',
                      end_date: '2020-12-31',
                      location: 'Delhi, India'
                    },
                    { 
                      company: 'Infosys', 
                      title: 'Executive - Front end developer',
                      start_date: '2016-05-01',
                      end_date: '2018-07-31',
                      location: 'Pune, India'
                    }
                  ]).map((exp, idx) => (
                    <div key={idx} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 overflow-hidden">
                          {exp.company === 'IBM' && (
                            <div className="bg-blue-500 w-full h-full flex items-center justify-center text-white font-bold">IBM</div>
                          )}
                          {exp.company === 'Lumen' && (
                            <div className="bg-yellow-500 w-full h-full flex items-center justify-center text-white font-bold">LM</div>
                          )}
                          {exp.company === 'Infosys' && (
                            <div className="bg-green-500 w-full h-full flex items-center justify-center text-white font-bold">IN</div>
                          )}
                          {!['IBM', 'Lumen', 'Infosys'].includes(exp.company) && (
                            <div className="bg-gray-300 w-full h-full flex items-center justify-center text-white font-bold">
                              {exp.company?.substring(0, 2).toUpperCase() || 'CO'}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{exp.company}</h3>
                        <p className="text-gray-600 text-sm mb-1">{exp.title}</p>
                        <p className="text-gray-500 text-xs mb-2">
                          {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                        </p>
                        <p className="text-gray-500 text-xs">{exp.location}</p>
                        
                        <div className="mt-2">
                          <a href="#" className="text-red-500 text-xs flex items-center hover:text-red-600">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-6">
                  {(userData.education && userData.education.length > 0 ? userData.education : [
                    { 
                      institution: 'University of Pune', 
                      degree: 'Bachelor of Computer Science',
                      start_date: '2012-08-01',
                      end_date: '2016-05-31'
                    }
                  ]).map((edu, idx) => (
                    <div key={idx} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{edu.institution}</h3>
                        <p className="text-gray-600 text-sm mb-1">{edu.degree}</p>
                        <p className="text-gray-500 text-xs mb-2">
                          {formatDate(edu.start_date)} - {formatDate(edu.end_date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'certification' && (
                <div className="space-y-6">
                  {(userData.certifications && userData.certifications.length > 0 ? userData.certifications : [
                    { 
                      name: 'Frontend Web Development', 
                      issuer: 'Udemy',
                      date_issued: '2019-03-15'
                    },
                    { 
                      name: 'React Developer Certification', 
                      issuer: 'Facebook',
                      date_issued: '2020-05-20'
                    }
                  ]).map((cert, idx) => (
                    <div key={idx} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{cert.name}</h3>
                        <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs mb-2">
                          {formatDate(cert.date_issued)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(userData.skills || {
                html5: true,
                css: true,
                jquery: true,
                bootstrap: true,
                javascript: true,
                github: true,
                angular: true
              }).filter(([_, value]) => value).map(([skill]) => (
                <span 
                  key={skill} 
                  className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded"
                >
                  {skill.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          
          {/* Similar Profiles */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Similar Profiles:</h2>
            <div className="space-y-4">
              {(userData.similarProfiles || [
                {
                  id: 'HITe-1110',
                  name: 'Front end developer',
                  location: 'Pune, India',
                  experience_years: 7
                },
                {
                  id: 'HITe-0220',
                  name: 'Team Lead',
                  location: 'Pune, India',
                  experience_years: 6
                },
                {
                  id: 'HITe-0783',
                  name: 'Lead - Front end developer',
                  location: 'Pune, India',
                  experience_years: 5
                }
              ]).map((profile, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {profile.avatar ? (
                      <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-white font-bold">
                        {profile.id?.substring(5) || idx}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{profile.id}</h3>
                      <span className="text-xs text-gray-500">{profile.experience_years} Years Experience</span>
                    </div>
                    <p className="text-sm text-gray-600">{profile.name}</p>
                    <p className="text-xs text-gray-500">{profile.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}