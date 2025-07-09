import React, { useEffect, useState } from 'react';
import {
  FaHome, FaFire, FaVideo, FaFilm, FaGamepad,
  FaThumbsUp, FaNewspaper, FaPodcast
} from 'react-icons/fa';
import { MdLiveTv, MdSchool, MdSportsEsports } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width < 768;
  const isMedium = width >= 768 && width < 1300;
  const isDesktop = width >= 1300;

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 768 && isMenuOpen) {
        dispatch(closeMenu());
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [dispatch, isMenuOpen]);

  const getSidebarStyle = () => {
    if (isMobile) return isMenuOpen ? 'translate-x-0 w-56' : '-translate-x-full';
    if (isMedium) return isMenuOpen ? 'w-56 z-30 bg-white' : 'w-14';
    if (isDesktop) return isMenuOpen ? 'w-56' : 'w-14';
    return 'w-16';
  };

  const shouldShowText = isMenuOpen || isDesktop;

  const menuItems = [
    {
      section: null, items: [
        { icon: <FaHome size={20} />, text: "Home", path: "/" },
        { icon: <FaFire size={20} />, text: "Shorts", path: "/shorts" },
        { icon: <FaVideo size={20} />, text: "Video", path: "/video" },
        { icon: <MdLiveTv size={20} />, text: "Live", path: "/live" },
      ]
    },
    {
      section: "Subscriptions", items: [
        { icon: <FaFilm size={20} />, text: "Movie", path: "/movie" },
        { icon: <MdSportsEsports size={20} />, text: "Sports", path: "/sports" },
        { icon: <FaGamepad size={20} />, text: "Gaming", path: "/gaming" },
        { icon: <FaThumbsUp size={20} />, text: "Liked Videos", path: "/liked" },
      ]
    },
    {
      section: "Explore", items: [
        { icon: <FaNewspaper size={20} />, text: "News", path: "/news" },
        { icon: <MdSchool size={20} />, text: "Courses", path: "/courses" },
        { icon: <FaFire size={20} />, text: "Trending", path: "/trending" },
        { icon: <FaPodcast size={20} />, text: "Podcast", path: "/podcast" },
      ]
    }
  ];

  const renderMenu = () => {
    const visibleMenu = isMedium && !isMenuOpen ? [menuItems[0]] : menuItems;
    return visibleMenu.map(({ section, items }) => (
      <div key={section || 'main'}>
        {shouldShowText && section && (
          <h1 className="font-bold my-4 mx-4 text-sm text-gray-600">{section}</h1>
        )}
        <div>
          {items.map(({ icon, text, path }) => (
            <Link to={path} key={text}>
              <div className={`flex ${shouldShowText ? 'flex-row gap-4' : 'flex-col items-center'} py-2 px-4 hover:bg-gray-200 rounded-md cursor-pointer`}>
                <span>{icon}</span>
                {shouldShowText && <span className="text-sm">{text}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <>
      {(isMobile || isMedium) && isMenuOpen && (
        <div
          className="fixed inset-0  z-20"
          onClick={() => dispatch(closeMenu())}
        />
      )}

      <div className={`
        fixed top-16 left-0
        h-[calc(100vh-4rem)]
        py-2 px-2
        shadow-lg overflow-y-auto no-scrollbar
        transition-all duration-300 ease-in-out
        bg-white z-30
        ${getSidebarStyle()}
      `}>
        {renderMenu()}
      </div>
    </>
  );
};

export default SideBar;
