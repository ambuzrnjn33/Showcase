import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Layout } from "../components";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { useParams, useNavigate } from "react-router-dom";

const ShowcaseReview = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { url, user, token } = useGlobalContext();
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const [services, setServices] = useState({
    audio: false,
    video: false,
    performance: false,
  });
  
  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`${url}/product/get-showcase-reviews`);
      console.log(res);
      setFeedback();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleSubmitFeedback = async() => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(`${url}/${user._id}/add-review`,{feedback: feedback},{
        headers: {
          "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
      },
      });
      setFeedback("");
      fetchProductDetails();
    } catch (error) {
      console.log(error);
    }
    console.log(feedback);
  };

  return (
    <Layout>
       <div className="flex pl-10">
      <h1 
            onClick={()=>navigate(-1)}
            className="text-gray-400 font-bold flex text-lg items-center cursor-pointer pr-5">
              <FaAngleLeft />
              Back
            </h1>
            <h1 className="text-gray-500 font-bold flex text-lg items-center">Reviews</h1>
            </div>
    <div className="p-10">
      <div className="flex items-start md:gap-10">
        <div className="hidden md:block">
          <img
            className="h-14 w-14 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h4>Feedback</h4>
            <textarea
              type="text"
              name=""
              id=""
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your feedback"
              className="pl-3 pt-2 w-full h-32 rounded-md border border-slate-700"
            ></textarea>
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            Rate Your Experience
            <input
              type="range"
              name=""
              min="0"
              max="5"
              step="1"
              value={rangeValue}
              style={{ accentColor: "#FFC040", backgroundColor: "red" }}
              className="w-full rounded-lg"
            />
            <div className="flex justify-center mt-3">
              <div className="flex space-x-3">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-10 w-10 rounded-full flex justify-center items-center text-lg font-bold cursor-pointer ${
                      index + 1 === Number(rangeValue) && "bg-white"
                    }`}
                    onClick={(e) => setRangeValue(Number(e.target.innerText))}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>How do you rate our services</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>This application was helpfull</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>Video clarity</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>Audio clarity</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>Satisfaction</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-8 rounded-xl">
            <h3>Customer care</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
        </div>
      </div>
      <div className="text-right mt-8 items-center">
        <button
          onClick={handleSubmitFeedback}
          className="px-9 py-2 bg-green-500 rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default ShowcaseReview;
