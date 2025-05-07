import Image from "next/image";
import Link from "next/link";
import SocialLogin from '../component/components/SocialLogin';
import SignupForm from "../component/components/SignupForm";

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
        <div className="mt-auto">
              <p className=" text-lg mb-3">Continue with a social account</p>
               <SocialLogin/>
            </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
          <p className="text-gray-600 text-lg mb-4">Search Jobs in Minute!</p>
          <SignupForm />         
          
            <div className="text-center">
              <p className="text-gray-500 text-xs mt-2 ">
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
          
        </div>
      </div>
    </div>
  );
}
