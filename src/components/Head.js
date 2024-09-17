import { useDispatch } from "react-redux";
import { HAMBURGERICON, USERICON, YOUTUBELOGO } from "../utils/contacts";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handletoggleMenu = () => {
    dispatch(toggleMenu());
  }
  

  return (
    <div className="w-screen flex p-4 m-1 shadow-lg justify-between ">
      <div className="flex  cursor-pointer gap-3 ">
        <img
          onClick={() => handletoggleMenu()}
          className="h-7"
          alt="humburgerIcon"
          src={HAMBURGERICON}
        />
        <a href="/">
        <img className="h-7" alt="youtubeLogo" src={YOUTUBELOGO} />
        </a>
      </div>
      <div className="cursor-pointer ">
        <input
          className="w-[450px] px-2 border-2 py-1.5 rounded-l-full "
          type="text"
          placeholder="Search"
        />
        <button className="px-2 py-1.5 border-2 rounded-r-full bg-gray-300 hover:bg-opacity-80">Search</button>
      </div>
      <div className=" flex cursor-pointer"> 
        <img className="h-7" alt="UserIcon" src={USERICON}/>
        <span className="pl-2">Sign Out</span>
      </div>
    </div>
  );
};

export default Head;
