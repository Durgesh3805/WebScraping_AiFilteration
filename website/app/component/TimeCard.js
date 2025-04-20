'use client';
import React, { useState, useEffect } from 'react';

const GrabJobsComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCard, setFlippedCard] = useState({ small: false, enterprise: false });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center mb-20 p-5">
      <div className="max-w-3xl w-full bg-cream-50 rounded-2xl shadow-md p-8 relative">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Spend time doing work{' '}
            <span className="relative">
              you enjoy
              <svg className="absolute bottom-0 top-6 left-0 w-full" height="6" viewBox="0 0 100 6">
                {/* Hand-drawn path animation */}
                <path 
                  d="M0,3 C5,1 10,5 15,3 C20,1 25,5 30,3 C35,1 40,5 45,3 C50,1 55,5 60,3 C65,1 70,5 75,3 C80,1 85,5 90,3 C95,1 100,5 100,3 c80,100 30,100" 
                  stroke="#FF8F8F" 
                  strokeWidth="4" 
                  fill="none"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{
                    animation: "drawLine 3.2s forwards"
                  }}
                />

                
                
                {/* Final straight line */}
                <path 
                  d="M0,3 L100,3" 
                  stroke="#FF8F8F" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  style={{
                    animation: "fadeIn 0.3s 1s forwards"
                  }}
                />
                
                {/* CSS animations */}
                <style jsx>{`
                  @keyframes drawLine {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  @keyframes fadeIn {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                `}</style>
              </svg>
            </span>
          </h1>
          <p className="text-gray-600 mb-8">
            While we handle your time-consuming & repetitive recruitment tasks
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {Array(20).fill(0).map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-red-400">
            Find out how much time & money you can save every year with GrabJobs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Small Business Card */}
          <div
            className="h-48 [perspective:1000px] group"
            onClick={() => isMobile && setFlippedCard(prev => ({ ...prev, small: !prev.small }))}
          >
            <div
              className={`relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d] 
                ${flippedCard.small ? '[transform:rotateY(180deg)]' : ''} 
                group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-[#FF8F8F] rounded-xl p-6 text-white text-center [backface-visibility:hidden]">
                <div className="flex justify-center mb-4">
                  <div className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="12" rx="2" />
                      <path d="M12 8V5" />
                      <path d="M7 8V5" />
                      <path d="M17 8V5" />
                      <path d="M7 15h.01" />
                      <path d="M12 15h.01" />
                      <path d="M17 15h.01" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl font-medium mb-2">Small Business</h2>
                <p className="text-white">How much can you save with GrabJobs?</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#7785F5] rounded-xl p-6 text-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h2 className="text-xl font-medium mb-2">Save $20,000 & 600 Hours</h2>
                <p className="text-white">Small businesses saved an average of $20,000 and 600 hours last year</p>
              </div>
            </div>
          </div>

          {/* Enterprise Card */}
          <div
            className="h-48 [perspective:1000px] group"
            onClick={() => isMobile && setFlippedCard(prev => ({ ...prev, enterprise: !prev.enterprise }))}
          >
            <div
              className={`relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d] 
                ${flippedCard.enterprise ? '[transform:rotateY(180deg)]' : ''} 
                group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-[#FF8F8F] rounded-xl p-6 text-white text-center [backface-visibility:hidden]">
                <div className="flex justify-center mb-4">
                  <div className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                      <path d="M6 11h.01" />
                      <path d="M10 11h.01" />
                      <path d="M14 11h.01" />
                      <path d="M18 11h.01" />
                      <path d="M6 15h.01" />
                      <path d="M10 15h.01" />
                      <path d="M14 15h.01" />
                      <path d="M18 15h.01" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl font-medium mb-2">Enterprise</h2>
                <p className="text-white">How much can you save with GrabJobs?</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#7785F5] rounded-xl p-6 text-white text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h2 className="text-xl font-medium mb-2">Save $60,000 & 2,000 Hours</h2>
                <p className="text-white">Enterprise companies saved an average of $60,000 and 2,000 hours last year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrabJobsComponent;