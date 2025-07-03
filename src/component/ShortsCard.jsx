// import React, { useEffect, useRef } from 'react';

// const ShortsCard = ({ short }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = videoRef.current;
//           if (video) {
//             if (entry.isIntersecting) {
//               video.play();
//             } else {
//               video.pause();
//             }
//           }
//         });
//       },
//       { threshold: 0.75 }
//     );

//     const currentVideo = videoRef.current;
//     if (currentVideo) {
//       observer.observe(currentVideo);
//     }

//     return () => {
//       if (currentVideo) {
//         observer.unobserve(currentVideo);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-80 bg-black rounded-lg overflow-hidden shadow-lg border border-blue-600 text-white">
//       <video
//         ref={videoRef}
//         src={short.videoUrl}
//         controls
//         muted
//         className="w-full h-80 object-cover"

//         loop
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">Kamal</h3>
//         <p className="text-sm text-gray-500">Description</p>
//         <div className="flex justify-between items-center mt-2">
//           <span>🙏</span>
//           <span>⬇️</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// 2nd code


// import React, { useEffect, useRef, useState } from "react";
// import { FaHeart, FaThumbsDown, FaComment, FaShare } from "react-icons/fa";

// const ShortsCard = ({ short, active }) => {
//   const videoRef = useRef(null);
//   const [muted, setMuted] = useState(false); // Unmuted by default

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = muted;
//       if (active) {
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//       }
//     }
//   }, [active, muted]);

//   const toggleMute = () => {
//     setMuted((prev) => !prev);
//   };

//   return (
//     <div className="absolute min-h-screen w-full flex items-center justify-center bg-black border-4 border-red-600 ">
//       {/* Video Wrapper */}
//       <div
//         className="relative w-3/4 sm:w-[40%] h-full mx-auto cursor-pointer"
//         onClick={toggleMute}
//       >
//         <video
//           ref={videoRef}
//           src={short.videoUrl}
//           className="h-full w-full object-cover rounded-xl"
//           loop
//           playsInline
//         />
//       </div>

//       {/* Floating Buttons */}
//       <div className="absolute right-120  top-100 border-2 border-amber-200 flex flex-col gap-6 text-white text-2xl z-10">
//         <FaHeart className="cursor-pointer hover:scale-110 transition-transform" />
//         <FaThumbsDown className="cursor-pointer hover:scale-110 transition-transform" />
//         <FaComment className="cursor-pointer hover:scale-110 transition-transform" />
//         <FaShare className="cursor-pointer hover:scale-110 transition-transform" />
//       </div>

//       {/* Caption */}
//       <div className="absolute bottom-10 left-5 text-white z-10 w-[90%] sm:w-[40%]">
//         <h3 className="text-lg font-bold">{short.title || "No Title"}</h3>
//         <p className="text-sm text-gray-300">
//           {short.description || "No description"}
//         </p>
//       </div>

//       {/* Mute Indicator */}
//       <div className="absolute top-5 left-5 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
//         {muted ? "Muted 🔇" : "Sound On 🔊"}
//       </div>
//     </div>
//   );
// };

// export default ShortsCard;

import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaThumbsDown, FaComment, FaShare } from "react-icons/fa";

const ShortsCard = ({ short, active }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false); // Unmuted by default

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = muted;
      if (active) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [active, muted]);

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Wrapper */}
      <div
        className="relative w-full sm:w-[40%] h-full mx-auto cursor-pointer"
        onClick={toggleMute}
      >
        <video
          ref={videoRef}
          src={short.videoUrl}
          className="h-full w-full object-cover rounded-xl"
          loop
          playsInline
        />

        {/* Floating Action Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-2 flex flex-col gap-6 text-white text-2xl z-10">
          <button className="hover:scale-110 transition-transform">
            <FaHeart />
          </button>
          <button className="hover:scale-110 transition-transform">
            <FaThumbsDown />
          </button>
          <button className="hover:scale-110 transition-transform">
            <FaComment />
          </button>
          <button className="hover:scale-110 transition-transform">
            <FaShare />
          </button>
        </div>

        {/* Channel Info in the Middle Bottom */}
        <div className="absolute bottom-24 left-5 z-10 text-white w-[90%]">
          <h3 className="text-lg font-bold">
            {short.title || "No Title"}
          </h3>
          <p className="text-sm text-gray-300">
            {short.description || "Unknown Channel"}
          </p>
        </div>

        {/* Mute Indicator */}
        <div className="absolute top-5 left-5 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
          {muted ? "Muted 🔇" : "Sound On 🔊"}
        </div>
      </div>
    </div>
  );
};

export default ShortsCard;

