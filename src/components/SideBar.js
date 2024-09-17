import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="px-1 text-gray-600 cursor-pointer text-sm shadow-lg ">
      <ul className="border-b-2 p-4">
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Home</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Shorts</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Subscriptions</li>
      </ul>

      <ul className="border-b-2 p-4">
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">You</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">History</li>
      </ul>

      <ul className="border-b-2 p-4">
        <div>
          <h1 className="font-bold text-black text-xl">Explore</h1>
        </div>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Trending</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Shoping</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Music</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Movies</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Live</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Gaming</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">News</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Sports</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Courses</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">
          Fashion & Beauty
        </li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Podcasts</li>
      </ul>

      <ul className="border-b-2 p-4">
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Setting</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Report History</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Help</li>
        <li className="p-1 m-1 hover:bg-gray-200 rounded-lg">Send feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
