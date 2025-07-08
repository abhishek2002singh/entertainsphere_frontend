// import React from 'react';
// import { Link } from 'react-router-dom';
// import { formatTimeAgo} from '../utils/helper.js';

// const SearchCard = ({ video, channelThumbnail,viewCount,duration }) => {
//     console.log("SearchCard duration:", duration);

//   const { videoId } = video.id;
//   const {
//     title,
//     thumbnails,
//     channelTitle,
//     description,
//     publishedAt,
    
//   } = video.snippet;

//   return ( 
//     <Link to={`/app/watch?v=${videoId}`} key={videoId}>
//       <div className="flex flex-col md:flex-row gap-4 rounded-xl shadow-md hover:bg-gray-50 transition-all mx-24">
//         {/* Thumbnail */}
//         <div className="w-full md:w-2/5 aspect-video relative">
//           <img
//             className="w-full h-full rounded-md object-cover"
//             src={thumbnails?.medium?.url}
//             alt={title}
//           />
//           {duration&&(<span className='absolute bottom-2 right-2 bg-black text-white p-1 rounded bg-opacity-80'>{duration}</span>)}
//         </div>

//         {/* Video Info */}
//         <div className="flex flex-col gap-3 md:w-3/5">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
//             {title}
//           </h3>
//           <p className='text-sm  text-gray-600'>{viewCount} . {formatTimeAgo(publishedAt)}</p>

//           {/* channel thumbnail */}
//           <div className="flex items-center gap-2 my-3">
//                <img
//                     src={channelThumbnail || '/fallback-channel.png'}
//                     alt={channelTitle}
//                     className="h-6 w-6 rounded-full object-cover"
//                     onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/fallback-channel.png';
//               }}
//               />
//               <p className="text-sm text-gray-600">{channelTitle}</p>
//           </div>


//             <div className="flex flex-col">
                                
//                 <p className="text-sm text-gray-600 mt-1 ">
//                 {description}
//                 </p>
//             </div> 
//         </div>
//       </div>
//     </Link>
//   );
// };

//export default SearchCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../utils/helper.js';

const SearchCard = ({ video, channelThumbnail, viewCount, duration }) => {
  const { videoId } = video.id;
  const {
    title,
    thumbnails,
    channelTitle,
    description,
    publishedAt,
  } = video.snippet;
 //console.log(viewCount)
  return (
    <Link to={`/app/watch?v=${videoId}`} key={videoId}>
        <div className="flex flex-col md:flex-row gap-4 rounded-xl shadow-md  transition-all duration-300 hover:bg-gray-100
            mx-2 sm:mx-4 md:mx-10 lg:mx-12 xl:mx-28 ">
        
            {/* Thumbnail */}
            <div className="w-full md:w-2/5 aspect-video relative  flex-shrink-0 overflow-hidden rounded-xl">
                <img
                    className="w-full h-full rounded-xl object-cover "
                    src={thumbnails?.medium?.url}
                    alt={title}
                />
                {duration && (
                    <span className="absolute bottom-2 right-2 bg-black text-white text-xs sm:text-sm p-0.5 sm:p-1 rounded bg-opacity-80">
                    {duration}
                    </span>
                )}
            </div>

            {/* Video Info */}
            <div className="flex flex-col  gap-1 sm:gap-2 md:gap-3 px-2 sm:p-2  md:w-3/5">
                <h3 className="text-sm sm:text-base md:text-lg py-0  md:py-1 font-semibold text-gray-800">
                    {title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600">{viewCount} • {formatTimeAgo(publishedAt)}</p>

                {/* Channel Thumbnail */}
                <div className="flex items-center gap-2 my-1 sm:my-2 md:my-3">
                    <img
                        src={channelThumbnail || '/fallback-channel.png'}
                        alt={channelTitle}
                        className="h-5 w-5 sm:h-6 sm:w-6 rounded-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/fallback-channel.png';
                        }}
                    />
                    <p className="text-xs sm:text-sm text-gray-600">{channelTitle}</p>
                </div>

                {/* Description  */}
                <div className="flex flex-col pb-1 px-2 sm:px-0 overflow-hidden break-words w-full max-w-full">
                    <p className="text-xs sm:text-sm text-gray-600 mt-0 sm:mt-1 leading-snug sm:leading-normal">
                        {description.length > 200 ? description.slice(0, 200) + '...' : description}
                    </p>
                </div>

            </div>
        
      </div>
    </Link>
  );
};

export default SearchCard;
