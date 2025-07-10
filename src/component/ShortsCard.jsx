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
//     <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
//       {/* Video Wrapper */}
//       <div
//         className="relative w-full sm:w-[40%] h-full mx-auto cursor-pointer"
//         onClick={toggleMute}
//       >
//         <video
//           ref={videoRef}
//           src={short.videoUrl}
//           className="h-full w-full object-cover rounded-xl"
//           loop
//           playsInline
//         />

//         {/* Floating Action Buttons */}
//         <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-2 flex flex-col gap-6 text-white text-2xl z-10">
//           <button className="hover:scale-110 transition-transform">
//             <FaHeart />
//           </button>
//           <button className="hover:scale-110 transition-transform">
//             <FaThumbsDown />
//           </button>
//           <button className="hover:scale-110 transition-transform">
//             <FaComment />
//           </button>
//           <button className="hover:scale-110 transition-transform">
//             <FaShare />
//           </button>
//         </div>

//         {/* Channel Info in the Middle Bottom */}
//         <div className="absolute bottom-24 left-5 z-10 text-white w-[90%]">
//           <h3 className="text-lg font-bold">
//             {short.title || "No Title"}
//           </h3>
//           <p className="text-sm text-gray-300">
//             {short.description || "Unknown Channel"}
//           </p>
//         </div>

//         {/* Mute Indicator */}
//         <div className="absolute top-5 left-5 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
//           {muted ? "Muted 🔇" : "Sound On 🔊"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShortsCard;

// ShortsCard.jsx

// ShortsCard.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaThumbsDown, FaComment, FaShare, FaTimes } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";

const ShortsCard = ({ short, active, isMuted, setIsMuted }) => {
  const videoRef = useRef(null);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [reportReason, setReportReason] = useState("");
  const [reportDescription, setReportDescription] = useState("");
  const [comments, setComments] = useState([
    { user: "User1", text: "🔥🔥 Amazing content!" },
    { user: "User2", text: "Loved the vibe 😍" },
  ]);

  const toggleLike = () => setLike(!like);
  const toggleDislike = () => setDislike(!dislike);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (active) {
      const tryPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Autoplay blocked. Muting...", err);
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {});
          });
        }
      };
      setTimeout(() => tryPlay(), 300);
    } else {
      video.pause();
    }
  }, [active]);

  const toggleMute = (e) => {
    if (e.target.closest("button")) return;
    const newMute = !isMuted;
    videoRef.current.muted = newMute;
    setIsMuted(newMute);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments((prev) => [...prev, { user: "You", text: commentInput }]);
    setCommentInput("");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportReason.trim()) return;
    console.log("Report submitted:", { reportReason, reportDescription });
    setShowReport(false);
    setReportReason("");
    setReportDescription("");
  };

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden flex justify-center items-center">
      {/* === Video Section === */}
      <div
        className="relative w-full sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[30%] h-full mx-auto top-1 bottom-2   z-10"
        onClick={toggleMute}
      >
        <video
          ref={videoRef}
          src={short.videoUrl}
          className="h-full w-full object-cover"
          loop
          playsInline
          autoPlay={active}
        />

        {/* Action Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 flex flex-col gap-6 text-white text-2xl z-20">
          <button onClick={toggleLike} className="hover:scale-110 transition-transform">
            {like ? <FaHeart className="text-red-700" /> : <FaHeart />}
          </button>
          <button onClick={toggleDislike} className="hover:scale-110 transition-transform">
            {dislike ? <FaThumbsDown className="text-red-400" /> : <FaThumbsDown />}
          </button>
          <button onClick={() => setShowComments(true)} className="hover:scale-110 transition-transform">
            <FaComment />
          </button>
          <button onClick={() => setShowReport(true)} className="hover:scale-110 transition-transform">
            <TbMessageReportFilled />
          </button>
        </div>

        {/* Mute Status */}
        <div className="absolute top-5 left-5 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded z-20">
          {isMuted ? "Muted 🔇" : "Sound On 🔊"}
        </div>

        {/* Info */}
        <div className="absolute bottom-24 left-5 z-40 text-white w-[90%]">
          <div className="flex gap-1 items-center cursor-pointer w-fit p-1  ">
            <button className="cursor-pointer">
              <img 
                src={short.userId.photoUrl}
                alt="User"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-yellow-400 object-cover"
              />
            </button>
          <h3 className="text-lg font-bold">{short.userId.firstName|| "No Title"} {short.userId.lastName}</h3>

          </div>
           
          <p className="text-sm ml-1 mt-1 text-gray-300">{short.description || "Unknown Channel"}</p>
        </div>
      </div>

      {/* === Comment Modal === */}
      {showComments && (
        <div className="absolute z-30 right-0 sm:right-6 bottom-16 sm:bottom-auto sm:top-[10%] sm:w-[400px] w-full sm:h-[80%] h-[60%] bg-white rounded-t-xl sm:rounded-xl shadow-lg flex flex-col">
          <div className="flex justify-between items-center border-b px-4 py-2">
            <h2 className="text-lg font-semibold">Comments</h2>
            <button onClick={() => setShowComments(false)} className="text-xl">
              <FaTimes className="cursor-pointer" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
            {comments.map((comment, idx) => (
              <div key={idx}>
                <p className="font-semibold text-sm">{comment.user}</p>
                <p className="text-sm">{comment.text}</p>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleCommentSubmit}
            className="px-4 py-3 bg-white border-t flex gap-2 items-center"
          >
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
              className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* === Report Modal === */}
      {showReport && (
        <div className="absolute z-40 right-0 sm:right-11 bottom-16 sm:bottom-auto sm:top-[10%] sm:w-[400px] w-full sm:h-[70%] h-[65%] bg-white rounded-t-xl sm:rounded-xl shadow-xl flex flex-col">
          <div className="flex justify-between items-center border-b px-4 py-2">
            <h2 className="text-lg font-semibold">Report</h2>
            <button onClick={() => setShowReport(false)} className="text-xl">
              <FaTimes className="cursor-pointer" />
            </button>
          </div>
          <form
            onSubmit={handleReportSubmit}
            className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto w-full"
          >
            <p className="text-sm text-gray-600">
              What's going on? We'll check for all Community Guidelines, so don't worry about making the perfect choice.
            </p>

            <select
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm focus:outline-none w-full max-w-[75%]"
              required
            >
              <option value="">Select the reason</option>
              <option value="Sexual content">Sexual content</option>
              <option value="Violent or repulsive content">Violent or repulsive content</option>
              <option value="Hateful or abusive content">Hateful or abusive content</option>
              <option value="Harassment or bullying">Harassment or bullying</option>
              <option value="Harmful or dangerous acts">Harmful or dangerous acts</option>
              <option value="Misinformation">Misinformation</option>
              <option value="Child abuse">Child abuse</option>
            </select>

            <textarea
              value={reportDescription}
              onChange={(e) => setReportDescription(e.target.value)}
              placeholder="Add a description (optional)..."
              className="border px-3 py-2 rounded-md text-sm resize-none h-24 focus:outline-none w-full"
            />

            <button
              type="submit"
              className="bg-red-400 font-bold text-white px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-red-700 transition duration-200 self-end"
            >
              Submit Report
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShortsCard;


