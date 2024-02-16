import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { millify } from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import CommentArea from "../components/CommentArea";

const VideoDetail = () => {
  const [video, setVideo] = useState();
  //1) arama parametresine erişim için kurulum
  const [searchParams] = useSearchParams();

  const [comments, setComments] = useState("");

  //2) url den v isimli arama parametresini al

  const id = searchParams.get("v");

  //3) ide ye göre api ye istek atacağız

  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));

    getData(`/comments?id=${id}`).then((res) => setComments(res));
  }, [searchParams]);

  return (
    <div className="detail-page mx-auto max-w-[1350px] h-screen overflow-auto p-5">
      {/*  video içeriği */}
      <div className="max-w-[1400px] mb-5">
        <ReactPlayer
          className={" rounded-sm"}
          width={"100%"}
          height={"50vh"}
          light
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          "..."
        ) : (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* kanal bilgileri */}
            <div className=" flex  items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>

                <button className="bg-white rounded-full px-3 text-black h-9 transition hover:bg-gray-400 text-nowrap">
                  Abone Ol
                </button>
              </div>
              <div className="flex items-center cursor-pointer bg-[#272727] p-1    rounded-full">
                <div className="flex items-center gap-4 py-2 px-4 border-r">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            <div className="bg-[#272727]  rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>

              <StringArea text={video.description} />
            </div>
          </>
        )}

        {!comments?.data ? (
          " "
        ) : (
          <div className="p-4">
            <div>
              {comments.data[0]?.textDisplay ? (
                <p className="text-2xl"> {comments?.commentsCount} Yorum</p>
              ) : (
                ""
              )}
            </div>

            <div>
              {comments?.data?.map((com) => (
                <CommentArea key={com.commentId} com={com} />
              ))}
            </div>
          </div>
        )}
      </div>
      {/*  alakalı içerik */}

      <div className="flex flex-col gap-5 p-3 pt-0">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && (
                <VideoCard isRow={true} video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
