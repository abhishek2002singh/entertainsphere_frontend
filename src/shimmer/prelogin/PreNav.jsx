import React from "react";
import { Link } from "react-router-dom";

const PreNav = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-6 py-3 shadow-lg">
      {/* Logo & Brand Name */}
      <div className="flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrzF_sqeOhOuJhEyTizczgHFyygrRIs7rjw&s"
          alt="EntertainSphere Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl font-semibold tracking-wide">EntertainSphere</h1>
      </div>
      <Link to="/login">
      <button className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300">
        Login
      </button>
      </Link>

    </div>
  );
};

export default PreNav;
