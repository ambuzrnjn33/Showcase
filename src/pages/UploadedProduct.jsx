import React from "react";
import AuthNavbar from "../components/AuthNavbar";
import { BsSearch } from "react-icons/bs";
import video from "../assets/video/productVideo.mp4";
const UploadedProduct = () => {
  return (
    <div className="h-screen">
      <AuthNavbar title="Products" />
      <div className="px-10 mt-10 pb-20">
        <div className="relative">
          <input
            className="w-full py-1 border-2 border-slate-950 pl-5 rounded-md"
            type="text"
            placeholder="Search"
          />
          <BsSearch className="absolute top-2 right-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">
          {[...Array(15)].map((_, index) => (
            <div key={index}>
              <div className="relative">
                <video
                  src={video}
                  height={"100%"}
                  width={"100%"}
                  controls={true}
                  muted={true}
                ></video>
                <span className="bg-[#4C6181] text-white text-sm px-2 py-1 absolute top-0 left-0">
                  - 40%
                </span>
              </div>
              <button className="w-full py-2.5 bg-[#FCC646] text-white uppercase font-medium">
                Purchased Details
              </button>
              <button className="w-full py-2.5 bg-[#5E5F8F] text-white uppercase font-medium">
                Edit
              </button>
              <div className="flex items-center justify-between mt-4">
                <p className="font-bold">
                  Store: <span className="font-normal">Smiley</span>
                </p>
                <p>2km</p>
              </div>
              <p className="font-bold">
                Offer: <span className="text-[#FCC646] font-semibold">30%</span>
              </p>
              <p className="font-bold">
                Rate: <span className="font-semibold">$42</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadedProduct;
