import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Filters from "./Filters";
import VideosLists from "./VideosLists";
const Showcase = ({ productData }) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  // console.log(selectedPrice)

  return (
    <div className="flex  px-5 flex-row">
      <div className="basis-1/4 px-5 py-3">
        <Filters
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>
      <div className="basis-3/4 px-5 ">
        <VideosLists productData={productData} />
      </div>
    </div>
  );
};

export default Showcase;
