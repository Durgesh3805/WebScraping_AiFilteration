
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

export default function CVSearchPage() {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className=" bg-white">
      <main className="px-4 py-10 w-full flex justify-center">
        <div className="w-full max-w-[1100px] h-auto md:h-[350px] bg-gradient-to-b from-[#EF5350] to-[#F48FB1] rounded-[60px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-[44px] font-bold mb-4 leading-tight">
              Search Millions of CVs
            </h1>
            <p className="text-sm sm:text-base md:text-xl mb-1">
              Create a free account <span className="font-bold">in just 2 minutes.</span>
            </p>
            <p className="text-sm sm:text-base md:text-xl mb-6">
              Get access to the candidate database today!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-start gap-3 sm:gap-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="px-6 py-4 rounded-[12px] text-gray-800 w-full sm:w-[300px] bg-white shadow-lg outline-none focus:ring-2 focus:ring-blue-300 text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#6C63FF] hover:bg-[#5b54e8] text-white px-8 py-4 rounded-[12px] font-semibold text-base shadow-lg transition-all"
              >
                Search CVs
              </button>
            </form>
          </div>

          {/* Right Content - Image */}
          <div className="mt-8 md:mt-0 hidden md:flex justify-center items-center w-full md:w-1/2">
            <Image
              src="/image-20.png"
              alt="Search CVs illustration"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
