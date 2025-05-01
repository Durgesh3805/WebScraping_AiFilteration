import Image from "next/image";
import Link from "next/link";
import SocialLogin from '../component/components/SocialLogin';
export default function EmployerSignup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col px-10 md:px-20 sm:px-10 py-10">
        <div className="mb-6 max-w-[180px]">
          <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={180} height={50} priority />
        </div>

        <ul className="text-gray-700 space-y-4 text-[16px] w-full mt-4">
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
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
          <p className="text-gray-600 text-lg mb-4">Search Jobs in Minute!</p>

          <form action="/Password" method="POST" className="space-y-6">
              <div>
                <label htmlFor="Name" className="block text-sm text-gray-700 mb-2">
                   Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
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
            <div className="mt-auto">
              <p className=" text-lg mb-3">Continue with a social account</p>
               <SocialLogin/>
            </div>
          
            <div className="text-center">
              <p className="text-gray-500 text-xs ">
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
