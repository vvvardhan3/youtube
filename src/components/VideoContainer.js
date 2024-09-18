import { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBEAPI } from "../utils/contacts";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBEAPI);
    const json = await data.json();
    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
