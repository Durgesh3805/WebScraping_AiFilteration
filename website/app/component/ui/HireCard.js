import Image from "next/image";

const HiringBanner = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-gradient-to-r from-red-400 to-red-300 rounded-[50px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hire Staff in Minutes!</h2>
          <p className="text-lg mb-1">
            Create a free account in <span className="font-semibold">just 2 minutes</span>.
          </p>
          <p className="text-lg mb-6">Get your first job posted today!</p>

          <form
            action="/api/newsletter" // or your real submission route
            method="POST"
            className="flex flex-col sm:flex-row items-stretch gap-4 mb-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your work email"
              className="px-4 py-3 rounded-lg text-gray-800 flex-1 bg-white shadow-md outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              Try GrabJobs Free
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <div className="flex items-center text-white hover:text-gray-500">
              <span className="text-xl mr-2">✔</span> 14 Days Free Trial
            </div>
            <div className="flex items-center text-white hover:text-gray-500">
              <span className="text-xl mr-2">✔</span> No Credit Card Required
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <Image
            src="/HIRESTAFF.png"
            alt="Hiring illustration"
            width={500}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HiringBanner;
