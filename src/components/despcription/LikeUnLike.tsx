import React from "react";
import image from "../../constants/Images";
interface Video {
  video: any;
}
const LikeUnLike: React.FC<Video> = ({ video }) => {
  return (

    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={image.like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{video.likes}</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={image.unlike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">{video.unlikes}</div>
      </div>
    </div>
  );
};

export default LikeUnLike;
