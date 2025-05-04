"use client";
// components/UserForm.jsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UserForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: 'Pune, Maharashtra',
    experience_years: '',
    ctc: '',
    availability: 'Full Time (40hr/wk)',
    hourly_rate: '',
    skills: {
      html5: false,
      css: false,
      jquery: false,
      bootstrap: false,
      javascript: false,
      github: false,
      angular: false
    },
    avatar: '',
    description: '',
    experiences: [
      { company: '', title: '', start_date: '', end_date: '', location: '' }
    ],
    education: [
      { institution: '', degree: '', start_date: '', end_date: '' }
    ],
    certifications: [
      { name: '', issuer: '', date_issued: '' }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [name]: checked
      }
    });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: '', title: '', start_date: '', end_date: '', location: '' }]
    });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institution: '', degree: '', start_date: '', end_date: '' }]
    });
  };

  const handleCertificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCertifications = [...formData.certifications];
    updatedCertifications[index] = { ...updatedCertifications[index], [name]: value };
    setFormData({ ...formData, certifications: updatedCertifications });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', issuer: '', date_issued: '' }]
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        router.push(`/profile?id=${data.id}`);
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-red-500 mb-6">Create Your Developer Profile</h1>
      
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className={`w-1/3 h-1 ${step >= 1 ? 'bg-red-500' : 'bg-gray-200'} rounded-l-full`}></div>
          <div className={`w-1/3 h-1 ${step >= 2 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
          <div className={`w-1/3 h-1 ${step >= 3 ? 'bg-red-500' : 'bg-gray-200'} rounded-r-full`}></div>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span className={step >= 1 ? 'text-red-500 font-medium' : 'text-gray-500'}>Basic Info</span>
          <span className={step >= 2 ? 'text-red-500 font-medium' : 'text-gray-500'}>Experience</span>
          <span className={step >= 3 ? 'text-red-500 font-medium' : 'text-gray-500'}>Education & Skills</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="avatar">
                Profile Picture
              </label>
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-4">
                  {formData.avatar ? (
                    <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="28"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Pune, Maharashtra"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="experience_years">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience_years"
                  name="experience_years"
                  value={formData.experience_years}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="4"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="ctc">
                  CTC
                </label>
                <input
                  type="text"
                  id="ctc"
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="12.5 Lac"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="availability">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded bg-white"
                >
                  <option value="Full Time (40hr/wk)">Full Time (40hr/wk)</option>
                  <option value="Part Time (20hr/wk)">Part Time (20hr/wk)</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="hourly_rate">
                  Hourly Rate ($)
                </label>
                <input
                  type="number"
                  id="hourly_rate"
                  name="hourly_rate"
                  value={formData.hourly_rate}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="45"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Professional Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Develop responsive HTML pages using Bootstrap as per approved mock-ups, providing UI experience at logical and practical level..."
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
            
            {formData.experiences.map((exp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <h3 className="font-medium">Experience {index + 1}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor={`company-${index}`}>
                      Company
                    </label>
                    <input
                      type="text"
                      id={`company-${index}`}
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="IBM"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor={`title-${index}`}>
                      Job Title
                    </label>
                    <input
                      type="text"
                      id={`title-${index}`}
                      name="title"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Front-end Developer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor={`start_date-${index}`}>
                      Start Date
                    </label>
                    <input
                      type="date"
                      id={`start_date-${index}`}
                      name="start_date"
                      value={exp.start_date}
                      onChange={(e) => handleExperienceChange(index, e)}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor={`end_date-${index}`}>
                      End Date
                    </label>
                    <input
                      type="date"
                      id={`end_date-${index}`}
                      name="end_date"
                      value={exp.end_date}
                      onChange={(e) => handleExperienceChange(index, e)}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2" htmlFor={`location-${index}`}>
                      Location
                    </label>
                    <input
                      type="text"
                      id={`location-${index}`}
                      name="location"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(index, e)}
                      required
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Pune, India"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addExperience}
              className="text-red-500 hover:text-red-700 font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Another Experience
            </button>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="html5"
                    checked={formData.skills.html5}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>HTML5</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="css"
                    checked={formData.skills.css}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>CSS</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="jquery"
                    checked={formData.skills.jquery}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>jQuery</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="bootstrap"
                    checked={formData.skills.bootstrap}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>Bootstrap</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="javascript"
                    checked={formData.skills.javascript}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>JavaScript</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="github"
                    checked={formData.skills.github}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>GitHub</span>
                </label>
                
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="angular"
                    checked={formData.skills.angular}
                    onChange={handleSkillChange}
                    className="h-4 w-4 text-red-500"
                  />
                  <span>Angular</span>
                </label>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
              
              {formData.education.map((edu, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4 mb-4">
                  <h3 className="font-medium">Education {index + 1}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor={`institution-${index}`}>
                        Institution
                      </label>
                      <input
                        type="text"
                        id={`institution-${index}`}
                        name="institution"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(index, e)}
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="University Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor={`degree-${index}`}>
                        Degree
                      </label>
                      <input
                        type="text"
                        id={`degree-${index}`}
                        name="degree"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, e)}
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Computer Science"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor={`edu_start_date-${index}`}>
                        Start Date
                      </label>
                      <input
                        type="date"
                        id={`edu_start_date-${index}`}
                        name="start_date"
                        value={edu.start_date}
                        onChange={(e) => handleEducationChange(index, e)}
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor={`edu_end_date-${index}`}>
                        End Date
                      </label>
                      <input
                        type="date"
                        id={`edu_end_date-${index}`}
                        name="end_date"
                        value={edu.end_date}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="w-full border border-gray-300 p-2 rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addEducation}
                className="text-red-500 hover:text-red-700 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Another Education
              </button>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}