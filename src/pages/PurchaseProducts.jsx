import React from "react";
import video from "../assets/video/videoplayback.mp4";
import { Layout } from "../components";
import VideosLists from "../components/VideosLists";

const PurchasedProduct = () => {
  return (
    <Layout>
      <div className=" flex items-center justify-center px-10 my-8  ">
        <VideosLists />
      </div>
    </Layout>
  );
};

export default PurchasedProduct;
