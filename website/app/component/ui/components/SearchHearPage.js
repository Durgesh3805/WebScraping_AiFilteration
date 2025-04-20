
import React from 'react';

const SearchHearPage = () => {
  const testimonials = [
    {
      quote: "Using GrabJobs' CV search was a game-changer for our HR team. We were able to quickly and easily find top candidates that we would have never come across otherwise.",
      name: "Sasha Zhang",
      title: "HR Manager"
    },
    {
      quote: "GrabJobs' CV Search Database is a top-notch solution for us recruiters. The user-friendliness, simple search options, and diverse candidate pool have helped me match open positions with the right candidates swiftly.",
      name: "Samuel Roberts",
      title: "Recruitment Consultant"
    }
  ];

  return (
    <section className="py-5  bg-white">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-700 mb-16">
          Hear from those who found their perfect hire with CV Search
        </h2>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 border border-gray-100"
            >
              <p className="text-slate-700 text-lg mb-6">
                {testimonial.quote}
              </p>
              <div className="text-indigo-500">
                {testimonial.name}| {testimonial.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchHearPage;