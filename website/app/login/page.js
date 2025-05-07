// File: pages/employer-login.jsx
// Server Component: no "use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RotatingIllustration from '../component/components/RotatingIllustration';
import SocialLogin from '../component/components/SocialLogin';
import SignInForm from '../component/components/SignInForm';

export default function EmployerLogin() {
  return (
    <>
      <Head>
        <title>Employer Login | GrabJobs</title>
      </Head>

      <div className="flex min-h-screen">
        {/* Left: client-only rotating illustration */}
        <div className="hidden md:flex md:w-1/2 pb-20 pl-12 bg-gray-50">
          <RotatingIllustration />
        </div>

        {/* Right: server-rendered login form */}
        <div className="w-full md:w-1/2 flex flex-col ">
          <div className="flex justify-between items-center mb-6">
            <div className="md:hidden">
              <Image
                src="/gj_logo_new.svg"
                alt="GrabJobs Logo"
                width={150}
                height={40}
                priority
              />
            </div>
          </div>

          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
            <p className="text-gray-600 text-lg mb-3">Welcome back!</p>

            <SignInForm/>
            <div className="text-center mt-2">
              <p className="text-gray-700">
                New to GrabJobs?{' '}
                <Link href="/signup" className="text-blue-500 font-medium hover:text-blue-700">
                  Sign up now!
                </Link>
              </p>

            </div>
            <div className="my-3 flex items-center justify-center ">
                <span className="text-gray-500">or</span>
            </div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  );
}

