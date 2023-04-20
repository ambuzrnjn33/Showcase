import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import Showcase from "../Showcase";

export default function OtherProducts({ productDetail }) {
  const vendorId = "1245";

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function otherProducts() {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/${vendorId}/otherproducts`
        );
        console.log(response.data.data);
        setProductsData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    otherProducts();
  }, [vendorId]);

  // console.log(productsData)

  return (
    <>
      <Container>
        <div className="header">
          <h2>{productDetail?.vendorId.name}'s other products</h2>
          <p>See more &gt;</p>
        </div>
        <VideoCollage>
          {productsData?.slice(0, 4).map((product, idx) => (
            <ProductCard key={idx} width={220} product={product} />
          ))}
        </VideoCollage>
      </Container>
      {/* <Showcase /> */}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 25px 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 2rem;
      font-weight: bold;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
    p {
      font-weight: 600;
    }
  }
`;

const VideoCollage = styled.div`
  width: 100%;
  padding: 70px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
