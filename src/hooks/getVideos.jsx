
import React, { useEffect, useState } from 'react';
import { VIDEO_API } from "../utils/Constant";

const useGetVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(VIDEO_API);
      const json = await data.json();
    //  console.log(json);
      setVideos(json.items);
    } catch (error) {
      console.log("Error fetching video", error);
    }
  };

  return videos;
};

export default useGetVideos;


