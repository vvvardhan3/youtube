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
    console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
