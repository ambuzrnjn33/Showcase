import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import video1 from "../assets/video/videoplayback.mp4";
import ServiceCard from "../components/ServiceCard";
import RelatedServices from "../components/RelatedServices";
import { useGlobalContext } from "../context/context";
import axios from "axios";

import Showcase from "../components/Showcase";
// const videos = [
//   { id: 1, title: "https://streamable.com/wbgw0g", url: video1, rating: 1 },
//   { id: 2, title: "Video 2", url: video1, rating: 3 },
//   { id: 3, title: "Video 3", url: video1, rating: 5 },
//   { id: 4, title: "Video 4", url: video1, rating: 1 },
//   { id: 5, title: "Video 5", url: video1, rating: 2 },
//   { id: 6, title: "Video 6", url: video1, rating: 4 },
//   { id: 7, title: "Video 7", url: video1, rating: 4 },
//   { id: 8, title: "Video 8", url: video1, rating: 5 },
//   { id: 9, title: "Video 9", url: video1, rating: 3 },
//   { id: 10, title: "Video 10", url: video1, rating: 2 },
// ];

const Products = () => {
  const { user, token, filteredProducts, productData } = useGlobalContext();
  const id = user?._id;
  // console.log(id)

  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const [lat, setLat] = useState(null);
  const [lang, setLang] = useState(null);
  const [SearchTearm, setSearchTearm] = useState();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setLang(queryParams.get("lang"));
    setLat(queryParams.get("lat"));
    setSearchTearm(queryParams.get("search"));
  }, [location]);

  return (
    <Layout>
      <div className="mt-5">
        {/* Font nav */}
        <div className="flex items-center  px-5 justify-between ">
          <h1 className="text-2xl font-Popins font-bold capitalize ">
            Search result for {SearchTearm ? SearchTearm : "All"}
          </h1>
          <div className="flex items-center justify-center gap-1">
            <p className="text-sm font-semibold">'Odisha' </p>
            <IoLocationOutline />
          </div>
          <div className="flex items-center   justify-center">
            <h2 className="text-sm font-semibold cursor-pointer">See more</h2>
            <AiOutlineRight />{" "}
          </div>
        </div>
        {/* Video slider Showcase */}
        {/* <Slider searchData={searchData} /> */}

        <div className="mt-5  ">
          <h1 className="text-2xl px-5 font-Popins font-bold capitalize ">
            Offers on
          </h1>
          {/* main */}
          <Showcase productData={productData} />
          <div className=" px-5 my-5 border-b-2 border-dashed border-[#5E5F8F] "></div>
          {/*most Services in location */}
          {/* <div className=" px-5  my-5">
            <div className="flex items-center justify-between ">
              <h1 className="text-2xl font-semibold">
                Most Services in {address}
              </h1>
              <div className="flex items-center   justify-center">
                <h2 className="text-sm font-semibold cursor-pointer">
                  See more
                </h2>
                <AiOutlineRight />
              </div>
            </div>

            <div className="my-5 flex flex-wrap gap-3 items-center justify-center">
              {productData.length > 0 ? (
                productData
                  .slice(0, 6)
                  .map((video) => <ServiceCard key={video._id} video={video} />)
              ) : (
                <h1>No product found</h1>
              )}
            </div>
          </div> */}
          <div className=" my-9 border-b-2  border-dashed border-[#5E5F8F] "></div>
          <RelatedServices />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
