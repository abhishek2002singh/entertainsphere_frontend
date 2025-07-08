import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_CHANNEL_API,
  YOUTUBE_VIDEO_DETAILS_API,
} from '../utils/Constant';
import {formatViews,formatDuration} from "../utils/helper.js";
import SearchCard from '../component/SearchCard';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const data = useLocation().search;
  const originalData = data.split("=")[1].split("%20").join(" ")

  

  //console.log("my data is" , originalData)

  if (!query===originalData) {
    
    setVideos([])
  }

  const [videos, setVideos] = useState([]);
  const [channelThumbnails, setChannelThumbnails] = useState({});
  const [videoViewCounts, setVideoViewCounts] = useState({});
  const [videoDurations, setVideoDurations] = useState({});
  

  useEffect(() => {
    getSearchResults();
  }, [query]);

  const getSearchResults = async () => {
    try {
      const res = await fetch(`${YOUTUBE_SEARCH_RESULTS_API}&q=${query}`);
      const data = await res.json();
      console.log(data)
      if (!data.items || !Array.isArray(data.items)) {
        console.error("API Error:", data.error?.message || "Unknown error");
        setVideos([]);
        return;
      }

      // Filter out only video results
      const onlyVideoItems = data.items.filter(item => item.id.videoId);
      setVideos(onlyVideoItems);

      const videoIds = onlyVideoItems.map((item) => item.id.videoId).join(',');
      //console.log("my video id is ",videoIds);
      const channelIds = [...new Set(onlyVideoItems.map(item => item.snippet.channelId))].join(',');

      // Fetch video stats (view count & duration)
      if (videoIds.length > 0) {
        const videoRes = await fetch(`${YOUTUBE_VIDEO_DETAILS_API}&id=${videoIds}`);

        const videoData = await videoRes.json();
        console.log(videoData.items)
        const viewsMap = {};
        const durationMap = {};
        videoData.items.forEach(video => {
          viewsMap[video.id] = formatViews(video.statistics.viewCount);
          durationMap[video.id] = formatDuration(video.contentDetails.duration);
        });
        setVideoViewCounts(viewsMap);
        setVideoDurations(durationMap);
      }

      // Fetch channel thumbnails
      if (channelIds.length > 0) {
        const channelRes = await fetch(`${YOUTUBE_CHANNEL_API}&id=${channelIds}`);
        const channelData = await channelRes.json();

        const thumbnailsMap = {};
        channelData.items.forEach(channel => {
          thumbnailsMap[channel.id] = channel.snippet.thumbnails.default.url;
        });
        setChannelThumbnails(thumbnailsMap);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="mt-4 px-4 sm:px-6 lg:px-12">
      <h2 className="ml-24 text-xl sm:text-2xl font-semibold mb-6">
        Search Results for <span className="text-blue-600">"{query}"</span>
      </h2>

      <div className="flex flex-col gap-6">
        {videos.map((video) => {
          const videoId = video.id.videoId;
          return (
            <SearchCard
              key={videoId}
              video={video}
              channelThumbnail={channelThumbnails[video.snippet.channelId]}
              viewCount={videoViewCounts[videoId]}
              duration={videoDurations[videoId]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;
