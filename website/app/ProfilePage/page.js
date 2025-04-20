"use client";
import { useState } from 'react';
import { User, Mail, Shield, ArrowLeft, ArrowRight, Star, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function UpworkOnboarding() {
  const [currentProfile, setCurrentProfile] = useState(0);
  
  const profiles = [
    {
      name: "Sasheen M.",
      title: "Customer Experience Consultant",
      rate: "$65.00/hr",
      jobs: 14,
      rating: 5.0,
      badgeColor: "pink",
      testimonial: '"Upwork has enabled me to increase my rates. I know what I\'m bringing to the table and love the feeling of being able to help a variety of clients."',
      image: "/Person1.webp"
    },
    {
      name: "Alexander N.",
      title: "Expert Media Software Developer",
      rate: "$90.00/hr",
      jobs: 9,
      rating: 5.0,
      badgeColor: "pink",
      testimonial: '"The success I\'ve achieved simply would not have been possible without Upwork."',
      image: "/person2.webp"
    },
    {
      name: "Ambika M.",
      title: "Market Researcher",
      rate: "$100.00/hr",
      jobs: 5,
      rating: 5.0,
      badgeColor: "blue",
      testimonial: '"I turned to Upwork as a way to gain more control of my career. I love being able to choose everything from who I work with to how I spend my day."',
      image: "/person3.webp"
    },
    {
      name: "Wahidul M.",
      title: "UX/UI Designer",
      rate: "$50.00/hr",
      jobs: 20,
      rating: 5.0,
      badgeColor: "pink",
      testimonial: '"Upwork has enabled me to build a professional career I love while living a life I love while constantly developing new skills."',
      image: "/person4.webp"
    }
  ];

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-red-500">
          <Image 
            src="/gj_logo_new.svg" 
            alt="Upwork" 
            width={100} 
            height={24} 
            className="h-8 w-auto"
          />
        </div>
        <button className="rounded-full p-2">
          <User size={24} />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side */}
        <div className="flex-1 p-8 max-w-xl mx-auto">
          <div className="mb-14">
            <h1 className="text-3xl font-bold mt-16 mb-2">
              Hey Keerthana. Ready for your next big opportunity?
            </h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 py-5 border-b border-gray-300">
              <div className="p-2">
                <User size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Answer a few questions and start building your profile</p>
              </div>
            </div>

            <div className="flex items-center gap-6 py-5 border-b border-gray-300">
              <div className="p-2">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Apply for open roles or list services for clients to buy</p>
              </div>
            </div>

            <div className="flex items-center gap-6 py-5 border-b border-gray-300">
              <div className="p-2">
                <Shield size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Get paid safely and know we're there to help</p>
              </div>
              
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded">
              Get started
            </button>
            <p className="text-gray-500 mt-3">
              It only takes 5-10 minutes and you can edit it later. We'll save as you go.
            </p>
          </div>
        </div>

        {/* Right Side - Profile Carousel */}
        <div className="hidden lg:block w-1/3 bg-gray-50 p-8">
          <div className="max-w-sm mx-auto mt-16 relative">
            {/* Current Profile */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full -ml-1 -mt-1"></div>
                <Image
                  src={profiles[currentProfile].image}
                  alt={profiles[currentProfile].name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div className={`absolute bottom-0 right-0 bg-${profiles[currentProfile].badgeColor}-500 text-white rounded-full p-1`}>
                  <Star size={16} fill="white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-4">{profiles[currentProfile].name}</h2>
              <p className="text-center text-gray-700">{profiles[currentProfile].title}</p>
              
              <div className="flex items-center mt-4 gap-4">
                <div className="flex items-center">
                  <div className={`bg-${profiles[currentProfile].badgeColor}-500 text-white rounded-full p-1`}>
                    <Star size={16} fill="white" />
                  </div>
                  <span className="ml-1">{profiles[currentProfile].rating}</span>
                </div>
                <div className="text-gray-700 font-medium">{profiles[currentProfile].rate}</div>
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-1" />
                  <span>{profiles[currentProfile].jobs} jobs</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg">
                  {profiles[currentProfile].testimonial}
                </p>
              </div>
              
              <div className="flex justify-between w-full mt-8">
                <button onClick={prevProfile} className="rounded-full bg-gray-100 p-3">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextProfile} className="rounded-full bg-gray-100 p-3">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}