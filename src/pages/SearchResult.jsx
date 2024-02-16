import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useContext, useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import { VideoContext } from "../context/videoContext";

const SearchResult = () => {
  const [results, setResults] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const { sort, setSort } = useContext(VideoContext);

  const sorts = ["hour", "today", "week", "month", "year"];

  useEffect(() => {
    getData(
      `/search?query=${query}&type=video${sort && `&upload_date=${sort}`}`
    ).then((res) => setResults(res));
  }, [sort, query]);
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex  flex-1 flex-col px-4  overflow-auto">
        <div className="flex  mb-3 max-md:block justify-between">
          <p className="flex max-md:mb-2 gap-2 text-lg ">
            <span className="font-bold">{query}</span>
            <span> için sonuçlar</span>
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xl ">Sort: </span>
            {sorts.map((sort) => (
              <p
                key={sort}
                onClick={() => setSort(sort)}
                className="py-1 px-3 cursor-pointer rounded-md bg-[#272727] capitalize hover:bg-gray-700"
              >
                {sort}
              </p>
            ))}
          </div>
        </div>

        <div className="grid place-items-center  gap-5">
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard
                    isRowSearch={true}
                    key={item.videoId}
                    video={item}
                  />
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
