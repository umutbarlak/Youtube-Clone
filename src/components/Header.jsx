import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";

const Header = () => {
  const { setSort } = useContext(VideoContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    setSort("");

    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className=" flex justify-between items-center gap-3 p-4 ">
      <Link className="flex gap-[10px] items-center" to={"/"}>
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border  border-gray-500 overflow-hidden   rounded-[20px] "
      >
        <input className="bg-black   px-3 py-1 outline-none " type=" search" />
        <button className="border-l text-xl px-2">
          <IoMdSearch />
        </button>
      </form>

      <div className=" flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition" />
        <IoVideocam className="hover:text-gray-400 transition duration-500" />
      </div>
    </div>
  );
};

export default Header;
