
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-pink-50 w-full ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 mb-16 text-center">
          How it Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">Step 1</h3>
            <h4 className="text-xl text-gray-700 font-medium mb-6">
              Create your Job Post
            </h4>
            <div className="relative w-52 h-44 mb-6">
              <Image
                src="/01-Talent-Acquisition-Job-Posting-1536x1191.png"
                alt="Create job post"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-gray-700">
              Once you post your job, it gets automatically sent to 20+ job sites.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">Step 2</h3>
            <h4 className="text-xl text-gray-700 font-medium mb-6">
              Auto-Screen Applicants
            </h4>
            <div className="relative w-52 h-44 mb-6">
              <Image
                src="/image-35.png"
                alt="Auto-screening applicants"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-gray-700">
              Applicants from all sources answer your screening questions via GrabJobs chatbots.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">Step 3</h3>
            <h4 className="text-xl text-gray-700 font-medium mb-6">
              Select Top Candidates
            </h4>
            <div className="relative w-52 h-44 mb-6">
              <Image
                src="/02-Candidate-Screening-Interview-Chatbots-1536x1166.png"
                alt="Select top candidates"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-gray-700">
              GrabJobs ranks applicants by relevance score and helps you manage your next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
