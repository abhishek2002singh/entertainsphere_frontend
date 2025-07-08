import React, { useState ,useEffect} from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon ,FaSearch} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { toggleTheme } from "../utils/themeSlice";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { toggleMenus } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constant';

const Nav = () => {

const [isOpen, setIsOpen] = useState(false);
const[searchQuery,setSearchQuery]=useState("");
const [suggestion ,setSuggestions]=useState([]);
const[showSuggestions,setShowSuggestions]=useState(false);
const searchCache = useSelector((store)=>store.search)

const user = useSelector((store) => store.user);
const theme = useSelector((store) => store.theme.theme); 
const dispatch = useDispatch();
const navigate = useNavigate();

 
 useEffect(()=>{
        const timer = setTimeout(()=>
        {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggesstions()
            }
        } ,200)

        return ()=>{
            clearTimeout(timer);
        }
         
    },[searchQuery]);

    const getSearchSuggesstions = async ()=>{
    // console.log("api call-"+searchQuery)
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        //update the cache
        dispatch(
            cacheResults({
                [searchQuery]:json[1],
             
            })
        );
    }
const togglemenuhandler=()=>{
    dispatch(toggleMenus());
}


 // console.log(user)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  if(!data){
    return  <h1>loading........</h1>
  }

  return (
    <>
      <nav
        className={`${
          theme === "dark" ? "bg-blue-700 text-white" : "bg-white text-black"
        } shadow-lg fixed top-0 left-0 right-0 z-50`}
      >
        <div className="flex items-center justify-between px-2 sm:px-4 py-3">
            {/* Left section - Hamburger & Logo */}

            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <RxHamburgerMenu
                    onClick={() => togglemenuhandler()} // 
                    className="text-2xl cursor-pointer hover:bg-blue-800"
                />
                
                <Link to="/">
                    <img
                        src="https://www.sphereentertainmentco.com/wp-content/uploads/2023/06/Sphere2023-CorpSite-TopNav-Logo-w-Padding.png"
                        alt="EntertainSphere Logo"
                        className="h-8 md:h-10 w-auto rounded"
                    />
                </Link>
            </div>

           {/* Desktop Search Bar - now properly responsive */}
           <div className="hidden  sm:flex flex-grow mx-2 md:mx-4 px-2 relative max-w-2xl">
                <div className="flex w-full relative">
                    <input
                        type="text"
                        placeholder="Search......"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchQuery.trim() !== '') {
                            setShowSuggestions(false);

                            navigate(`/app/results?q=${searchQuery}`);
                        }
                        }}
                        className="w-full border border-gray-300 pl-4 p-2 rounded-l-full bg-white text-black"
                    />
                    <button className="bg-gray-200 px-4 text-white flex items-center justify-center py-2.5 rounded-r-full border border-gray-300 hover:bg-pink-200"
                        onClick={() => {
                            if (searchQuery.trim() !== "") {
                                navigate(`/app/results?q=${searchQuery}`);
                                setShowSuggestions(false);
                            }
                        }}
                    >
                        <IoIosSearch size={20} className="text-black"/>
                    </button>
                </div>
                {showSuggestions &&searchQuery && (
                <div className='absolute top-11 bg-white  px-2  w-full  shadow-lg rounded-lg border border-gray-100 text-black z-40 '>
                    <ul>
                        {suggestion.map((s) => (
                            <li 
                                key={s} 
                                className='flex items-center gap-2 py-2 px-3 shadow-sm hover:bg-gray-100'
                            
                                onMouseDown={() => {navigate(`/app/results?q=${s}`  , {state:s}) 
                                setSearchQuery(s)
                                }}
                                >
                                <FaSearch size={16} className='text-gray-300'/> 
                                <span className="truncate">{s}</span>
                            </li>
                        ))}  
                    </ul>
                </div>
           
                )}
            </div>

            {/* Right section - Theme & Profile */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
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
                    src={user?.user?.photoUrl || user?.photoUrl || "https://via.placeholder.com/40"}
                    alt="User"
                    className="w-8 h-8  md:w-10 md:h-10 rounded-full border-2 border-yellow-400 object-cover"
                />
                </button>

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
          </div>
        </div>

        {/* Mobile Search Bar - appears below nav */}
        <div className="sm:hidden px-4 pb-3">
           <div className="flex">
                <input
                type="text"
                placeholder="Search......"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim() !== '') {
                    
                    navigate(`/app/results?q=${searchQuery}`)
                    setShowSuggestions(false);
                    }
                }}
                className="w-full border border-gray-300 pl-4 p-2 rounded-l-full bg-white text-black"
                />
                <button className="bg-gray-200 px-4  flex items-center justify-center py-2.5 rounded-r-full 
                    border border-gray-300 "
                    onClick={() => {
                        if (searchQuery.trim() !== "") {
                            navigate(`/app/results?q=${searchQuery}`);
                            setShowSuggestions(false);
                        }
                    }}
                >
                   <IoIosSearch size={20} className="text-black"/>
                </button>
            </div>
           {showSuggestions&&searchQuery && (
                <div className='absolute bg-white py-2 px-2 w-[calc(100%-3rem)] shadow-lg rounded-lg border border-gray-100 text-black z-50'>
                    <ul>
                        {suggestion.map((s) => (
                            <li 
                                key={s} 
                                className='flex items-center gap-2 py-2 px-3 shadow-sm hover:bg-gray-100'
                                onMouseDown={() => {
                                    navigate(`/app/results?q=${s}`);
                                    setSearchQuery(s);
                                    setShowSuggestions(false);
                               }}
                            >
                                <FaSearch size={16} className='text-gray-300'/> 
                                <span className="truncate">{s}</span>
                            </li>
                        ))}  
                    </ul>
                </div>
            )}
        </div>

      </nav>

      
    </>
  );
};


export default Nav;
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