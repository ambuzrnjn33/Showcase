import React from "react";
import SliderCard from "./SliderCard";
import VideoSlider from "./VideoSlider";

const OwnSlider = ({ searchData }) => {
  return (
    <div className="w-[98vw] px-5 overflow-hidden">
      <VideoSlider>
        {searchData.map(video => <SliderCard video={video} />)}
      </VideoSlider>
    </div>
  );
};

export default OwnSlider;
