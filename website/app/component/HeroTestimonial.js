"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ashique Razak K",
    company: "MindTree",
    testimonial:
      "FreshersWorld helped me find the opportunity. The placement training modules that they are also effective...",
    image: "/ashiquerazak1568032134.jpg",
  },
  {
    id: 2,
    name: "Karthik D R",
    company: "Toshiba",
    testimonial:
      "I sincerely thank freshersworld.com for helping me find a job at Toshiba (TSIP), one of the largest...",
    image: "/DSC_0044(1)-KarthikDR1663222193.jpg",
  },
  {
    id: 3,
    name: "Shruthi Venkatesh",
    company: "IpSoft Global Services",
    testimonial:
      "Got the right job within a month of signing up for Premium Membership. Great going Freshersworld.com...",
    image: "/ShruthiVenkatesh1603031908.jpg",
  },
  {
    id: 4,
    name: "Shambhavi Mishra",
    company: "Razorpay",
    testimonial:
      "In this tough times of COVID-19, I got this job just because of FreshersWorld helped me find the opportunity...",
    image: "/picshambhaviofficial-shambhavimishra1603031774.jpeg",
  },
  {
    id: 5,
    name: "Abhinav Soni",
    company: "IpSoft Global Services",
    testimonial:
      "I sincerely thank freshersworld.com through which I got placed in IPSoft. As a fresher it is important...",
    image: "/abhinavsoni1603031555.jpg",
  },
  {
    id: 6,
    name: "Yogesh Kumar",
    company: "Magic Bricks",
    testimonial:
      "Freshersworld.com helped me in finding the best opportunities. The placement training modules that they...",
    image: "/yogesh1603031093.jpg",
  },
  {
    id: 7,
    name: "Mallika Alvandimutt",
    company: "Dell EMC",
    testimonial:
      "I'm very glad to get placed from Freshersworld to Dell EMC corporation. I got placed just at my very...",
    image: "/mallika1568030518.jpg",
  },
  {
    id: 8,
    name: "Subhankar Manna",
    company: "TeamLease",
    testimonial:
      "I'm very glad to say that I got placed in Teamlease through freshersworld.com. Thank you for all the...",
    image: "/SubhankarManna1565174501.jpg",
  },
  {
    id: 9,
    name: "Siri Chandana Bonthu",
    company: "Toshiba",
    testimonial:
      "I thank freshersworld.com which helped me get placed in Toshiba, one of the largest companies in the...",
    image: "/sirichandanabonthu1565174159.jpg",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(goToNext, 5000);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(goToNext, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Show only one card on small screens and two on md+ screens
  const getVisibleIndices = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [activeIndex];
    }
    return [activeIndex, (activeIndex + 1) % testimonials.length];
  };

  return (
    <div className="relative bg-red-400 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Testimonials
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {getVisibleIndices().map((index) => (
            <div
              key={testimonials[index].id}
              className="bg-white rounded-xl shadow-md p-6 w-full max-w-md sm:w-[48%] transition-transform duration-500"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                  <Image
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800">
                    {testimonials[index].name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                {testimonials[index].testimonial}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-0">
          <button
            onClick={goToPrev}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-300"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-300"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-red-700"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
