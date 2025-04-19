"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

export default function EmployerSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Always Visible */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col px-6 sm:px-10 py-10">
        {/* Logo */}
        <div className="mb-6 max-w-[180px]">
          <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={180} height={50} priority />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row mt-8 gap-6">
          {/* Feature List */}
          <ul className="text-gray-700 space-y-4 text-[16px] w-full md:w-1/2">
            {[
              "Post jobs in minutes",
              "Search millions of CVs",
              "Get featured on multiple job boards",
              "Find the right candidates",
              "Connect with applicants on Live Chat",
              "Schedule Interviews easily",
              "Manage applications all in one place",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <span className="text-gray-500 mr-3">→</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Dashboard Image */}
          <div className="relative w-full md:w-1/2  left-23">
            <Image
              src="/sigup.webp"
              alt="GrabJobs Dashboard Preview"
              fill
              style={{ objectFit: "contain" }}
              className="w-full h-full"
              priority
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-500 text-white px-6 py-4 mt-10 rounded-sm max-w-md">
          <h3 className="text-xl font-bold mb-1">Recruitment Automation Software</h3>
          <p className="text-sm">Join 20,000+ companies already using GrabJobs</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <div className="flex justify-end mb-6">
          <select
            className="bg-transparent border-0 text-sm text-gray-600 focus:outline-none cursor-pointer"
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Create Your Employer Account
          </h1>
          <p className="text-gray-600 text-lg mb-8">Post Jobs & Search CVs in Minutes!</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  autoComplete="given-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
            </div>

            {/* Company and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  autoComplete="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm text-gray-700 mb-2">
                  Looking for Candidates in? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none"
                    required
                  >
                    <option value="India">India</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 8 alphanumeric characters"
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-sm text-gray-600 mb-2">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Log In
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center text-base transition-transform active:scale-95"
            >
              Get Started for Free <FaArrowRight className="ml-2" />
            </button>

            {/* Terms */}
            <div className="text-center">
              <p className="text-gray-500 text-xs mt-4">
                No credit card required. Cancel anytime.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                By signing up, you agree to the{" "}
                <Link href="/terms" className="text-blue-500 hover:text-blue-700">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link href="/privacy" className="text-blue-500 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
