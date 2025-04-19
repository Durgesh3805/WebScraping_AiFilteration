import React from 'react';

export default function CandidateCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/CandidateCard.png"
          alt="Candidate Screening"
          className="w-full max-w-sm md:max-w-md h-auto object-contain"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2">
        <p className="text-indigo-500 mb-3 text-sm sm:text-base">CANDIDATE SCREENING</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-4 leading-snug">
          Automate Applicant Screening & Scoring With Interview Chatbots
        </h1>

        <p className="text-gray-800 text-sm sm:text-base font-medium mb-2">
          Interview Chatbots handle all your time-consuming & repetitive tasks usually performed by recruiters manually.
        </p>
        <p className="text-gray-800 text-sm sm:text-base font-medium mb-4">
          Keep your team lean and productive by leveraging smart recruitment automation technology.
        </p>

        {/* Feature list */}
        <div className="space-y-3 mb-4">
          {[
            "Customize interview chatbot questions for each role",
            "Automatically screen and score applicants as they apply",
            "Engage with your applicants 24/7",
            "Shortlist or reject applicants based on their interview score",
            "Customize automated shortlist/rejection messages"
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 mt-1 flex-shrink-0">
                <path
                  d="M7 10l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="text-gray-700 text-sm sm:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-700 gap-2 text-sm sm:text-base">
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
    </div>
  );
}
