import React from 'react'
import {formatViews,formatDuration,formatTimeAgo} from "../utils/helper.js"

const VideoCardDetails = ({info}) => {
//console.log(info.contentDetails.duration)
    if (!info) return null;

    const { snippet, statistics, contentDetails } = info;
    const { duration } = contentDetails;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const viewCount = statistics?.viewCount ? formatViews(statistics.viewCount) : "N/A";
    const timeAgo = formatTimeAgo(publishedAt);
    const videoDuration = formatDuration(duration);
 // console.log(videoDuration)

  return (
    <div className='flex flex-col md:flex-row gap-3 rounded-xl shadow-md  transition-all duration-300 hover:bg-gray-100
            pr-1  '>
           <div className="w-full md:w-2/5 aspect-video relative  flex-shrink-0 overflow-hidden rounded-xl">
                <img
                    className="w-full h-full rounded-xl object-cover "
                    src={thumbnails?.medium?.url}
                    alt={title}
                />
                {videoDuration && (
                    <span className="absolute bottom-2 right-2 bg-black text-white text-xs sm:text-sm p-0.5 sm:p-1 rounded bg-opacity-80">
                    {videoDuration}
                    </span>
                )}
            </div>

        {/* video info */}
        <div className='flex flex-col  gap-1 p-1 sm:gap-1.5 md:gap-2 px-2 sm:p-2  w-full '>
            <h4 className='text-sm sm:text-sm  font-semibold  text-gray-800 '>{title.length > 50 && window.innerWidth >= 1024  ? title.slice(0, 50) + '...' :  title}</h4>
             
            <p className="text-xs sm:text-sm text-gray-600 ">{channelTitle}</p>

            {/* views & timeAgo */}
            <p className='text-xs sm:text-sm text-gray-600 pb-1.5 sm:py-0 '>{viewCount} . {timeAgo}</p>
        </div>
    </div>
  )
}

export default VideoCardDetails;