import { HAMBURGERICON, YOUTUBELOGO } from "../utils/contacts";

const Head = () => {
  return (
    <div>
      <div className="flex m-5 cursor-pointer">
      <img
        className="w-[1%] border-1 p-[2px] rounded-sm hover:bg-gray-200 hover:bg-opacity-90"
        alt="humburgerIcon"
        src={HAMBURGERICON}
      />
      <img
        className="w-[7%] pl-6 border-1 rounded-sm"
        alt="youtubeLogo"
        src={YOUTUBELOGO}
      />
    </div>
    </div>
    
  );
};

export default Head;
