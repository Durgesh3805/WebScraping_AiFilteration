"use client";
// pages/create-profile.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Star, Calendar, MapPin, Clock, Briefcase, 
  Plus, Trash, ChevronRight, Upload
} from 'lucide-react';

export default function CreateProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rate: '',
    description: '',
    basicInfo: {
      age: '',
      experience: '',
      ctc: '',
      location: '',
      availability: '',
      feedback: ''
    },
    skills: [''],
    experience: [
      {
        company: '',
        role: '',
        period: '',
        description: ''
      }
    ],
    education: [
      {
        institution: '',
        degree: '',
        period: '',
        score: ''
      }
    ],
    certifications: [
      {
        name: '',
        issuer: '',
        date: '',
        credentialId: ''
      }
    ],
    similarProfiles: [
      {
        id: '',
        role: '',
        experience: '',
        imageUrl: ''
      }
    ]
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle text input changes
  const handleInputChange = (e, section, index, field) => {
    const { name, value } = e.target;
    
    if (section) {
      if (section === 'basicInfo') {
        setFormData({
          ...formData,
          basicInfo: {
            ...formData.basicInfo,
            [name]: value
          }
        });
      } else if (index !== undefined && field) {
        // For nested arrays like experience, education, etc.
        const updatedItems = [...formData[section]];
        updatedItems[index] = {
          ...updatedItems[index],
          [field]: value
        };
        
        setFormData({
          ...formData,
          [section]: updatedItems
        });
      }
    } else {
      // For top-level fields
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle skills input
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  // Add new items to arrays
  const addItem = (section) => {
    const emptyItems = {
      skills: '',
      experience: {
        company: '',
        role: '',
        period: '',
        description: ''
      },
      education: {
        institution: '',
        degree: '',
        period: '',
        score: ''
      },
      certifications: {
        name: '',
        issuer: '',
        date: '',
        credentialId: ''
      },
      similarProfiles: {
        id: '',
        role: '',
        experience: '',
        imageUrl: ''
      }
    };

    setFormData({
      ...formData,
      [section]: [...formData[section], emptyItems[section]]
    });
  };

  // Remove items from arrays
  const removeItem = (section, index) => {
    if (formData[section].length > 1) {
      const updatedItems = [...formData[section]];
      updatedItems.splice(index, 1);
      setFormData({
        ...formData,
        [section]: updatedItems
      });
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store form data in localStorage (in a real app, you'd likely use API calls)
    localStorage.setItem('profileData', JSON.stringify(formData));
    
    if (imagePreview) {
      localStorage.setItem('profileImage', imagePreview);
    }
    
    // Redirect to profile page
    router.push('/profilePage');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-8">Create Your Profile</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h2>
              
              <div className="mb-6 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-red-500 flex items-center justify-center overflow-hidden bg-gray-200">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Profile Preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <Upload size={24} />
                        <span className="text-xs mt-1">Upload Photo</span>
                      </div>
                    )}
                  </div>
                  <label className="absolute bottom-1 right-1 bg-red-500 rounded-full p-2 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <Plus className="w-4 h-4 text-white" />
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role/Position</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange(e)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate</label>
                  <input
                    type="text"
                    name="rate"
                    value={formData.rate}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="$XX/hr"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange(e)}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Basic Info Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="text"
                    name="age"
                    value={formData.basicInfo.age}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="XX Years"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.basicInfo.experience}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="X Years"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTC (Cost to Company)</label>
                  <input
                    type="text"
                    name="ctc"
                    value={formData.basicInfo.ctc}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="XX Lac"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.basicInfo.location}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="City, State"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.basicInfo.availability}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="Full Time/Part Time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Positive Feedback</label>
                  <input
                    type="text"
                    name="feedback"
                    value={formData.basicInfo.feedback}
                    onChange={(e) => handleInputChange(e, 'basicInfo')}
                    placeholder="XX%"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Skills Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
                <button
                  type="button"
                  onClick={() => addItem('skills')}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <Plus size={16} className="mr-1" /> Add Skill
                </button>
              </div>
              
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="HTML, CSS, JavaScript, etc."
                    required
                  />
                  {formData.skills.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem('skills', index)}
                      className="ml-2 text-red-500 hover:text-red-600"
                    >
                      <Trash size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            {/* Experience Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Experience</h2>
                <button
                  type="button"
                  onClick={() => addItem('experience')}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <Plus size={16} className="mr-1" /> Add Experience
                </button>
              </div>
              
              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Experience {index + 1}</h3>
                    {formData.experience.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('experience', index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange(e, 'experience', index, 'company')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleInputChange(e, 'experience', index, 'role')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => handleInputChange(e, 'experience', index, 'period')}
                        placeholder="Jan 2020 - Present | City, Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleInputChange(e, 'experience', index, 'description')}
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Education</h2>
                <button
                  type="button"
                  onClick={() => addItem('education')}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <Plus size={16} className="mr-1" /> Add Education
                </button>
              </div>
              
              {formData.education.map((edu, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Education {index + 1}</h3>
                    {formData.education.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('education', index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleInputChange(e, 'education', index, 'institution')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleInputChange(e, 'education', index, 'degree')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                      <input
                        type="text"
                        value={edu.period}
                        onChange={(e) => handleInputChange(e, 'education', index, 'period')}
                        placeholder="2012 - 2016"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Score/GPA</label>
                      <input
                        type="text"
                        value={edu.score}
                        onChange={(e) => handleInputChange(e, 'education', index, 'score')}
                        placeholder="CGPA: X.X/Y.Y"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Certifications</h2>
                <button
                  type="button"
                  onClick={() => addItem('certifications')}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <Plus size={16} className="mr-1" /> Add Certification
                </button>
              </div>
              
              {formData.certifications.map((cert, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Certification {index + 1}</h3>
                    {formData.certifications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('certifications', index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => handleInputChange(e, 'certifications', index, 'name')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => handleInputChange(e, 'certifications', index, 'issuer')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => handleInputChange(e, 'certifications', index, 'date')}
                        placeholder="Month Year"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Credential ID</label>
                      <input
                        type="text"
                        value={cert.credentialId}
                        onChange={(e) => handleInputChange(e, 'certifications', index, 'credentialId')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Similar Profiles Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Similar Profiles</h2>
                <button
                  type="button"
                  onClick={() => addItem('similarProfiles')}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <Plus size={16} className="mr-1" /> Add Profile
                </button>
              </div>
              
              {formData.similarProfiles.map((profile, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Similar Profile {index + 1}</h3>
                    {formData.similarProfiles.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem('similarProfiles', index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={profile.id}
                        onChange={(e) => handleInputChange(e, 'similarProfiles', index, 'id')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={profile.role}
                        onChange={(e) => handleInputChange(e, 'similarProfiles', index, 'role')}
                        placeholder="Role | Location"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <input
                        type="text"
                        value={profile.experience}
                        onChange={(e) => handleInputChange(e, 'similarProfiles', index, 'experience')}
                        placeholder="X Years Experience"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={profile.imageUrl}
                        onChange={(e) => handleInputChange(e, 'similarProfiles', index, 'imageUrl')}
                        placeholder="/path-to-image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md shadow-md transition-colors"
              >
                Create Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}


