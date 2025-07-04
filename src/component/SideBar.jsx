import React, { useEffect, useState } from 'react';
import {
  FaFilm, FaFire, FaGamepad, FaHome,
  FaNewspaper, FaPodcast, FaThumbsUp, FaVideo
} from 'react-icons/fa';
import { MdLiveTv, MdSchool, MdSportsEsports } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu,  } from '../utils/appSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 768;
  const isMedium = windowWidth >= 768 && windowWidth < 1300;
  const isDesktop = windowWidth >= 1300;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Auto-close on mobile resize
      if (window.innerWidth < 768 && isMenuOpen) {
        dispatch(closeMenu());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, isMenuOpen]);

  const getItemClass = () => 'flex-row items-center '; // Always column layout for desktop compact

  const shouldShowText = () =>
    isMobile || isMenuOpen || isDesktop;

  const renderMenuItems = (items) =>
    items.map((item) => (
      <Link to={item.path} key={item.text}>
        <li className={`flex ${getItemClass()} py-2 px-4 hover:bg-gray-200 rounded-md cursor-pointer`}>
          <span className="mb-1">{item.icon}</span>
          {shouldShowText() && <span className="text-xl text-center pl-5">{item.text}</span>}
        </li>
      </Link>
    ));

  // Determine sidebar width based on screen and toggle
  const getSidebarWidth = () => {
    if (isMobile) return isMenuOpen ? 'w-64' : '-translate-x-full';
    if (isMedium) return isMenuOpen ? 'w-64' : 'w-20';
    if (isDesktop) return isMenuOpen ? 'w-64' : 'w-24'; // default compact desktop
    return 'w-24';
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isMenuOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => dispatch(closeMenu())}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0
        h-[calc(100vh-4rem)]
        py-2
        bg-white shadow-lg z-50
        overflow-y-auto no-scrollbar
        transition-all duration-300 ease-in-out
        ${getSidebarWidth()}
        ${isMobile ? '' : 'translate-x-0'}
      `}>
        <div className="px-2 mb-2">
          <ul>
            {renderMenuItems([
              { icon: <FaHome size={20} />, text: "Home", path: "/" },
              { icon: <FaFire size={20} />, text: "Shorts", path: "/shorts" },
              { icon: <FaVideo size={20} />, text: "Video", path: "/video" },
              { icon: <MdLiveTv size={20} />, text: "Live", path: "/live" }
            ])}
          </ul>

          {shouldShowText() && (
            <>
              <h1 className="font-bold my-4 mx-4">Subscriptions</h1>
              <ul>
                {renderMenuItems([
                  { icon: <FaFilm size={20} />, text: "Movie", path: "/movie" },
                  { icon: <MdSportsEsports size={20} />, text: "Sports", path: "/sports" },
                  { icon: <FaGamepad size={20} />, text: "Gaming", path: "/gaming" },
                  { icon: <FaThumbsUp size={20} />, text: "Liked Videos", path: "/liked" }
                ])}
              </ul>

              <h1 className="font-bold my-4 mx-4">Explore</h1>
              <ul>
                {renderMenuItems([
                  { icon: <FaNewspaper size={20} />, text: "News", path: "/news" },
                  { icon: <MdSchool size={20} />, text: "Courses", path: "/courses" },
                  { icon: <FaFire size={20} />, text: "Trending", path: "/trending" },
                  { icon: <FaPodcast size={20} />, text: "Podcast", path: "/podcast" }
                ])}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
