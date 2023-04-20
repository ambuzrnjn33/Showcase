import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/showcase-removebg-preview.png";

const LoginNavbar = () => {
  return (
    <>
      <div className="px-4 md:px-8 bg-[#D9D9D9]">
        <div className="flex items-center">
          <img className="h-12 md:h-16" src={logo} alt="showcase-logo" />
          <h3 className="flex-1 md:text-xl font-bold text-[#8F9492] text-center">
            Login
          </h3>
        </div>
      </div>
      <div className="bg-[#C2D6C3] md:min-h-[calc(100vh_-_64px)]">
        <div className="md:flex justify-center">
          <div className="md:w-[70%] xl:w-1/2 md:py-7 lg:p-5 xl:p-10 bg-white mt-10 rounded-md">
            <div>
              <h1 className="text-xl font-bold mb-7 text-center text-[#828282]">
              </h1>
            </div>
            <Login />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;