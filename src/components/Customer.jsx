import React from "react";
import userImg from "../assets/user.png";
const Customer = ({ userId, comment, review, user }) => {
  return (
    <div className="flex">
      <img
        className="object-fill w-20 h-20 mr-4 rounded-full shadow"
        // src={userId?.profile ? userId?.profile : userImg}
        src={user}
        alt="name"
      />
      <div className="flex flex-col justify-center">
        <p className="text-sm text-gray-800">{comment}</p>
      </div>
    </div>
  );
};

export default Customer;
