"use client";
import Image from 'next/image';
import { useState } from 'react';
import { User, Mail, Shield, ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function UpworkOnboarding() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-red-500">
          <Image 
            src="/gj_logo_new.svg" 
            alt="Upwork" 
            width={100} 
            height={24} 
            className="h-8 w-auto"
          />
        </div>
        <button className="rounded-full p-2">
          <User size={24} />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Side */}
        <div className="flex-1 p-8 max-w-xl mx-auto">
          <div className="mb-14">
            <h1 className="text-3xl font-bold mt-16 mb-2">
              Hey Keerthana. Ready for your next big opportunity?
            </h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 py-5 border-b">
              <div className="p-2">
                <User size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Answer a few questions and start building your profile</p>
              </div>
              <div>
                <button className="rounded-full bg-gray-100 p-3">
                  <ArrowLeft size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 py-5 border-b">
              <div className="p-2">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Apply for open roles or list services for clients to buy</p>
              </div>
            </div>

            <div className="flex items-center gap-6 py-5 border-b">
              <div className="p-2">
                <Shield size={24} />
              </div>
              <div className="flex-1">
                <p className="text-lg">Get paid safely and know we're there to help</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded">
              Get started
            </button>
            <p className="text-gray-500 mt-3">
              It only takes 5-10 minutes and you can edit it later. We'll save as you go.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block w-1/3 bg-gray-50 p-8">
          <div className="max-w-sm mx-auto mt-16">
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <Image
                  src="/person1.webp"
                  alt="Profile"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-1">
                  <Star size={16} fill="white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-4">Sasheen M.</h2>
              <p className="text-center text-gray-600">Customer Experience Consultant</p>
              
              <div className="flex items-center mt-4 gap-4">
                <div className="flex items-center">
                  <div className="bg-red-500 text-white rounded-full p-1">
                    <Star size={16} fill="white" />
                  </div>
                  <span className="ml-1">5.0</span>
                </div>
                <div className="text-gray-700 font-medium">$65.00/hr</div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-1" />
                  <span>14 jobs</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg">
                  "Upwork has enabled me to <span className="text-red-500">increase my rates</span>. I know what I'm <span className="text-red-500">bringing to the table</span> and love the feeling of <span className="text-red-500">being able to help</span> a variety of clients."
                </p>
              </div>
              
              <div className="mt-4">
                <button className="rounded-full bg-gray-100 p-3">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}