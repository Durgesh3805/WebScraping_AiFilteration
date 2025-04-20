import Image from "next/image";
import Link from "next/link";

export default function EmployerSignup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col px-6 sm:px-10 py-10">
        <div className="mb-6 max-w-[180px]">
          <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={180} height={50} priority />
        </div>

        <ul className="text-gray-700 space-y-4 text-[16px] w-full md:w-1/2 mt-8">
          {[
            "Search jobs in minutes",
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

        <div className="bg-red-500 text-white px-6 py-4 mt-10 rounded-sm max-w-md">
          <h3 className="text-xl font-bold mb-1">Recruitment Automation Software</h3>
          <p className="text-sm">Join 20,000+ companies already using GrabJobs</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
          <p className="text-gray-600 text-lg mb-8">Search Jobs in Minute!</p>

          <form action="/api/signup" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
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
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="Designation" className="block text-sm text-gray-700 mb-2">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  id="Designation"
                  name="Designation"
                  type="text"
                  placeholder="Your Designation"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm text-gray-700 mb-2">
                  Looking for Job in? <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none"
                >
                  <option value="India">India</option>
                  <option value="Singapore">Singapore</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Min 8 alphanumeric characters"
                minLength={8}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div className="text-sm text-gray-600 mb-2">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Log In
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center text-base transition-transform active:scale-95"
            >
              Sign Up
            </button>

            <div className="text-center">
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
