import { useContext } from "react";
import { categories } from "../constants/index";
import { VideoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="sidebar flex  gap-[2px] flex-col p-1 md:p-4">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            className={`${
              selectedCategory.name === item.name && "bg-[#2b2a2a]"
            } flex items-center gap-2 py-2 pr-3  pl-2 md:px-3 text-base md:text-lg cursor-pointer  rounded-md hover:bg-[#2d2d2d]`}
          >
            <span className="max-sm:text-2xl ">{item.icon}</span>
            <span className="max-sm:hidden text-[16px] text-nowrap">
              {" "}
              {item.name}{" "}
            </span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
