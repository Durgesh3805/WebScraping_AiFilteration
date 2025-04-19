"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeroWithFAQ() {
  const [email, setEmail] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null); // No FAQ open initially


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does the free trial work?",
      answer: (
        <>
          <p className="mb-4">GrabJobs offers a <strong>14-day trial</strong> during which you can advertise up to 5 jobs for free and assess your candidate response.</p>
          <p>Upgrade to a paid plan at any point during or after your trial from your account dashboard.</p>
        </>
      ),
    },
    {
      question: "What happens at the end of the trial?",
      answer:
        "At the end of your 14-day trial, you can choose to upgrade to one of our paid plans or continue with our basic free tier. We won't automatically charge you - the choice is yours.",
    },
    {
      question: "How long are job ads active?",
      answer:
        "Job ads remain active for 30 days by default. You can extend, pause, or close job postings anytime from your dashboard.",
    },
    {
      question: "Where are my Jobs going to be published?",
      answer:
        "Your jobs will be published across multiple job boards including Google Jobs, LinkedIn, Indeed, and other major platforms to maximize visibility and reach qualified candidates.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto my-10 rounded-[40px] bg-gradient-to-r from-[#f87171] to-[#fca5a5] px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Hire Staff in Minutes!
            </h1>
            <p className="text-lg text-white font-medium">
              Create a free account <span className="font-bold">in just 2 minutes.</span>
            </p>
            <p className="text-lg text-white mb-8">Get your first job posted today!</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="px-4 py-3 rounded-md w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-300 bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors whitespace-nowrap"
              >
                Try GrabJobs Free
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <Image
              src="/image-20.png"
              alt="Person hiring staff"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-black mb-8">FAQ | 14-DAY TRIAL</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg"
            >
              {/* FAQ Question Header - Always visible */}
              <div 
                className={`flex justify-between items-center p-4 cursor-pointer ${openFAQ === index ? 'bg-indigo-500' : 'bg-indigo-400'}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-white text-base font-medium">{item.question}</h3>
                <div className={`${openFAQ === index ? 'bg-white text-indigo-500' : 'bg-indigo-300 text-white'} w-6 h-6 rounded-full flex items-center justify-center font-bold`}>
                  {openFAQ === index ? "−" : "+"}
                </div>
              </div>
              
              {/* FAQ Answer Content - Only visible when expanded */}
              {openFAQ === index && (
                <div className="p-6 bg-white border border-gray-200 text-gray-800 text-base italic">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}