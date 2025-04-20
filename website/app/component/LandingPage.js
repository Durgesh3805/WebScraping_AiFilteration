import Image from "next/image";
import CompanyLogos from "./components/CompanyLogos";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 py-12 gap-12">
        <div className="md:w-1/2 pt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            The Best Recruitment Platform For Smart Companies
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium mb-8 text-gray-800">
            Post Jobs & Hire Staff in Minutes!
          </h2>

          {/* Email Form */}
          <form action="/api/submit-email" method="POST" className="mb-8 max-w-xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your work email"
                required
                className="w-full sm:w-[60%] border border-gray-300 rounded-2xl px-5 py-3 text-base outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-2xl text-base transition duration-300 w-full sm:w-auto"
              >
                Try GrabJobs Free
              </button>
            </div>
          </form>

          {/* Feature list */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-500 mt-6 text-sm font-medium space-y-3 sm:space-y-0 hover:text-gray-900">
            {["14 Days Free Trial", "No Credit Card Required", "Over 10M+ Candidates"].map((item, i) => (
              <div key={i} className="flex items-center">
                <svg className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Company Logos */}
          <CompanyLogos />
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 md:h-full min-h-[300px]">
            <Image
              src="/image.png"
              alt="Recruiter illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
