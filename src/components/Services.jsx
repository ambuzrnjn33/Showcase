import React from "react";

const Services = () => {
  const data = [
    "Shose",
    "Automobile",
    "Jewellery",
    "Watches",
    "Stationary",
    "Furnitures",
    "Clothes",
    "Fitness",
    "Home decor",
    "Beauty & Makeup",
  ];
  return (
    <div className="px-8 mt-5 my-20">
      <h1 className="md:text-4xl text-xl text-center font-bold  text-[#112D57] mb-14 font-[poppins] ">
        Services we offer
      </h1>
      <div className="flex flex-wrap md:gap-16 gap-5 items-center justify-center ">
        {data.map((item) => (
          <button
            key={item}
            className="text-xl bg-[#FFC2B1] shadow-lg shadow-[#FFC2B1] px-9 py-3 rounded-xl border-none"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
