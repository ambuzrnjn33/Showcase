import React from "react";
import logo from "../assets/showcase.png";
import { Link } from "react-router-dom";
const AuthNavbar = ({ title }) => {
  return (
    <div className="px-4  bg-[#D9D9D9C7]">
      <div className="flex items-center justify-between ">
        <Link to="/">
          <img src={logo} className="w-[150px]" alt="logo" />
        </Link>

        <h1 className="text-2xl font-semibold font-Popins">{title}</h1>
        <h1 className=""></h1>
      </div>
    </div>
  );
};

export default AuthNavbar;
