import React from "react";
import fashionImg from "../assets/fashion.png";
import { FiChevronRight } from "react-icons/fi";

const Trusted = () => {
  return (
    <section className="py-6 mb-20 border-t-4 border-b-4 border-dashed border-[#31326F]">
      <div className="container p-4 mx-auto space-y-10 sm:p-10">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block"></h1>
          <h1 className="md:text-4xl text-xl text-center font-bold font-[poppins] ">
            Trusted Vendors
          </h1>
          <div className="flex items-center space-x-2">
            <button className="font-semibold text-[#31326F]">See more</button>
            <FiChevronRight />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <div className="relative">
                <img className="w-full" src={fashionImg} alt="vendor_img" />
                <h1 className="w-full text-2xl absolute left-0 bottom-0 bg-black/[.57] text-white py-2 rounded-b-md text-center font-semibold">
                  Fashion Mafia
                </h1>
              </div>
              <h3 className="text-black text-xl font-medium text-center">
                117 people like this
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
