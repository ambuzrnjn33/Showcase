import React, { useState, useEffect } from "react";
import VideosCard from "./VideosCard";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import video1 from "../assets/video/videoplayback.mp4";
import { useGlobalContext } from "../context/context";

// export const productsData = [
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 30,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 0,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
//   {
//     discount: 50,
//     videoURL: video1,
//     store: "smiley",
//     distance: 2,
//     rate: 42,
//   },
// ];

const VideosLists = ({ productData }) => {
  // useEffect(() => {
  //   const newProducts = productData.filter( product => product.price <= selectedPrice )
  //    selectedPrice && setFilteredProducts(newProducts)
  // }, [selectedPrice])

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = window.innerWidth <= 768 ? 8 : 6;
  const totalPages = Math.ceil(productData.length / videosPerPage);
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderVideos = () => {
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const currentVideos = productData.slice(startIndex, endIndex);

    return currentVideos.map((video, index) => (
      <VideosCard key={index} width={367} height={480} product={video} />
    ));
  };
  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={` bg-[#5E5F8F] px-2 flex items-center  text-white rounded-full justify-center ${
            currentPage === i ? "active" : ""
          }`}
        >
          <button
            className="text-md font-semibold"
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return (
      <nav>
        <ul className="flex items-center justify-center gap-2">
          <AiOutlineLeft />
          {pages}
          <AiOutlineRight />
        </ul>
      </nav>
    );
  };

  return (
    <div className="videos-list py-3 max-w-[1200px] ">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {renderVideos()}
      </div>
      <div className="flex mt-6 items-center justify-center gap-2">
        {totalPages > 1 && renderPagination()}
      </div>
    </div>
  );
};

export default VideosLists;
