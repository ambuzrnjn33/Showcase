import React, { useState } from "react";
import { RiUser3Fill, RiLockPasswordLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const ClientSignup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [phone, setPhone] = useState(null);
  const { registerClient, loading } = useGlobalContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerClient(formData, navigate);
    setFormData(initialState);
  };

  return (
    <div className="mx-auto mt-5 p-5 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
        <div className="flex items-center ">
          <RiUser3Fill className="w-20 text-3xl text-[#828282]" />
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </div>
        <div className="flex items-center ">
          <GrMail className="w-20 text-3xl text-[#828282]" />
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={formData.email}
          />
        </div>
        <div className="flex items-center ">
          <IoMdCall className="w-20 text-3xl text-[#828282]" />
          <div className="w-full">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) =>
                setFormData({ ...formData, phone: "+" + phone + "" })
              }
              inputStyle={{
                width: "60%",
                height: "40px",
                backgroundColor: "#D8F1EF",
                border: "none",
                marginLeft: "60px",
                paddingLeft: "15px",
              }}
              buttonStyle={{
                border: "none",
                backgroundColor: "#D8F1EF",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
        <div className="flex items-center ">
          <RiLockPasswordLine className="w-20 text-3xl text-[#828282]" />
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center ">
          <RiLockPasswordLine className="w-20 text-3xl text-[#828282]" />
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-1 bg-[#FFC040] text-white font-semibold uppercase rounded-md"
          >
            {loading ? "Loading..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientSignup;
