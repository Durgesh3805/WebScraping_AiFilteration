// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';
import { BellIcon, ClockIcon, ArrowUpRightIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Logo and brand name */}
       <div className="flex items-center">
    <Link href="/" className="flex items-center">
      <div className="w-32 h-10 relative">
        <img
          src="/gj_logo_new.svg" // <-- Replace with your actual logo path
          alt="Your Website Logo"
          className="h-full object-contain"
        />
      </div>
    </Link>
  </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
          <BellIcon size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
          <ClockIcon size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
          <ArrowUpRightIcon size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;