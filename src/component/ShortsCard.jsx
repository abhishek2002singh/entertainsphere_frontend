import React, { useEffect, useRef } from 'react';

const ShortsCard = ({ short }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (video) {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.75 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  return (
    <div className="w-80 bg-black rounded-lg overflow-hidden shadow-lg text-white">
      <video
        ref={videoRef}
        src={short.videoUrl}
        controls
        className="w-full h-80 object-cover"
        muted
        loop
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">Kamal</h3>
        <p className="text-sm text-gray-500">Description</p>
        <div className="flex justify-between items-center mt-2">
          <span>🙏</span>
          <span>⬇️</span>
        </div>
      </div>
    </div>
  );
};

export default ShortsCard;
