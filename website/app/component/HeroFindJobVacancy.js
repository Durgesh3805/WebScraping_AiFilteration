"use client";
import { useState } from 'react';

export default function JobVacancies() {
  const [activeTab, setActiveTab] = useState('roles');

  const tabData = {
    roles: {
      items: [
        { name: "Accountant", count: 531 },
        { name: "BPO / Telecaller", count: 2990 },
        { name: "Customer Service / Tech Support", count: 4115 },
        { name: "Engineer (Core, Non-IT)", count: 10707 },
        { name: "Sales / Marketing Executive", count: 2547 },
        { name: "IT Software-Engineer", count: 5931 },
        { name: "Design / Animation", count: 825 },
        { name: "Receptionist/Front Office", count: 194 }
      ],
      viewAllText: "View All Roles"
    },
    city: {
      items: [
        { name: "Bangalore", count: 3316 },
        { name: "Hyderabad", count: 586 },
        { name: "Chennai", count: 2336 },
        { name: "Delhi", count: 2506 },
        { name: "Pune", count: 640 },
        { name: "Mumbai", count: 3021 },
        { name: "Kolkata", count: 1742 },
        { name: "Ahmedabad", count: 493 },
        { name: "Gurgaon", count: 410 },
        { name: "Noida", count: 459 }
      ],
      viewAllText: "View All Cities"
    },
    courses: {
      items: [
        { name: "B.Com", count: 8979 },
        { name: "BBA/BBM", count: 6971 },
        { name: "BCA", count: 3638 },
        { name: "BE/B.Tech", count: 20183 },
        { name: "MBA/PGDM", count: 1044 },
        { name: "BSc", count: 6683 },
        { name: "MCA", count: 1754 },
        { name: "ME/M.Tech", count: 5593 },
        { name: "MPEd", count: 0 },
        { name: "B.F.Sc(Fisheries)", count: 144 },
        { name: "M.F.Sc(Fisheries)", count: 120 }
      ],
      viewAllText: "View All Courses"
    },
    category: {
      items: [
        { name: "Internship", count: 1653 },
        { name: "BSc/BCA/BBM", count: 6520 },
        { name: "1 to 3 Yr Exp", count: 416 },
        { name: "Part Time", count: 60 },
        { name: "Work from Home", count: 209 }
      ],
      viewAllText: "View All Category"
    }
  };

  return (
    <div className="bg-gray-50 p-8 ">
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 mt-10 mb-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Find Job Vacancies by</h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto border-b border-gray-300 mb-4 no-scrollbar">
        {Object.entries({
          roles: "Jobs by Roles",
          city: "Jobs by City",
          courses: "Jobs by Courses",
          category: "Jobs by Category"
        }).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`py-2 px-4 sm:py-3 sm:px-6 font-medium whitespace-nowrap ${
              activeTab === key 
                ? 'text-orange-500 border-b-2 border-orange-500' 
                : 'text-gray-700 hover:text-orange-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="py-4 sm:py-8">
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
          {tabData[activeTab].items.map((item, index) => (
            <div 
              key={index}
              className="py-2 px-4 rounded-full border border-gray-200 flex items-center text-sm sm:text-base"
            >
              <span className="text-gray-800">{item.name}</span>
              <span className="ml-2 text-gray-500">({item.count})</span>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="border border-orange-500 text-orange-500 px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-orange-50 text-sm sm:text-base">
            {tabData[activeTab].viewAllText}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
