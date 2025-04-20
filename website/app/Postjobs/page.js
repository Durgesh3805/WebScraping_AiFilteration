"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import HowItWorksSection from "../component/components/HowItWorksSection";
import HireStaff from "../component/components/HireStaff";
import EmployerPage from "../component/components/EmployerPage";
import PostjobFooter from "../component/components/PostjobFooter";

export default function PostJobPage() {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rotatingWords = [
    "Google Jobs",
    "LinkedIn",
    "JobStreet",
    "Indeed",
    "JobsDB",
    "Monster",
    "CareerBuilder",
    "Jobrapido",
    "Glassdoor",
    "Jooble",
    "GrabJobs",
    "Jobstore",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>GrabJobs - Post Jobs on Multiple Job Boards</title>
        <meta name="description" content="Post jobs on multiple job boards with one click" />
      </Head>

      <header className="container mx-auto py-4 px-4 flex justify-between items-center relative">
        <div className="logo">
          <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={150} height={40} priority />
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-between h-6 w-8 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`h-1 w-full bg-gray-800 rounded-lg transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-1 w-full bg-gray-800 rounded-lg transform transition duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">
            How it Works?
          </a>
          <a
            href="#trial"
            className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
          >
            14 days trial
          </a>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white shadow-md z-10 md:hidden">
            <div className="flex flex-col py-4 px-4">
              <a href="#how-it-works" className="py-2 text-gray-700 hover:text-gray-900 border-b border-gray-200">
                How it Works?
              </a>
              <a href="#trial" className="py-2 mt-2 text-center bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">
                14 days trial
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Advertise Your Jobs on Multiple Job Boards
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl text-gray-700 mb-2 flex items-center flex-wrap">
                Post Jobs in 1 click on{" "}
                <div className="h-8 overflow-hidden ml-2 inline-block relative">
                  <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateY(-${currentWordIndex * 2}rem)`,
                    }}
                  >
                    {rotatingWords.map((word, index) => (
                      <div key={index} className="h-8 text-indigo-500">
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition"
                >
                  Try GrabJobs Free
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-gray-700">
              <div className="flex items-center gap-2 hover:text-indigo-500">
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>14 Days Free Trial</span>
              </div>
              <div className="flex items-center gap-2 hover:text-indigo-500">
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-indigo-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Right side - illustration */}
          <div className="md:w-1/2">
            <Image
              src="/Free-Recruitment-Platform-Singapore.webp"
              alt="Recruiting Illustration"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-gray-700">
            trusted by 20,000+ employers to hire staff in minutes.
          </p>
        </div>

        {/* ✅ Trusted Brands Section */}
        <div className="mt-16">
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
            Trusted by Top Brands
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              { name: "KFC", logo: "/GrabJobs-Logo-KFC.png" },
              { name: "DHL", logo: "/GrabJobs-Logo-DHL.png" },
              { name: "McDonalds", logo: "/mcdonalds_logo_testimonials.png" },
              { name: "Uniqlo", logo: "/GrabJobs-Logo-uniqlo.png" },
              { name: "H&M", logo: "/GrabJobs-Logo-HM.png" },
            ].map((brand, index) => (
              <div key={index} className="w-24 h-16 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={80}
                  height={40}
                  className="w-auto h-auto max-w-full max-h-full grayscale"
                />
              </div>
            ))}
          </div>
        </div>

        <section id="how-it-works" className="mt-28">
          <HowItWorksSection />
        </section>

        <section id="trial" className="mt-28">
          <HireStaff />
        </section>

        <section className="mt-28">
          <EmployerPage />
        </section>

        <section className="mt-28">
          <PostjobFooter />
        </section>
      </main>
    </div>
  );
}