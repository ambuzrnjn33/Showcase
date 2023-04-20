import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const StarComponent = ({ count }) => {
  return (
    <div className="flex space-x-1 text-lg text-yellow-400">
      {[...Array(5).keys()].map((value, index) => {
        const num = index + 1;
        if (count >= num) {
          return <IoIosStar key={index} />;
        } else if (count < num && count > num - 1) {
          return <IoIosStarHalf key={index} />;
        } else {
          return <IoIosStarOutline key={index} />;
        }
      })}
    </div>
  );
};

export default StarComponent;
