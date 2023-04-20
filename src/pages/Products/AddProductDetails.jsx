import React, { useState } from "react";
import { RiUser3Fill, RiLockPasswordLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useGlobalContext } from "../../context/context";
import { useNavigate } from "react-router-dom";


const AddProductDetails = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [phone, setPhone] = useState(null);
  const { loading } = useGlobalContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // registerClient(formData, navigate);
    setFormData(initialState);
    console.log(formData);
  };

    return(
        <div>
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
  <div className="mx-auto mt-5 p-5 rounded-md">
      <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
        <div className="items-center ">
        <label>DATE</label>
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="date"
            onChange={handleChange}
            name="date"
            value={formData.date}
            required
          />
        </div>
        <div className="items-center ">
        <label>NAME</label>
          <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Name"
            value={formData.name}
            required
          />
        </div>
        <div className="items-center ">
        <label>PHONE NUMBER</label>
          <div className="w-full">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              required
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
        <div className="items-center ">
        <label>MAIL ID</label>
        <input
            className="py-2 pl-3 bg-[#D8F1EF] border w-full rounded-md focus:outline-none"
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={formData.email}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-1 bg-[#FFC040] text-white font-semibold uppercase rounded-md"
          >
            {loading ? "Loading..." : "Upload"}
          </button>
        </div>
      </form>
    </div>
  </label>
</label>
</div>
    )

}

export default AddProductDetails;
