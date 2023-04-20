import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const data = [
  "This is a basic plan for consumer development",
  "This is a basic plan for consumer development",
  "This is a basic plan for consumer development",
  "This is a basic plan for consumer development",
];

const PlanCard = ({ title, bg, price, subTitle,handler }) => {
  return (
    <div
      className={`shadow-lg rounded-lg row-span-2 pb-9  text-center bg-[${bg}] ${
        title === "standard" && `text-white`
      } `}
    >
      <div className="p-5">
        <p
          className={` font-bold  text-3xl text-center p-2 capitalize ${
            title === "basic"
              ? "text-[#FFC93C]"
              : title === "bussiness"
              ? "text-[#FF4040]"
              : "text-white"
          }
         `}
        >
          {title}
        </p>
        <p className="font-bold text-2xl">${price}</p>
        <p className="font-semibold text-lg">{subTitle}</p>
        <div className="flex flex-col gap-3 mt-6 ">
          {data.map((item) => (
            <p className="flex">
              <IoMdCheckmarkCircle className="m-1.5" />
              {item}
            </p>
          ))}
        </div>
      </div>
      <button
        //type="submit"
        onClick={()=>handler()}
       
        className="px-10 py-1 bg-[#08984A] shadow-md border-[1px] border-white shadow-gray-600 text-white font-semibold uppercase rounded-md"
      >
        Select
      </button>
    </div>
  );
};

export default PlanCard;
