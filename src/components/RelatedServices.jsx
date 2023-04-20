import React from "react";
import bike from "../assets/bike.png";
import redHc from "../assets/redHc.png";
import yellowHc from "../assets/yellowHc.png";
import idea from "../assets/idea.png";
import instru from "../assets/instru.png";

const services = [
  {
    img: bike,
    text: "Cheap deals on bike serive slect the best service insure yout bike",
    id: 1,
  },
  {
    img: instru,
    text: "Choose the best accesories handle with care",
    id: 2,
  },
  {
    img: idea,
    text: "Get the Approximate Solutions talk with the senior machanic",
    id: 3,
  },
];

const RelatedServices = () => {
  return (
    <div className="mt-10 pb-10 relative">
      <img
        src={yellowHc}
        alt="yellow"
        className="absolute top-0 right-0 h-[416px]    "
      />
      <img
        src={redHc}
        alt="yellow"
        className="absolute bottom-0 left-0 h-[416px]   "
      />
      <h1 className="text-2xl  font-bold text-center">Related Services</h1>
      <div className="mt-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex items-center justify-center gap-8 ${
              service.id % 2 !== 0 ? "flex-row" : "flex-row-reverse"
            } `}
          >
            <img src={service.img} className={` object-cover`} alt="img" />
            <h3 className="md:text-3xl capitalize w-[439px] text-gray-600 font-Popins  text-2xl font-normal ">
              {service.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
