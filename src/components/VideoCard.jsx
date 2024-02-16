import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow, isRowSearch }) => {
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className={` ${isRow ? "row " : ""}  ${
        isRowSearch ? "search-row" : ""
      } cursor-pointer items-start`}
    >
      <div>
        <img
          className="mb-1 rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>

      <div className="flex gap-4 ">
        <img
          className="my-2 rounded-full w-14 h-14 "
          src={video.channelThumbnail[0].url}
          alt="channel picture"
        />

        <div>
          <h4 className=" font-bold line-clamp-2"> {video.title} </h4>
          <p className="my-[1px]">{video.channelTitle}</p>
          <div className="flex gap-2">
            <p className="text-sm text-nowrap">
              {millify(video.viewCount)} <span className="  ">Görüntüleme</span>
            </p>
            <p className="text-sm text-nowrap">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
