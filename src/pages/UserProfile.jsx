import React from "react";
import { IoEllipseSharp } from "react-icons/io5";
import logo from "../assets/showcase-removebg-preview.png";
import userImg from "../assets/user.png";
import { MdEdit } from "react-icons/md";

const UserProfile = () => {
  return (
    <div className="bg-user-profile bg-no-repeat bg-cover min-h-screen relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:-z-10">
      <div className="min=h-screen px-4 md:px-8 bg-[#D9D9D9]/90 z-[99999]">
        <div className="flex items-center justify-between">
          <img className="h-12 md:h-16" src={logo} alt="showcase-logo" />
          <h3 className="flex-1 hidden sm:block md:text-xl font-bold text-[#8F9492] text-center">
            Profile
          </h3>
          <div className="flex items-center space-x-3 md:space-x-5 font-semibold">
            <img
              className="h-10 w-10 rounded-full"
              src={userImg}
              alt="user-img"
            />
            <h1>User Name</h1>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] mx-auto md:mt-10 rounded-md bg-[#FFF9ED] h-full">
        <div>
          <h2 className="mb-2 text-xl text-slate-900 font-bold p-10 flex items-center justify-center">
            User Profile <MdEdit className="ml-3" />
          </h2>
        </div>
        <ul className="mb-8 space-y-6 text-left pl-8 md:pl-20">
          <li className="flex items-center space-x-3 font-semibold cursor-pointer">
            <IoEllipseSharp className="text-yellow-400" />
            <h3 className="text-[#333333]">My Profile</h3>
          </li>
          <li className="flex items-center space-x-3 font-semibold cursor-pointer">
            <IoEllipseSharp className="text-yellow-400" />
            <h3 className="text-[#333333]">Saved Videos</h3>
          </li>
          <li className="flex items-center space-x-3 font-semibold cursor-pointer">
            <IoEllipseSharp className="text-yellow-400" />
            <h3 className="text-[#333333]">Feedback and shops ratings</h3>
          </li>
          <li className="flex items-center space-x-3 font-semibold cursor-pointer">
            <IoEllipseSharp className="text-yellow-400" />
            <h3 className="text-[#333333]">Purchased product list</h3>
          </li>
          <li className="flex items-center space-x-3 font-semibold cursor-pointer">
            <IoEllipseSharp className="text-yellow-400" />
            <h3 className="text-[#333333]">Invite friends</h3>
          </li>
        </ul>
        <div className="text-center pb-10">
          <button className="px-8 py-1 bg-[#FFC040] text-white font-semibold rounded-md my-4">
            Showcase
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
