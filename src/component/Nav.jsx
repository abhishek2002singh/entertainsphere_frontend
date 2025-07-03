import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../utils/themeSlice";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogOut = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`);
      localStorage.removeItem("token");
      navigate("/login"); // Redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} shadow-lg relative`}>
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrzF_sqeOhOuJhEyTizczgHFyygrRIs7rjw&s"
            alt="EntertainSphere Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-semibold tracking-wide">EntertainSphere</h1>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="text-xl focus:outline-none transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>

          <button onClick={toggleMenu} className="relative z-10">
            <img
              src={user?.user?.photoUrl || user?.photoUrl ||"https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} absolute right-0 top-full w-64 shadow-xl rounded-bl-lg border-l border-b border-yellow-400 z-50`}>
          <div className="flex flex-col items-start p-4 gap-3">
            <Link to="/about" className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
              About
            </Link>
            <Link to="/content" className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
              Content
            </Link>
            <Link to="/profile" className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
              Profile
            </Link>
            <Link to="/update-profile" className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
              Update Profile
            </Link>
            <Link to="/more" className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
              More
            </Link>
            <button
              onClick={handleLogOut}
              className="w-full text-left py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
