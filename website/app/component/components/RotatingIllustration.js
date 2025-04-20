'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function RotatingIllustration() {
  const illustrations = [
    {
      image: '/image.webp',
      title: 'Smart Job Posting',
      description: 'Jobs are reposted on 20+ top-tier job boards for increased reach.',
    },
    {
      image: '/image2.webp',
      title: 'Automated Screening',
      description: 'Let AI shortlist qualified candidates based on your criteria.',
    },
    {
      image: '/image3.webp',
      title: '24/7 Interview Chatbot',
      description: 'Engage candidates instantly and collect interview answers automatically.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % illustrations.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = illustrations[currentIndex];

  return (
    <div className="flex flex-col justify-between h-full p-8">
      <div>
        <Image src="/gj_logo_new.svg" alt="GrabJobs Logo" width={180} height={50} priority />
      </div>
      <div className="flex justify-center items-center my-8">
        <div
          className={`relative w-4/5 h-96 transition-opacity duration-500 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
