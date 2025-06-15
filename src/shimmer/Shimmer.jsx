import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="shimmer-content animate-pulse flex flex-col items-center">
        {/* Shimmer Effect */}
        <div className="w-20 h-20 bg-gray-700 rounded-full mb-4"></div>
        <div className="w-48 h-6 bg-gray-700 rounded mb-2"></div>
        <div className="w-64 h-4 bg-gray-700 rounded mb-2"></div>
        <div className="w-64 h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;