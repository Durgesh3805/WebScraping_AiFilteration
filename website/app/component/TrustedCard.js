
import React from 'react';
import Image from 'next/image';

const TrustedBrands = () => {
  const brandRows = [
    [
      { name: 'KFC', logo: '/GrabJobs-Logo-KFC.png' },
      { name: 'DHL', logo: '/GrabJobs-Logo-DHL.png' },
      { name: 'McDonalds', logo: '/mcdonalds_logo_testimonials.png' },
      { name: 'Uniqlo', logo: '/GrabJobs-Logo-uniqlo.png' },
      { name: 'Four Seasons', logo: '/fourseasons_logo_testimonials.png' },
      { name: 'H&M', logo: '/GrabJobs-Logo-HM.png' },
    ],
    [
      { name: 'Shangri-La', logo: '/GrabJobs-Logo-TanglinClub.png' },
      { name: 'Burger King', logo: '/burger_king_logo_testimonials.png' },
      { name: 'Zara', logo: '/GrabJobs-Logo-Zara.png' },
      { name: '7-Eleven', logo: '/711_logo_testimonials.png' },
      { name: 'Hi', logo: '/GrabJobs-Logo-Haidilao.png' },
      { name: 'Pizza Hut', logo: '/coffee_bean_logo_testimonials.png' },
    ],
    [
      { name: 'Smoothie Factory', logo: '/guzman_y_gomez_logo.png' },
      { name: 'Edwards Gourmet', logo: '/gloria_jeans_coffees_logo_testimonials.png' },
      { name: 'SF', logo: '/sf_coffee_logo_testimonials.png' },
      { name: 'Super Loco', logo: '/GrabJobs-Logo-SuperLoco.png' },
      { name: 'J&T Express', logo: '/jt_logo_testimonials.png' },
      { name: 'Delta', logo: '/delta_airlines_logo_testimonials.png' },
    ],
  ];

  return (
    <div className="w-full py-16" style={{ backgroundColor: '#E9EAFE' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Trusted by 20,000+ Global Brands
        </h2>

        {/* Brand Logos */}
        <div className="mb-20">
          {brandRows.map((row, i) => (
            <div
              key={i}
              className="flex justify-center items-center flex-wrap gap-12 mb-8"
            >
              {row.map((brand, j) => (
                <div key={j} className="opacity-70">
                  <div className="h-12 w-24 relative flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-8 pt-16 relative">
            {/* User Image */}
            <div className="absolute -top-14 left-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/james-lee-r2pl41dxxmejzfdpn1kfel41j92rztszr0ueor1zy8.jpeg"
                  alt="James Lee"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 text-lg leading-relaxed">
              “The platform has enabled my recruitment team to track numbers,
              filter candidates, improve hiring efficiency and save countless
              hours.”
            </p>

            {/* Name */}
            <p className="mt-6 text-blue-600 font-medium">
              James Lee | Talent Acquisition Manager
            </p>

            {/* Company logo bottom right */}
            <div className="absolute bottom-6 right-6 opacity-80">
              <Image
                src="/GrabJobs-Logo-uniqlo.png"
                alt="Uniqlo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
