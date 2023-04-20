import React from "react";
import video1 from "../assets/video/videoplayback.mp4";
const SliderCard = ({ video }) => {
  // console.log(video)
  return (
    <div className="">
      <div className="w-[445px] h-[253px]">
        <video className="w-full h-full" controls src={video.video} />
      </div>
      <div className="flex flex-col  mt-2">
        <div className="flex items-center gap-3 justify-start ">
          <h1 className="text-md font-semibold">
            Store : <span className="font-normal text-gray-400">{video.storeId.storeName}</span>{" "}
          </h1>
          <h1 className="text-md  font-normal text-gray-400">{Math.round(video.distance / 1000)} KM </h1>
        </div>
        <h1 className="text-md font-semibold">
          Offer : <span className="font-normal text-yellow-500">{video.discount}%</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default SliderCard;
