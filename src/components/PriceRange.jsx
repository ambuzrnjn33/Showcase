import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const PriceRange = ({
  selectedPrice,
  setSelectedPrice,
  minPrice,
  maxPrice,
  sortByPrice,
}) => {
  const { productData } = useGlobalContext();
  // const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  useEffect(() => {
    let sortedProducts = [...productData];

    if (sortByPrice === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
  }, [sortByPrice]);

  return (
    <div className="mt-5">
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-full appearance-none"
        style={{
          background: `linear-gradient(to right, #FCC646, #FCC646 ${
            ((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100
          }%, #d1d1d1 ${
            ((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100
          }%, #d1d1d1)`,
        }}
      />

      <div className="flex justify-between items-center mt-2">
        <p className="text-md">₹{minPrice}</p>

        <p className="text-md">₹{maxPrice}</p>
      </div>
    </div>
  );
};

export default PriceRange;
