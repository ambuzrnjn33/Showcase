import React, { useState } from "react";
import logo from "../assets/showcase.png";
import loginImage from "../assets/login.png";
import NumberInput from "../components/NumberInput";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import { useGlobalContext } from "../context/context";
import { useEffect } from "react";
const Login = () => {
  const initialState = {
    email: "",
    phone: "",
    password: "",
  };
  const { loginEmail, token, loginPhone } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [loginWPhone, setLoginWPhone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginWPhone) {
      loginPhone(formData, userType, navigate);
    } else {
      loginEmail(formData, userType, navigate);
    }
  };
  console.log(token);
  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  }, []);
  return (
    <div className=" relative bg-[#C2D6C3] h-screen overflow-hidden">
      {/* NAVBAR  */}
      <AuthNavbar title="Login" />

      <div className="h-full flex items-center justify-center">
        <div className="w-[700px] flex flex-row h-[500px] shadow-lg">
          <div className="basis-1/2 bg-[#B0CDFF] h-full">
            <img
              src={loginImage}
              alt="login"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="basis-1/2 h-full bg-white ">
            <div className="px-4 py-9">
              <h1 className="text-xl text-[#828282] font-Popins font-semibold text-center">
                Login with {loginWPhone ? "Phone" : "Email"}
              </h1>
              <form
                action=""
                className=" mt-8 flex-col gap-4 flex items-center  justify-center"
                onSubmit={handleSubmit}
              >
                {loginWPhone ? (
                  <NumberInput setFormData={setFormData} formData={formData} />
                ) : (
                  <>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="bg-[#B0E2DF80] px-3 rounded-md text-lg py-2 w-full outline-none"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Password"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      value={formData.password}
                      className="bg-[#B0E2DF80] px-3 rounded-md text-lg py-2 w-full outline-none"
                    />
                  </>
                )}
                <select
                  className="select select-bordered select-sm"
                  required
                  name="userType"
                  onChange={(e) => setUserType(e.target.value)}
                  value={userType}
                >
                  <option value="">User Type</option>
                  <option value="client">Normal User</option>
                  <option value="vendor">Vendor User</option>
                </select>
                <p className="text-md font-normal text-right  ">
                  {loginWPhone ? "Email & Password ?" : "Login With phone ?"}
                  <span
                    onClick={() => setLoginWPhone((prev) => !prev)}
                    className="font-semibold text-sky-600 cursor-pointer"
                  >
                    Click
                  </span>{" "}
                </p>
                <button
                  type="submit"
                  className="px-9 py-3   text-white font-bold font-Popins rounded-md  bg-[#FFC040]"
                >
                  {loginWPhone ? "Get Otp" : "Login"}
                </button>
              </form>
              <div className="my-5 gap-5 flex items-center justify-center ">
                <div className="h-[2px] w-[100px] bg-gray-400" />
                <h2 className="text-md font-semibold">OR</h2>
                <div className="h-[2px] w-[100px] bg-gray-400" />
              </div>
              <h1 className="text-md text-gray-600 text-center">
                <span
                  onClick={() => navigate("/signup")}
                  className="text-yellow-500 text-lg underline cursor-pointer uppercase"
                >
                  CLICK HERE
                </span>{" "}
                to create new account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
