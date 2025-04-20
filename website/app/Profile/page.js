// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// app/Profile/page.js
async function fetchYourData() {
    // Fetch data from API here
    return {}
  }
  
  export default async function ProfilePage() {
    const data = await fetchYourData();
    
    return (
        <div className="min-h-screen flex flex-col">
        <Head>
          <title>Upwork Login</title>
          <meta name="description" content="Upwork Login Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <header className="py-6  px-4 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <Image
              src="gj_logo_new.svg" 
              alt="Upwork Logo"
              width={100}
              height={30}
              priority
            />
          </div>
        </header>
  
        <main className="flex-grow flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-md border-gray-250 rounded-lg p-8 shadow-sm bg-white">
            <h1 className="text-2xl font-medium text-center mb-8">Log in to Upwork</h1>
            
            <div className="space-y-4">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="Username or Email"
                  />
                </div>
              </div>
              
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Continue
              </button>
              
              <div className="flex items-center justify-center py-2">
                <span className="text-sm text-gray-500">or</span>
              </div>
              
              <button
                type="button"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
<svg className="w-5 h-5 mr-2 bg-white rounded" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  <path d="M1 1h22v22H1z" fill="none"/>
                </svg>
                Continue with Google
              </button>
              
              <button
                type="button"
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                Continue with Apple
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600">Don't have an Upwork account?</p>
              <Link href="/signup" className="text-red-500 font-medium hover:text-red-600">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-md flex justify-center items-center text-base transition-transform active:scale-95">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </main>
        
        <footer className="bg-gray-900 text-white py-6 text-center text-sm">
          <div className="max-w-7xl mx-auto px-4">
            <p>© 2015 - 2025 Upwork® Global Inc. • <a href="#" className="hover:underline">Privacy Policy</a> • <a href="#" className="hover:underline">Cookie Settings</a></p>
          </div>
        </footer>
      </div>
    );
  }