import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const VendorSignup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    description: "",
    storeName: "",
  };
  const { registerVendor, loading } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    registerVendor(formData, navigate);
  };

  return (
    <div className="mt-5 p-5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full relative">
            <input
              className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
              placeholder="Enter Name"
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
              required
            />
            <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
          </div>
          <input
            className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full relative">
            <input
              className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
          </div>
          <div className="w-full relative">
            <input
              className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
              placeholder="Address / Location"
              type="text"
              name="address"
              onChange={handleChange}
              value={formData.address}
              required
            />
            <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="w-full pl-3 bg-[#D8F1EF] rounded-md relative">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) =>
                setFormData({ ...formData, phone: "+" + phone })
              }
              inputStyle={{
                width: "100%",
                height: "40px",
                backgroundColor: "#D8F1EF",
                border: "none",
              }}
              buttonStyle={{
                border: "none",
                backgroundColor: "#D8F1EF",
              }}
            />
            <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
          </div>
          <div className="w-full relative">
            <input
              className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
              placeholder="Store Name"
              type="text"
              name="storeName"
              onChange={handleChange}
              value={formData.storeName}
              required
            />
            <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
          </div>
        </div>
        <div className="w-full relative">
          <input
            className="w-full py-1.5 pl-3 bg-[#D8F1EF] placeholder:text-[#828282] border rounded-md focus:outline-none"
            placeholder="Description"
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
          />
          <MdOutlineStarPurple500 className="absolute text-xs text-red-500 top-1 right-1" />
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

export default VendorSignup;
