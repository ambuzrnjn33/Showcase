import React from "react";
import AuthNavbar from "../../components/AuthNavbar";
// import logo from "../assets/showcase-removebg-preview.png";
import styled from 'styled-components';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import { IoMdAdd } from "react-icons/io";
import ProductDetailsTable from "./ProductDetailsTable";
import AddProductDetails from "./AddProductDetails";

const ProductList = () => {

    const productsData = [
        {
          discount: 50,
          videoURL: '/src/assets/video/productVideo.mp4',
          store: 'smiley',
          offer: '30%',
          distance: 2,
          rate: 42
        }
      ]

    return (
        <div>
        {/* <div className="min=h-screen px-4 md:px-8 bg-[#D9D9D9]/90 z-[99999]">
        <div className="flex items-center justify-between">
          <img className="h-12 md:h-16" src={logo} alt="showcase-logo" />
          <h3 className="flex-1 hidden sm:block md:text-xl font-bold text-[#8F9492] text-center">
            Product
          </h3>
        </div>
      </div> */}
      <div className="overflow-hidden">
      <AuthNavbar title="Product" />
    </div>
      <Container>
        <VideoCollage>
          {productsData.map((product, idx) => <ProductDetailsCard key={idx} width={220} product={product} className="flex p-10" />)}
        </VideoCollage>
    </Container>
<div className="flex items-center float-right">
<label htmlFor="my-modal-4" className="flex font-bold cursor-pointer"><IoMdAdd className="mt-1" />ADD</label>
    {/* <button className="flex cursor-pointer p-4 font-bold"><IoMdAdd className="mt-1" />ADD</button> */}
    <AddProductDetails />
</div>
      <div className="mt-20">
          <ProductDetailsTable />
      </div>
    </div>
    )
}
export default ProductList;

const Container = styled.div `
    width: 100%;
    padding: 30px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: 2rem;
            font-weight: bold;
            @media (max-width: 800px){
                font-size: 1rem;
            }
        }
        p {
            font-weight: 600;
        }
    }

`

const VideoCollage = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
  }
`