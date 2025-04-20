"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CompanyLogos = () => {
  const scrollRef = useRef(null);

  const companies = [
    { src: "/Calvin.jpg", alt: "Calvin Klein", width: 80 },
    { src: "/KFC-1.jpg", alt: "KFC", width: 60 },
    { src: "/Uniqlo-1.jpg", alt: "Uniqlo", width: 60 },
    { src: "/DHL.jpg", alt: "DHL", width: 80 },
    { src: "/McDo-2.jpg", alt: "McDonald's", width: 60 },
    { src: "/HM-1.jpg", alt: "H&M", width: 60 },
    { src: "/Filas-2.jpg", alt: "Filas", width: 70 },
    { src: "/Nike.jpg", alt: "Nike", width: 65 },
    { src: "/Pizza-Hut.jpg", alt: "Pizza Hut", width: 75 },
    { src: "/Shopee-1.jpg", alt: "Shopee", width: 70 },
    { src: "/Pull.jpg", alt: "PULL&BEAR", width: 65 },
    { src: "/Tommy.jpg", alt: "TOMMY", width: 80 },
    { src: "/Ascott-1.jpg", alt: "ASOCOTT", width: 70 },
    { src: "/Burger-King.jpg", alt: "BURGER KING", width: 60 },
    { src: "/Zara-1.jpg", alt: "ZARA", width: 75 },
    { src: "/Crowne-Plaza.jpg", alt: "CROWNE PLAZA", width: 65 },
    { src: "/Aunties-Anne.jpg", alt: "AUNTIE ANNE'S", width: 70 },
    { src: "/Haidilao.jpg", alt: "HI", width: 80 },
    { src: "/JPMorgan.jpg", alt: "JPMORGAN CHASE", width: 65 },
    { src: "/Mos-Burger.jpg", alt: "MOS BURGER", width: 70 },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;
    let animationId;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="mt-10">
      <p className="text-base sm:text-lg font-medium mb-4 ">
        Join 20,000+ companies already using GrabJobs
      </p>
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap"
        style={{ maxWidth: "100%" }}
      >
        <div className="flex gap-6 items-center py-2">
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Image
                src={company.src}
                alt={company.alt}
                width={company.width}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
