// components/RecruitmentPlatform.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeatureCard = () => {
  const featureItems = [
    {
      id: 1,
      title: "Talent Acquisition",
      subtitle: "& Job Posting",
      imageSrc: "/feature1.png",
      link: ""
    },
    {
      id: 2,
      title: "Candidate Screening",
      subtitle: "& Interview Chatbot",
      imageSrc: "/feature2.png",
      link: ""
    },
    {
      id: 3,
      title: "Interview Scheduling",
      subtitle: "& Video Interviews",
      imageSrc: "/feature3.png",
      link: ""
    },
    {
      id: 4,
      title: "ATS",
      subtitle: "& Recruitment Automation",
      imageSrc: "/feature4.png",
      link: ""
    },
    {
      id: 5,
      title: "Candidate Experience",
      subtitle: "& Engagement",
      imageSrc: "/feature5.png",
      link: ""
    },
    {
      id: 6,
      title: "Recruitment",
      subtitle: "Analytics",
      imageSrc: "/feature6.png",
      link: ""
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            <span>FEATURING ALL THE HIRING TOOLS YOU NEED IN </span>
            <span className="text-black">1 PLATFORM</span>
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-3/5 mx-auto mb-10">
          <div className="border-b-2 border-red-400"></div>
        </div>

        {/* Features Section */}
        <section className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-2 sm:px-6">
            {featureItems.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <Link href={feature.link} className="block">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 transition-transform duration-300 hover:scale-105">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />
                  </div>
                </Link>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 hover:text-red-500 transition-colors duration-300">
                  <Link href={feature.link}>
                    {feature.title}<br />{feature.subtitle}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureCard;
