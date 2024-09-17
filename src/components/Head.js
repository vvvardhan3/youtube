import { HAMBURGERICON, USERICON, YOUTUBELOGO } from "../utils/contacts";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-1 ">
      <div className="flex col-span-2 ">
        <img
          className="h-7"
          alt="humburgerIcon"
          src={HAMBURGERICON}
        />
        <img className="h-7 pl-3" alt="youtubeLogo" src={YOUTUBELOGO} />
      </div>
      <div className="col-span-8 ">
        <input
          className=" "
          type="text"
          placeholder="Search"
        />
        <button>Search</button>
      </div>
      <div className="col-span-2"> 
        <img className="h-7" alt="UserIcon" src={USERICON}/>
      </div>
    </div>
  );
};

export default Head;
