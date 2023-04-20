import React from "react";
import styled from "styled-components";
import { FaWhatsapp, FaRegCommentDots } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
import { VscBookmark } from "react-icons/vsc";
import { RiShareBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CustomMap from "../CuatomMap";
import { useParams } from "react-router-dom";

export default function ProductDetails({ productDetail, productId }) {
  const stars = [];
  const params = useParams();
  
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        className={i < 3 ? "active text-yellow-500 " : ""}
        key={i}
      />
    );
  }
  const navigate = useNavigate();
  const vendorLoc = {
    lat: 20.4625,
    lng: 85.883,
  };
  const userLoc = {
    lat: 20.2961,
    lng: 85.8245,
  };
  return (
    <Container>
      <div>
        <h1 className="text-3xl text-yellow-500 ">Vendor Name</h1>
        <h1>2km &nbsp;&nbsp; {stars} </h1>
        <div
          className="flex items-center gap-3 cursor-pointer "
          onClick={() => navigate(`/reviews/${productId}`)}
        >
          {" "}
          <h1 className="text-lg font-medium capitalize ">Reviews</h1>{" "}
          <RiShareBoxLine className="text-lg " />
        </div>
      </div>
      <div className="address">
        {productDetail?.description}
        <br />
        Land Mark: Near Maple Tower
      </div>
      <Socials>
        <FaWhatsapp className="icon" />

        <label htmlFor="map" className="">
          <div className="bg-green-100 p-3 flex items-center justify-center gap-1 rounded-xl">
            <SiGooglestreetview className="font-semibold text-2xl text-green-500" />
          </div>
        </label>
        {vendorLoc && (
          <CustomMap shopLocation={vendorLoc} myLocation={userLoc} />
        )}
        <VscBookmark
          className="icon cursor-pointer "
          onClick={() => navigate(`/savedvideos/${productId}`)}
        />
        <FaRegCommentDots
          className="icon cursor-pointer"
          onClick={() => navigate(`/comments/${productDetail._id}`)}
        />
      </Socials>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10rem;

    @media (max-width: 800px) {
      gap: 6rem;
    }
  }
  .address {
    line-height: 2.3rem;
  }
`;

const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  margin-top: 3rem;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 6px;
  box-shadow: 0px 0px 25px 15px rgba(217, 217, 217, 0.5);

  @media (max-width: 800px) {
    padding: 1rem;
  }

  .icon {
    font-size: 2.7rem;
    color: #747474;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`;
