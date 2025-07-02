import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { toggleTheme } from "../utils/themeSlice";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hamOpen, setHamOpen] = useState(false);
  const toggleHamburger = () => {
    setHamOpen(!hamOpen);
  };

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
    // <nav
    //   className={`${
    //     theme === "dark" ? "bg-black text-white" : "bg-white text-black"
    //   } shadow-lg relative`}
    // >
    //   <div className="flex items-center justify-between px-6 py-3">
    //     {/* Logo & Brand */}
    //     <div className="flex items-center gap-3">
    //       <RxHamburgerMenu
    //         onClick={toggleHamburger}
    //         className="text-2xl md:text-3xl cursor-pointer text-white "
    //       />
    //       <img
    //         src="https://www.sphereentertainmentco.com/wp-content/uploads/2023/06/Sphere2023-CorpSite-TopNav-Logo-w-Padding.png"
    //         alt="EntertainSphere Logo"
    //         className="w-full h-10 rounded bg-[#000000]"
    //       />
    //       {/* <h1 className="text-xl font-semibold tracking-wide">EntertainSphere</h1> */}
    //     </div>

    //     {/* serach button */}
    //     <div className="flex bg-[#00000000] border basis-[650px] rounded-full  h-10">
    //       <div className="flex basis-[650px] border border-white rounded-full">
    //         {/* input */}
    //         <div className="flex w-10/11 rounded-l-full">
    //           <input type="text" placeholder="search" className="w-full px-2 outline-none" />
    //         </div>
    //         {/* searach click */}
    //         <div className="w-1/11 bg-[#232121] flex items-center justify-center rounded-r-full">
    //           <button className="flex items-center outline-none">
    //             <IoIosSearch />
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Side Controls */}
    //     <div className="flex items-center gap-4">
    //       <button
    //         onClick={handleThemeToggle}
    //         className="text-xl focus:outline-none transition-colors"
    //         aria-label="Toggle Theme"
    //       >
    //         {theme === "dark" ? (
    //           <FaSun className="text-yellow-400" />
    //         ) : (
    //           <FaMoon className="text-gray-800" />
    //         )}
    //       </button>

    //       <button onClick={toggleMenu} className="relative z-10">
    //         <img
    //           src={user?.photoUrl || "https://via.placeholder.com/40"}
    //           alt="User"
    //           className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
    //         />
    //       </button>
    //     </div>
    //   </div>
    <nav
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } shadow-lg relative`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-3">
          <RxHamburgerMenu
            onClick={toggleHamburger}
            className="text-2xl md:text-3xl cursor-pointer"
          />
          <img
            src="https://www.sphereentertainmentco.com/wp-content/uploads/2023/06/Sphere2023-CorpSite-TopNav-Logo-w-Padding.png"
            alt="EntertainSphere Logo"
            className="h-10 w-auto rounded bg-black"
          />
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex bg-transparent border basis-[650px] rounded-full h-10">
          <div className="flex w-full border border-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 outline-none text-black"
            />
            <button className="bg-[#232121] px-4 text-white flex items-center justify-center">
              <IoIosSearch />
            </button>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="text-xl"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
          <button onClick={toggleMenu}>
            <img
              src={user?.photoUrl || "https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Second Line */}
      <div className="md:hidden px-4 pb-2">
        <div className="flex w-full border rounded-full overflow-hidden h-10">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 outline-none text-black"
          />
          <button className="bg-[#232121] px-4 text-white flex items-center justify-center">
            <IoIosSearch />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          } absolute right-0 top-full w-64 shadow-xl rounded-bl-lg border-l border-b border-yellow-400 z-50`}
        >
          <div className="flex flex-col items-start p-4 gap-3">
            <Link
              to="/about"
              className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            >
              About
            </Link>
            <Link
              to="/content"
              className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            >
              Content
            </Link>
            <Link
              to="/profile"
              className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/update-profile"
              className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            >
              Update Profile
            </Link>
            <Link
              to="/more"
              className="w-full py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors"
            >
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
      {/* hamburger dropdown menu */}
      <div
        className={`absolute top-15 flex left-0 z-10 overflow-y-hidden  h-[100vh] transition-all  duration-200  ease-in-out ${
          hamOpen ? "w-[99vw]" : "w-[0px]"
        }`}
      >
        <div className="w-[50%] bg-black  h-full md:w-[20%] ">
          {/* hamburger and logo */}
         
          
        
        </div>
        <div
          onClick={() => setHamOpen(!hamOpen)}
          className="bg-[#c4c4c428] w-[50%] h-full md:w-[80%]"
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
