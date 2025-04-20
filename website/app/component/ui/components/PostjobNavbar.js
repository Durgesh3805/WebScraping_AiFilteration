
import { useState } from "react";
import Image from "next/image";

export default function PostJobNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
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
  );
}