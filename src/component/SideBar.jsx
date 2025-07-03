
import React, { useEffect } from 'react';
import { FaFilm, FaFire, FaGamepad, FaHome, FaNewspaper, FaPodcast, FaThumbsUp, FaVideo } from 'react-icons/fa';
import { MdLiveTv, MdSchool, MdSportsEsports } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu} from '../utils/appSlice';

const SideBar = () => {
   const dispatch = useDispatch()
   const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
   
   useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth < 800 && isMenuOpen) {
      dispatch(closeMenu());
    }
  };

  window.addEventListener('resize', handleResize);

  // Initial check
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [dispatch, isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div className=' py-2 left-0 h-[calc(100vh-4rem)] w-full max-w-[200px] md:w-64 overflow-y-auto bg-white shadow-lg z-30 no-scrollbar'>
      <div className="px-2 mb-2">
        <ul >
          {/* Each link is flex row on md+ and flex-col (icon above text) on smaller */}
          <Link to="/">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaHome size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Home</span>
            </li>
          </Link>

          <Link to="/shorts">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer  px-4">
              <FaFire size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Shorts</span>
            </li>
          </Link>

          <Link to="/">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaVideo size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Video</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <MdLiveTv size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Live</span>
            </li>
          </Link>
         
        </ul>

       <h1 className="font-bold my-4 mx-4">Subscriptions</h1>
        <ul>
          {/* Each link is flex row on md+ and flex-col (icon above text) on smaller */}
          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaFilm size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Movie</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <MdSportsEsports size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Sports</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaGamepad size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Gaming</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaThumbsUp size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">liked video</span>
            </li>
          </Link>
        </ul>


     <h1 className="font-bold mx-4 my-4">Watch later</h1>
       
        <ul>
          {/* Each link is flex row on md+ and flex-col (icon above text) on smaller */}
          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaFilm size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Movie</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <MdSportsEsports size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Sports</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaGamepad size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Gaming</span>
            </li>
          </Link>

          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaThumbsUp size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">liked video</span>
            </li>
          </Link>
          <h1 className='font-bold my-4 mx-4 '>Explore</h1>
          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaNewspaper size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">News</span>
            </li>
          </Link>
          
          <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <MdSchool size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">courses</span>
            </li>
          </Link>
           <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaFire size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">Trending</span>
            </li>
          </Link>
           <Link to="">
            <li className="flex flex-col items-center md:flex-row md:items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
              <FaPodcast size={24} className="mb-1 md:mb-0 md:mr-6" />
              <span className="font-roboto font-normal leading-5 text-black">podcast</span>
            </li>
          </Link>
         
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

