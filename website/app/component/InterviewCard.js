import React from 'react';

export default function InterviewCard() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-20 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
      {/* Left content */}
      <div className="w-full md:w-1/2">
        <p className="text-indigo-500 mb-3 text-sm">Interview Scheduling</p>

        <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-4">
          Automate Interview Scheduling & Video Interview
        </h1>

        <p className="text-gray-800 text-sm mb-3 font-semibold">
          Save time & increase interview show-ups by sending automated interview invites and interview reminders. No more time wasted with back and forth scheduling & reminders.
        </p>

        <p className="text-gray-800 text-sm mb-4 font-semibold">
          Save time and improve your hiring efficiency!
        </p>

        <div className="space-y-3 mb-4">
          {[
            'Schedule interviews for multiple candidates in 1 click',
            'Let candidates choose their preferred interview time slot',
            'Conduct video interviews / video calls efficiently',
            'Send reminders automatically 24h & 3h before interviews',
            'Get real-time notifications on candidate interview show-up'
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="text-red-400 mt-1 flex-shrink-0"
              >
                <path
                  d="M7 10l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm">{text}</span>
            </div>
          ))}
        </div>

        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 gap-2 text-sm">
          Learn More
          <svg width="16" height="10" viewBox="0 0 20 20" className="ml-1">
            <path
              d="M4 8h8M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </a>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/InterviewCard.png"
          alt="Interview Card"
          className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}
