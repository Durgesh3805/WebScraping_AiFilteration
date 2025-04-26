"use client";
import { useState, useEffect } from 'react';

export default function CompanyCarousel() {
  const slides = [
    "/top_companies_1.png",
    "/top_company_img_2.png"
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-bold text-center my-8">Top Feature Companies</h2>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slideImage, slideIndex) => (
            <div key={slideIndex} className="min-w-full flex-shrink-0">
              <div className="w-full">
                <img 
                  src={slideImage} 
                  alt={`Company logos set ${slideIndex + 1}`}
                  className="w-full h-auto object-cover sm:object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button 
          className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-red-100 text-red-500 z-10"
          onClick={() => goToSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1)}
        >
          &lt;
        </button>

        <button 
          className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-red-100 text-red-500 z-10"
          onClick={() => goToSlide((activeSlide + 1) % slides.length)}
        >
          &gt;
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 mx-1 rounded-full ${index === activeSlide ? 'bg-red-500' : 'bg-gray-300'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
