import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import videoUrl from "../assets/video/productVideo.mp4";
export default function ProductCard({ width, height, product }) {
  const navigate = useNavigate();
  console.log(product);

  const handleClickView = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      width={width}
      height={height}
      className="shadow-lg"
      discount={product.discount ? product.discount : "0"}
    >
      <video src={videoUrl} controls />
      <button onClick={() => navigate(`/products/${product._id}`)}>VIEW</button>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            Store: <span className="font-normal">Shop name</span>{" "}
          </p>
          <p className="font-semibold">
            {Math.round(product?.distance / 1000)} kms
          </p>
        </div>
        <div></div>
        <div className="font-semibold text-md">
          Price: <span className="font-normal">₹{product?.price}</span>{" "}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  box-shadow: 0 0 3px solid black;
  video {
    width: ${(props) => props.width}px;

    height: calc(1.15 * ${(props) => props.width}px);
    object-fit: cover;
    border: 2px solid #eaca8b;
    border-bottom: 0;
  }
  button {
    width: 100%;
    padding: 8px 0;
    background-color: #5e5f8f;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: -1px;
  }
  .details {
    margin-top: 1rem;
    div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  ::before {
    content: "-${(props) => props.discount}%";
    display: ${(props) => (props.discount <= 0 ? "none" : "block")};
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    padding: 5px;
    font-weight: bold;
    color: white;
    background-color: #5e5f8f;
  }
`;
