import Image from "next/image";

export default function HeroBanner() {
  return (
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
          <form
            action="/api/submit-email" // Replace with your actual endpoint
            method="POST"
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your work email"
              className="px-4 py-3 rounded-md w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-300 bg-white text-gray-900"
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
  );
}
