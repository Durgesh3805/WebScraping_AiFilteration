// components/JobsDropdown.jsx
"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const JobsDropdown = ({ isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 right-20 top-full w-full bg-white shadow-lg z-50 border-t"
      style={{ minWidth: '60vw' }}
    >
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-4 gap-6">
          {/* Job By Category */}
          <Section title="Job By Category">
            <div className="grid grid-cols-2 gap-x-4">
              <CategoryLinks links={[
                { href: "/jobs/it-software", label: "IT / Software" },
                { href: "/jobs/core-technical", label: "Core Technical" },
                { href: "/jobs/govt-sector", label: "Govt. Sector" },
                { href: "/jobs/mba", label: "MBA Jobs" },
                { href: "/jobs/internship", label: "Internship Jobs" },
                { href: "/jobs/diploma", label: "Diploma Jobs" },
                { href: "/jobs/research", label: "Research" },
                { href: "/jobs/defence", label: "Defence" },
                { href: "/jobs/bpo", label: "BPO Jobs" },
                { href: "/jobs/part-time", label: "Part Time Jobs" },
                { href: "/jobs/bsc-bca-bbm", label: "BSc / BCA / BBM" },
                { href: "/jobs/scholarships", label: "Scholarships" },
                { href: "/jobs/dream-jobs", label: "Dream Jobs > 5lpa" },
                { href: "/jobs/1-to-3-yr-exp", label: "1 to 3 Yr Exp" },
                { href: "/jobs/tech-support", label: "Tech Support" },
              ]} />
              <CategoryLinks links={[
                { href: "/jobs/health-care", label: "Health Care" },
                { href: "/jobs/hospitality", label: "Hospitality" },
                { href: "/jobs/retail", label: "Retail" },
                { href: "/jobs/journalism", label: "Journalism" },
                { href: "/jobs/quality-control", label: "Quality Control" },
                { href: "/jobs/sports", label: "Sports" },
                { href: "/jobs/finance", label: "Finance" },
                { href: "/jobs/bank", label: "Bank Jobs" },
                { href: "/jobs/walk-ins", label: "Walk-ins" },
                { href: "/jobs/teaching", label: "Teaching" },
                { href: "/jobs/pharma", label: "Pharma Jobs" },
                { href: "/jobs/startup", label: "StartUp Jobs" },
                { href: "/jobs/manpower-consult", label: "Manpower Consult..." },
                { href: "/jobs/other-category", label: "Other Category..." },
              ]} />
            </div>
          </Section>

          {/* Job By Courses */}
          <Section title="Job By Courses">
            <CategoryLinks links={[
              { href: "/jobs/be-btech", label: "BE / B.Tech" },
              { href: "/jobs/mca", label: "MCA" },
              { href: "/jobs/mba-pgdm", label: "MBA / PGDM" },
              { href: "/jobs/me-mtech", label: "ME / M.Tech" },
              { href: "/jobs/msc", label: "M.Sc Jobs" },
              { href: "/jobs/bcom", label: "B.Com Jobs" },
              { href: "/jobs/bba-bbm", label: "BBA / BBM Jobs" },
              { href: "/jobs/bca", label: "BCA Jobs" },
              { href: "/jobs/bsc", label: "BSc Jobs" },
              { href: "/jobs/diploma", label: "Diploma Jobs" },
              { href: "/jobs/other-courses", label: "Other Courses..." },
            ]} />
          </Section>

          {/* Job By City */}
          <Section title="Job By City">
            <div className="grid grid-cols-2 gap-x-4">
              <CategoryLinks links={[
                { href: "/jobs/anywhere-india", label: "Anywhere in India" },
                { href: "/jobs/ahmedabad", label: "Ahmedabad" },
                { href: "/jobs/bangalore", label: "Bangalore" },
                { href: "/jobs/chennai", label: "Chennai" },
                { href: "/jobs/delhi-ncr", label: "Delhi / NCR" },
                { href: "/jobs/hyderabad", label: "Hyderabad" },
                { href: "/jobs/kolkata", label: "Kolkata" },
                { href: "/jobs/mumbai", label: "Mumbai" },
                { href: "/jobs/pune", label: "Pune" },
                { href: "/jobs/gurgaon", label: "Gurgaon" },
                { href: "/jobs/jaipur", label: "Jaipur" },
                { href: "/jobs/mangalore", label: "Mangalore" },
                { href: "/jobs/mysore", label: "Mysore" },
              ]} />
              <CategoryLinks links={[
                { href: "/jobs/visakhapatnam", label: "Visakhapatnam" },
                { href: "/jobs/orissa", label: "Orissa" },
                { href: "/jobs/bhopal", label: "Bhopal" },
                { href: "/jobs/mohali", label: "Mohali" },
                { href: "/jobs/kanpur", label: "Kanpur" },
                { href: "/jobs/allahabad", label: "Allahabad" },
                { href: "/jobs/roorkee", label: "Roorkee" },
                { href: "/jobs/noida", label: "Noida" },
                { href: "/jobs/punjab", label: "Punjab" },
                { href: "/jobs/chandigarh", label: "Chandigarh" },
                { href: "/jobs/kochi", label: "Kochi" },
                { href: "/jobs/kharagpur", label: "Kharagpur" },
                { href: "/jobs/ranchi", label: "Ranchi" },
                { href: "/jobs/nasik", label: "Nasik" },
                { href: "/jobs/goa", label: "Goa" },
                { href: "/jobs/raipur", label: "Raipur" },
                { href: "/jobs/other-cities", label: "Other Cities..." },
              ]} />
            </div>
          </Section>

          {/* Job By Company */}
          <Section title="Job By Company">
            <p className="text-gray-500">Coming soon...</p>
            {/* Placeholder for future job companies */}
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

const CategoryLinks = ({ links }) => (
  <ul className="space-y-2">
    {links.map((link, idx) => (
      <li key={idx}>
        <Link href={link.href} className="text-gray-600 hover:text-red-500">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default JobsDropdown;
