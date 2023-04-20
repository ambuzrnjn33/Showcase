import React from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import AuthNavbar from "../components/AuthNavbar";
import Success from "../assets/success.gif";
const PaymentSuccess = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#C2D6C3]">
      <AuthNavbar title="Payment" />
      <div className="h-full w-full p-12 ">
        <div className="bg-white h-[90%] w-full  relative ">
          <div className="absolute top-3 left-3 items-center justify-start gap-1">
            <TfiAngleLeft className="text-3xl cursor-pointer" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img
              src={Success}
              alt="success"
              className="h-[500px] -mt-[12%] w-[500px]"
            />
            <div className="mt-5 flex items-center justify-center gap-3 flex-col">
              <h1 className="text-[#00A987] font-semibold text-3xl font-Roboto capitalize">
                Payment Done successfully
              </h1>
              <p className="text-lg text-gray-600">Transaction ID 12463565</p>
              <p className="text-lg">Confirmation is send to your mail id</p>
              <button className="px-4 py-2 rounded-md border-none bg-[#098B45DB] text-white">
                Click here to cntinue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
