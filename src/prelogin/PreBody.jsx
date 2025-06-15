import React from "react";


const PreBody = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-yellow-400 text-lg font-semibold">
          A WORLD OF ENTERTAINMENT
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
          Dive into <span className="text-blue-400">Endless Fun</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Discover movies, shows, music, and more—all in one place.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition">
          Join for Free
        </button>
        <p className="mt-4 text-gray-400">
          Already a member?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Right Section - Grid Layout */}
      <div className="grid grid-cols-2 gap-4 lg:w-1/2 max-w-md md:max-w-lg lg:max-w-xl mx-auto relative">
        {/* Images */}
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQr_aq3Dn5HdPJoCxbBmkP_aP14d9t1aIcw&s"
            alt="Person 1"
            className="rounded-full w-full border-4 border-yellow-400"
          />
        </div>
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmlLCL8Tvffs-DGC6ldic1ahMofBttOTYQQ&s"
            alt="Person 2"
            className="rounded-full w-full border-4 border-blue-500"
          />
        </div>

        {/* Shapes */}
        <div className="bg-gray-800 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-white">
          {/* Placeholder */}
        </div>
        <div className="bg-yellow-400 rounded-full w-24 h-24 md:w-32 md:h-32"></div>

        {/* Floating Small Shape */}
        <div className="absolute top-2 left-8 bg-red-400 rounded-full w-6 h-6 md:w-8 md:h-8"></div>
        <div className="bg-green-300 rounded-full w-24 h-24 md:w-32 md:h-32"></div>
      </div>
    </div>
  );
};

export default PreBody;
