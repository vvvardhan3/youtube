const VideoCards = ({ info }) => {
    if (info === undefined) {
        return 
    }
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  const {viewCount} = statistics;


  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold pt-1">{title}</li>
        <li className="text-gray-600 text-sm pt-1">{channelTitle}</li>
        <li className="text-gray-600 text-sm">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
