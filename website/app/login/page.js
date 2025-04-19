'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// Component for rotating illustrations with synced image, title, and description
function RotatingIllustration() {
  const illustrations = [
    {
      image: '/image.webp',
      title: 'Smart Job Posting',
      description: 'Jobs are reposted on 20+ top-tier job boards for increased reach.',
    },
    {
      image: '/image2.webp',
      title: 'Automated Screening',
      description: 'Let AI shortlist qualified candidates based on your criteria.',
    },
    {
      image: '/image3.webp',
      title: '24/7 Interview Chatbot',
      description: 'Engage candidates instantly and collect interview answers automatically.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % illustrations.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = illustrations[currentIndex];

  return (
    <div className="flex flex-col justify-between h-full p-8">
      <div>
        <Image 
          src="/gj_logo_new.svg" 
          alt="GrabJobs Logo" 
          width={180} 
          height={50}
          priority
        />
      </div>

      <div className="flex justify-center items-center my-8">
        <div
          className={`relative w-4/5 h-96 transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function EmployerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section with Rotating Illustration */}
      <div className="hidden md:flex md:w-1/2 pb-20 pl-12 bg-gray-50">
        <RotatingIllustration />
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 lg:p-16">
        <div className="flex justify-between items-center mb-16">
          <div className="md:hidden">
            <Image 
              src="/gj_logo_new.svg" 
              alt="GrabJobs Logo" 
              width={150} 
              height={40}
              priority
            />
          </div>
          <div className="ml-auto">
            <select 
              className="bg-transparent border-0 text-gray-600 focus:outline-none cursor-pointer"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="Chinese">Chinese</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Employer Login</h1>
          <p className="text-gray-600 text-lg mb-8">Welcome back!</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md flex justify-center items-center"
            >
              Login <HiArrowRight className="ml-2" size={20} />
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-700">
              New to GrabJobs?{' '}
              <Link href="/signup" className="text-blue-500 font-medium hover:text-blue-700">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
