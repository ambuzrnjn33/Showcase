import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import { useGlobalContext } from "../context/context";
const VerifyOtpVendor = () => {
  const navigate = useNavigate();
  const { loading, verifyOtpVendor, user } = useGlobalContext();
  const [otp, setOtp] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { vendorId: user?._id, otp };
    verifyOtpVendor(formData, navigate);
  };

  return (
    <div className=" relative bg-[#C2D6C3] h-screen overflow-hidden">
      <AuthNavbar title="Verify" />

      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden   py-12">
        <div class="relative bg-gray-50 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-3xl">
                <p>Verify OTP</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>
            <div>
              <form action="" method="post" onSubmit={handleSubmit}>
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div class="w-full h-12 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <button
                        type="submit"
                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-yellow-400 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        class="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerifyOtpVendor;
