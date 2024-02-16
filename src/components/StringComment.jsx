import { useState } from "react";

const StringComment = ({ text }) => {
  let shortText = text;
  const [openCom, setOpenCom] = useState(false);

  if (!openCom && text.length > 300) {
    shortText = text.slice(0, 300) + "...daha fazla";
  }

  return (
    <div
      onClick={() => {
        setOpenCom(!openCom);
      }}
    >
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default StringComment;
