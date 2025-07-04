// /* eslint-disable no-empty */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils/Constant';
// import { apiPath } from '../utils/path';
// import ShortsCard from './ShortsCard';

// const Feed = () => {
//   const [shorts, setShorts] = useState([]);

//   const fetchShortsData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}${apiPath.GETSHOTS}`, {
//         withCredentials: true,
//       });
//       setShorts(response.data.shorts);
//       // console.log(response.data.shorts)
//       console.log(response.data)
//     } catch (err) {
//       console.error('Error fetching shorts:', err);
//     }
//   };

//   useEffect(() => {
//     fetchShortsData();
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center gap-4 min-h-screen pt-1 border border-red-500">
//       {shorts.map((short) => (
//         <ShortsCard key={short._id} short={short} />
//       ))}
//     </div>
//   );
// };

// export default Feed;

// 2nd code

// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { BASE_URL } from "../utils/Constant";
// import { apiPath } from "../utils/path";
// import ShortsCard from "./ShortsCard";

// const Feed = () => {
//   const [shorts, setShorts] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);

//   const fetchShortsData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}${apiPath.GETSHOTS}`, {
//         withCredentials: true,
//       });
//       setShorts(response.data.shorts);
//       console.log(response.data)
//     } catch (err) {
//       console.error("Error fetching shorts:", err);
//     }
//   };

//   useEffect(() => {
//     fetchShortsData();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const items = containerRef.current.querySelectorAll(".short-item");

//       items.forEach((item, index) => {
//         const rect = item.getBoundingClientRect();
//         const visibleHeight =
//           Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
//         const percentVisible = visibleHeight / window.innerHeight;

//         if (percentVisible > 0.75) {
//           setActiveIndex(index);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen overflow-y-scroll  border-2 border-red-600  snap-y snap-mandatory no-scrollbar"
//     >
//       {shorts.map((short, index) => (
//         <div key={short._id} className="min-h-screen  snap-start short-item ">
//           <ShortsCard short={short} active={index === activeIndex} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Constant";
import { apiPath } from "../utils/path";
import ShortsCard from "./ShortsCard";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Feed = () => {
  const [shorts, setShorts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const fetchShortsData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${apiPath.GETSHOTS}`, {
        withCredentials: true,
      });
      setShorts(response.data.shorts);
      console.log(response.data)
    } catch (err) {
      console.error("Error fetching shorts:", err);
    }
  };

  const loggedUserInformation = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/me`, { withCredentials: true });
      dispatch(addUser(res?.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loggedUserInformation();
    fetchShortsData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const items = containerRef.current?.querySelectorAll(".short-item");
      if (!items || items.length === 0) return;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const percentVisible = visibleHeight / window.innerHeight;

        if (percentVisible > 0.75) {
          setActiveIndex(index);
        }
      });
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    if (shorts.length > 0) {
      setTimeout(() => {
        handleScroll();
      }, 200);
    }

    return () => container.removeEventListener("scroll", handleScroll);
  }, [shorts]);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollBy({
        top: e.deltaY > 0 ? 100 : -100,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-black scroll-smooth"
    >
      {shorts.map((short, index) => (
        <div key={short._id} className="h-screen w-full snap-start short-item">
          <ShortsCard
            short={short}
            active={index === activeIndex}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;

