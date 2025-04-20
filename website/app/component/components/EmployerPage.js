
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            4 out of 5 employers
          </h2>
          <p className="text-xl text-gray-700">
            who post a job on GrabJobs get a quality candidate within the first day.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Profile Image - Positioned above the card */}
          <div className="absolute -top-16 left-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white z-10">
            <Image
              src="/Tianxia-Zhang-plaxso3yqwmlx59ojb03yv5394eu90lc2te4x9nbk0.jpeg" 
              alt="Tianxia Zhang" 
              width={96} 
              height={96}
              className="object-cover"
            />
            {/* Replace with actual image: <Image src="/tianxia-zhang.jpg" alt="Tianxia Zhang" width={96} height={96} className="object-cover" /> */}
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 pt-12 pb-8">
            <blockquote className="text-gray-700 text-lg mb-6">
              "Posting on multiple platforms at once, automatically filtering candidates and live chat with applicants... We love all the features on GrabJobs."
            </blockquote>
            
            <div className="text-indigo-500 font-medium">
              Tianxia Zhang | HaiDiLao Hot Pot
            </div>
          </div>

          {/* "Hi" bubble */}
          <div className="absolute -bottom-6 right-6 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
              <Image
                src="/Haidilao.jpg"
                alt="Haidilao Logo"
                width={40}
                height={40}
              />
            </div>
        </div>
      </div>
    </section>
  );
}