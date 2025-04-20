// File: pages/employer-login.jsx
// Server Component: no "use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import RotatingIllustration from '../component/components/RotatingIllustration';
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
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 lg:p-16">
          <div className="flex justify-between items-center mb-16">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
            <p className="text-gray-600 text-lg mb-8">Welcome back!</p>

            <form action="/login" method="POST">
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-red-500 focus:ring-red-400 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-blue-500 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md flex justify-center items-center"
              >
                Login <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </form>

            <div className="text-center mt-8">
              <p className="text-gray-700">
                New to GrabJobs?{' '}
                <Link href="/signup" className="text-blue-500 font-medium hover:text-blue-700">
                  Sign up now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

