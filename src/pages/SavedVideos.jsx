import React, { useState, useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineOndemandVideo } from "react-icons/md";
import StarComponent from "./StarComponent";
import { Layout } from "../components";
import { FaAngleLeft } from "react-icons/fa";
import video1 from '../assets/video/videoplayback.mp4';
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SavedVideos = () => {
  const navigate = useNavigate();
  const [addvideos, setAddvideos] = useState([]);
  const { url, user } = useGlobalContext();
  const params = useParams();
  const { id } = params;
  console.log(id);

    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`${url}/user/${user._id}/getcart`);
        console.log(res.data.data);
        setAddvideos(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchProductDetails();
    }, [id]);

  return (
    <Layout>
      <div className="flex pl-10">
      <h1 
            onClick={()=>navigate(-1)}
            className="text-gray-400 font-bold flex text-lg items-center cursor-pointer pr-5">
              <FaAngleLeft />
              Back
            </h1>
            <h1 className="text-gray-500 font-bold flex text-lg items-center">Saved Services</h1>
            </div>
           
    <div className="space-y-7 p-7">
      {addvideos.cart && (
        <div className="flex space-x-3 md:space-x-8">
          <div>
            <img
              className="w-24 h-16 rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="bg-[#E8E8E8] w-full p-4 max-sm:p-0 sm:p-0 md:px-4 md:py-0 space-y-1 md:space-y-0 rounded-xl flex md:flex-row md:items-center md:justify-between border">
            <div className="text-lg font-semibold">{addvideos.cart[0].name}</div>
            <div>4 hours ago</div>
            <div className="flex items-center space-x-4">
            <video className="w-[25%] h-[46px]" controls>
            <source src={addvideos.cart[0].video} type="video/mp4" />  
            </video>
              <h5>Watch preview</h5>
            </div>
            <div className="max-sm:pt-5 pr-5 sm:pt-5 lg:sm:pt-0 xl:sm:pt-0 2xl:sm:pt-0 xs:pt-5 xs:pl-10">
              <StarComponent count={addvideos.cart[0].rating} />
            </div>
            <div className="flex items-center justify-between md:w-24 lg:w-32">
              <div>{addvideos.cart[0].totalReviews}</div>
              <div>
                <BsChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default SavedVideos;