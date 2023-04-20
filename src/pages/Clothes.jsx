import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Layout } from "../components";
import ProductHeader from "../components/IndividualProduct/ProductHeader";
import Video from "../components/IndividualProduct/Video";
import ProductDetails from "../components/IndividualProduct/ProductDetails";
import OtherProducts from "../components/IndividualProduct/OtherProducts";
import Showcase from "../components/Showcase";
import { useGlobalContext } from "../context/context";

export default function Clothes() {
  const [productDetail, setProductDetail] = useState(null);
  const { id } = useParams();
  const { url } = useGlobalContext();
  console.log(url, id);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`${url}/user/${id}/getproduct`);
        setProductDetail(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, [id]);

  // console.log(productDetail)

  return (
    <Layout>
      <Container>
        <ProductHeader productDetail={productDetail} />
        <Video productDetail={productDetail} />
        <ProductDetails productDetail={productDetail} productId = {id} />
        {/* <OtherProducts productDetail={productDetail} /> */}
      </Container>
      {/* <Showcase /> */}
    </Layout>
  );
}

const Container = styled.div`
  width: 75%;
  /* width: 90%; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
