import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const VideoCard = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <button className="slider-arrow prev-arrow">&#60;</button>,
    nextArrow: <button className="slider-arrow next-arrow">&#62;</button>,
  };
  return (
    <div>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default VideoCard;
