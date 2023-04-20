import React from "react";
import heroImg1 from "../assets/heroImg/Ellipse 622 (1).png";
import heroImg12 from "../assets/heroImg/Ellipse 622.png";
import img1 from "../assets/heroImg/Capture.png";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const images = [
    {
      img: heroImg1,
    },
    {
      img: heroImg12,
    },
  ];
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="hero-content columns-2 justify-between flex-col lg:flex-row items-center max-w-[2100px]">
      <div className="w-full">
        <div className="pl-5 md:pl-14">
          <h1 className="text-[27px] md:text-[34px] lg:text-[44px] xl:text-[53px] 2xl:text-[64px] text-[#112D57] font-bold">
            Let’s Showcase
          </h1>
          <p className="py-6 text-[#5C5C5C] lg:text-[23px] xl:[26px] 2xl:text-[30px] leading-[34px] md:leading-[48px] lg:pr-40 xl:pr-40 sm:pr-0">
            Bringing your product online is now easy and brezzy.You have
            something to sell , show is online.
          </p>
        </div>
        <div className="pl:5 md:pl-14 flex justify-center lg:justify-start gap-9">
          <button
            onClick={() => navigate(`/products`)}
            className="btn btn-primary bg-[#FFC040]  rounded-full border-0 outline-none text-white p-3 sm:px-7"
          >
            Shop more
          </button>
          <button className="btn border-[#FFC040] rounded-full bg-white text-[#FFC040] hover:bg-white hover:border-[#FFC040] p-3 sm:px-7">
            Read more
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={img1} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
