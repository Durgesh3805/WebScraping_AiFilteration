'use client';

import { useState } from "react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does the free trial work?",
      answer: (
        <>
          <p className="mb-4">
            GrabJobs offers a <strong>14-day trial</strong> during which you can advertise up to 5 jobs for free and assess your candidate response.
          </p>
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
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-xl font-bold text-black mb-8">FAQ | 14-DAY TRIAL</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {faqItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                openFAQ === index ? 'bg-indigo-500' : 'bg-indigo-400'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-white text-base font-medium">{item.question}</h3>
              <div
                className={`${
                  openFAQ === index ? 'bg-white text-indigo-500' : 'bg-indigo-300 text-white'
                } w-6 h-6 rounded-full flex items-center justify-center font-bold`}
              >
                {openFAQ === index ? '−' : '+'}
              </div>
            </div>

            {openFAQ === index && (
              <div className="p-6 bg-white border border-gray-200 text-gray-800 text-base italic">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
