import { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/videoContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos } = useContext(VideoContext);

  return (
    <div className="flex  ">
      <SideBar />

      <div className="videos">
        {!videos ? (
          <Loader />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
