import React from 'react'
import { Link } from 'react-router-dom';
import useGetVideos from '../hooks/getVideos'
import VideoCardDetails from './VideoCardDetails';
const VideoList = () => {
    const videos=useGetVideos();
   // console.log(videos)
    return (
        <div className='flex flex-col gap-4 w-full justify-start'>
            
            {videos.map((video)=>(
               <Link to={`/app/watch?v=${video.id}`} key={video.id}>
                    <VideoCardDetails info={video} />
               </Link>
            ))}
        </div>
    )
}

export default VideoList;