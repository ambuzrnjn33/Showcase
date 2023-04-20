import React, { useState } from "react";
import PriceRange from "./PriceRange";
import { useGlobalContext } from "../context/context";

const categories = [
  {
    category: "Automobile",
    subcategory: [],
  },
  {
    category: "Fashion",
    subcategory: [
      {
        name: "Men",
        types: ["Shirt", "Pants", "Jeans"],
      },
      {
        name: "Women",
        types: ["TShirt", "Scots", "Jeans"],
      },
      {
        name: "Kids",
        types: [],
      },
    ],
  },
  {
    category: "Electronics",
    subcategory: [],
  },
  {
    category: "Homeapplience",
    subcategory: [],
  },
];

const Filters = ({ selectedPrice, setSelectedPrice }) => {
  const { searchData,setFilteredProducts } = useGlobalContext();
  const [ sortByPrice,setSortByPrice ]= useState(null)

      const handleRadioChange = (event) => {
        const km = parseInt(event.target.value);
        let sortedProducts = [...searchData];

        // sortedProducts.forEach((product) => {
        //   product.distance = product.distance / 1000;
        // });

        if (km === 10) {
          sortedProducts = sortedProducts.filter(product => product.distance < 10);
        } else if (km === 20) {
          sortedProducts = sortedProducts.filter(product => product.distance >= 10 && product.distance < 20);
        } else if (km === 40) {
          sortedProducts = sortedProducts.filter(product => product.distance >= 20 && product.distance < 40);
        } else if (km === 50) {
          sortedProducts = sortedProducts.filter(product => product.distance >= 50);
        }

        setFilteredProducts(sortedProducts);
        console.log(sortedProducts.distance)
      };


  return (
    <div className="bg-[#5E5F8F] text-white px-2 pb-5 rounded-sm">
      <div className="py-2  w-full flex items-center justify-center border-b-2 border-white ">
        <h1 className="text-lg font-Popins ">Filters</h1>
      </div>
      <div className="mt-1">
        <p className="text-lg font-Popins">Categories</p>
        <div className=" form-control flex flex-col items-start gap-2 ">
          {categories.map((category) => (
            <div>
              <label className="flex items-center justify-start gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  className="radio radio-warning radio-xs"
                />
                <span className="label-text text-white">
                  {category.category}
                </span>
              </label>
              <div className="px-4 flex flex-col gap-1">
                {category.subcategory.length > 0 &&
                  category.subcategory.map((types, index) => (
                    <div>
                      <label className="flex items-center justify-start gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="subcategory"
                          className="radio radio-warning radio-xs"
                        />
                        <span className="  text-white">{types.name}</span>
                      </label>
                      {types.types.length > 0 && (
                        <div className="px-5 flex flex-col gap-1">
                          {types.types.length > 0 &&
                            types.types.map((item, index) => (
                              <label
                                className="flex items-center justify-start gap-2 cursor-pointer"
                                key={index}
                              >
                                <input
                                  type="radio"
                                  name="item"
                                  className="radio radio-warning radio-xs"
                                />
                                <span className="label-text text-white">
                                  {item}
                                </span>
                              </label>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-normal font-Popins ">Price Range</p>
        <PriceRange
        selectedPrice={selectedPrice}
        setSelectedPrice={ setSelectedPrice }
        minPrice={10}
        maxPrice={100}
        sortByPrice={sortByPrice}/>
      </div>
      <div className="mt-2">
        <p className="text-lg font-normal font-Popins">Price</p>
        <div className="form-control   flex flex-col gap-1">
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="Porder"
              className="radio radio-warning radio-xs"
              value="lowToHigh"
              checked={sortByPrice === "lowToHigh"}
              onChange={() => {
                setSortByPrice("lowToHigh")
                // console.log("sortByPrice after clicking lowToHigh", sortByPrice);
              }}
            />
            <span className="  text-white">Low to high</span>
          </label>
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="Porder"
              className="radio radio-warning radio-xs"
              value="highToLow"
              checked={sortByPrice === "highToLow"}
              onChange={() => {
                 setSortByPrice("highToLow")
                //  console.log("sortByPrice after clicking highToLow", sortByPrice);
            }}

            />
            <span className="  text-white">High to low</span>
          </label>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-normal font-Popins">Distance</p>
        <div className="form-control flex flex-col gap-1">
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="distance"
              className="radio radio-warning radio-xs"
              value="10"
              onChange={handleRadioChange}
            />
            <span className="  text-white">Below 10km</span>
          </label>
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="distance"
              className="radio radio-warning radio-xs"
              value="20"
              onChange={handleRadioChange}
            />
            <span className="  text-white">10km to 20km</span>
          </label>
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="distance"
              className="radio radio-warning radio-xs"
              value="40"
              onChange={handleRadioChange}

            />
            <span className="  text-white">20km to 40km</span>
          </label>
          <label className="flex items-center justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="distance"
              className="radio radio-warning radio-xs"
              value="50"
              onChange={handleRadioChange}
            />
            <span className="  text-white">Above 50km</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
