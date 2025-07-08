import { useEffect, useState } from "react";
import axios from "axios";
import { GOOGLE_API_KEY } from "../utils/Constant";

const useVideoData = (videoId) => {
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoId) fetchVideoData(videoId);
  }, [videoId]);
const fetchVideoData = async (id) => {
  setLoading(true);
  try {
    const [videoRes, commentsRes] = await Promise.all([
      axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet",
          id,
          key: GOOGLE_API_KEY,
        },
      }),
      axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
        params: {
          part: "snippet",
          videoId: id,
          maxResults: 36,
          textFormat: "plainText",
          key: GOOGLE_API_KEY,
        },
      }),
    ]);

   // console.log("💬 Comment Response:", commentsRes.data); // <-- Add this

    const video = videoRes.data.items?.[0];
    setDescription(video?.snippet?.description || "");
    console.log(video?.snippet?.description)
    const formattedComments = commentsRes.data.items?.map((item) => {
      const top = item.snippet.topLevelComment.snippet;
      return {
        id: item.id,
        author: top.authorDisplayName,
        profileImg: top.authorProfileImageUrl,
        text: top.textDisplay,
        likeCount: top.likeCount,
        dislikeCount: top.dislikeCount||0,
        publishedAt: top.publishedAt,
        

        liked: false,
        disliked: false,
      };
    }) || [];

    setComments(formattedComments);
  } catch (error) {
    console.error("Error fetching video data", error);
  } finally {
    setLoading(false);
  }
};


  return { description, comments, setComments, loading };
};

export default useVideoData;
