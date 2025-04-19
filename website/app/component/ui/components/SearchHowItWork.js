"use client";
import Image from "next/image";

const steps = [
  {
    title: "Step 1",
    subtitle: "Search & Filter",
    description: "Find relevant CVs quickly based on criteria such as location, experience, and more.",
    image: "/Search-Filter.svg",
  },
  {
    title: "Step 2",
    subtitle: "Preview CVs",
    description: "Get a complete picture of each candidate before making contact.",
    image: "/PreviewCVs.svg",
  },
  {
    title: "Step 3",
    subtitle: "Shortlist & Contact",
    description: "Effortlessly build your candidate shortlist and contact your top choices.",
    image: "/Shortlist-Contact.svg",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <h3 className="text-lg text-indigo-600 font-semibold mb-1">{step.title}</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{step.subtitle}</h4>
              <div className="w-full h-78 relative mb-4">
                <Image
                  src={step.image}
                  alt={step.subtitle}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
