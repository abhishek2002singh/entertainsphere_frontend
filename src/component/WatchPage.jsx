import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import VideoList from './VideoList'
import { YOUTUBE_VIDEO_DETAILS_API, YOUTUBE_CHANNEL_API } from '../utils/Constant';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [error, setError] = useState(null);

  const videoId = searchParams.get('v');

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetch(`${YOUTUBE_VIDEO_DETAILS_API}&id=${videoId}`);
      const data = await res.json();
    //   console.log(data)
      if (!data?.items?.length) {
        setError('Video not found.');
        return;
      }

      const video = data.items[0];
      setVideoDetails(video);

      const channelId = video?.snippet?.channelId;
      const channelRes = await fetch(`${YOUTUBE_CHANNEL_API}&id=${channelId}`);
      const channelData = await channelRes.json();
      //console.log(channelData)

      if (!channelData?.items?.length) {
        setError('Channel data not found.');
        return;
      }

      setChannelDetails(channelData.items[0]);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while fetching data.');
    }
  };

  if (error) return <div className="pt-20 text-center text-red-600">{error}</div>;
  if (!videoDetails || !channelDetails) return <div className="pt-20 text-center">Loading...</div>;

  const { title, channelTitle } = videoDetails?.snippet;
  const channelImage = channelDetails?.snippet?.thumbnails?.default?.url || '/fallback-channel.png';
  const subscriberCount = channelDetails?.statistics?.subscriberCount;

  return (
    <div className="mt-0 sm:mt-5 pt-16 sm:pt-0 px-4 w-full flex justify-center ">
        <div className="w-full  max-w-[1350px] flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    {/* Video */}
                    <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold">{title}</h2>

                    {/* Channel Info */}
                    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                    <div className="flex items-center gap-3">
                        <img
                        src={channelImage}
                        alt={channelTitle}
                        className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                        <p className="font-semibold">{channelTitle}</p>
                        <p className="text-sm text-gray-500">
                            {subscriberCount
                            ? `${Number(subscriberCount).toLocaleString()} subscribers`
                            : 'Subscribers info unavailable'}
                        </p>
                        </div>
                        <button className="ml-4 px-4 py-1 bg-black text-white rounded-full hover:opacity-90">
                        Subscribe
                        </button>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2 mt-4  mx-5 sm:mt-0">
                        <button className="bg-gray-200 rounded-full px-3 py-1">👍 1.2K</button>
                        <button className="bg-gray-200 rounded-full px-3 py-1">👎</button>
                        <button className="bg-gray-200 rounded-full px-3 py-1">🔗 Share</button>
                    </div>
                    </div>

                   {/* Show comments only on screens wider than 1000px */}
                    <div className="hidden min-[1000px]:block">
                    <CommentContainer />
                    </div>

                </div>

                {/* Live Chat */}
                <div className="w-full lg:w-1/3 flex flex-col ">
                    {/* Header */}
                    <div className="flex items-center justify-center  py-2 bg-white border  border-gray-200  rounded-lg mb-1 hover:bg-pink-200 ">
                        <h3 className="font-semibold text-sm text-center p-2 ">Popular Video</h3>
                    </div>

                    {/* Video List or LiveChat */}
                    <VideoList />
                </div>

            </div>
        </div>
    </div>
  );
};

export default WatchPage;
