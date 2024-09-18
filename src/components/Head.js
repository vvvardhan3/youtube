import { useDispatch } from "react-redux";
import {
  HAMBURGERICON,
  USERICON,
  YOUTUBELOGO,
  YOUTUBESEARCHSUGGESTIONSAPI,
} from "../utils/contacts";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchSuggestions(), 200); //Debouncing

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBESEARCHSUGGESTIONSAPI + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const handletoggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex p-4 m-1 justify-between ">
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
        <div>
          <input
            className="w-[450px] px-4 border-2 py-1.5 rounded-l-full "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-2 py-1.5 border-2 rounded-r-full bg-gray-300 hover:bg-opacity-80">
            Search
          </button>
          {showSuggestions && (
            <div className="fixed pt-2 bg-white w-[28rem] pl-4 shadow-lg rounded-lg">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="py-1 hover:bg-gray-100 hover:rounded-lg"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className=" flex cursor-pointer">
        <img className="h-7" alt="UserIcon" src={USERICON} />
        <span className="pl-2">Sign Out</span>
      </div>
    </div>
  );
};

export default Head;
