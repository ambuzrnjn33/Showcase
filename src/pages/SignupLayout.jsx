import React from "react";
import { Outlet } from "react-router-dom";
import SignupNavbar from "./SignupNavbar";
import logo from "../assets/showcase-removebg-preview.png";
import AuthNavbar from "../components/AuthNavbar";

const SignupLayout = () => {
  return (
    <>
      <AuthNavbar title="Create Account" />
      <div className="bg-[#C2D6C3] md:min-h-[calc(100vh_-_64px)]">
        <div className="md:flex justify-center">
          <div className="md:w-[70%] xl:w-1/2 md:py-7 lg:p-5 xl:p-10 bg-white mt-10 rounded-md">
            <div>
              <h1 className="text-xl font-bold mb-7 text-center text-[#828282]">
                Create An Account
              </h1>
            </div>
            <SignupNavbar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupLayout;
