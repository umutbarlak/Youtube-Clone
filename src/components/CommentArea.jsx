import StringComment from "../components/StringComment";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const CommentArea = ({ com }) => {
  console.log(com);
  return (
    com.commentId && (
      <div className="comment gap-5 p-4">
        <div className=" ">
          <img
            width={"50px"}
            height={"50px"}
            className=" rounded-full img-fluid"
            src={com?.authorThumbnail[com.authorThumbnail.length - 1].url}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <span>{com.authorText}</span>
            <span className=" text-light">{com.publishedTimeText}</span>
          </div>

          <StringComment text={com.textDisplay} />

          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <button className="flex gap-1 hover:bg-gray-600 rounded-full p-2">
                <AiOutlineLike />
              </button>
              {com.likesCount}
            </div>
            <button className=" hover:bg-gray-600 rounded-full p-2">
              <AiOutlineDislike />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CommentArea;
