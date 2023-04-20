import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { Layout } from "../components";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Feedback = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [services, setServices] = useState({
    audio: false,
    video: false,
    performance: false,
  });

  const navigate = useNavigate();

  const handleSubmitFeedback = () => {
    console.log(rangeValue);
    console.log(rating);
    console.log(feedback);
    console.log(services);

    // API Request here
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
            <h1 className="text-gray-500 font-bold flex text-lg items-center">Feedback</h1>
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
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex space-x-6 justify-center p-16 rounded-xl bg-[#F5F5F5] shadow-md">
            <div className="flex flex-col items-center">
              <div
                onClick={() =>
                  setServices({ ...services, audio: !services.audio })
                }
                className="bg-white h-14 w-14 rounded-full shadow-md flex justify-center items-center cursor-pointer"
              >
                <BsFillCheckCircleFill
                  className={`${
                    services.audio ? "block" : "hidden"
                  } text-green-500 text-3xl`}
                />
              </div>
              <h3>Audio</h3>
            </div>
            <div className="flex flex-col items-center">
              <div
                onClick={() =>
                  setServices({ ...services, video: !services.video })
                }
                className="bg-white h-14 w-14 rounded-full shadow-md flex justify-center items-center cursor-pointer"
              >
                <BsFillCheckCircleFill
                  className={`${
                    services.video ? "block" : "hidden"
                  } text-green-500 text-3xl`}
                />
              </div>
              <h3>Video</h3>
            </div>
            <div className="flex flex-col items-center">
              <div
                onClick={() =>
                  setServices({
                    ...services,
                    performance: !services.performance,
                  })
                }
                className="bg-white h-14 w-14 rounded-full shadow-md flex justify-center items-center cursor-pointer"
              >
                <BsFillCheckCircleFill
                  className={`${
                    services.performance ? "block" : "hidden"
                  } text-green-500 text-3xl`}
                />
              </div>
              <h3>Performance</h3>
            </div>
          </div>
          <div className="bg-[#F5F5F5] shadow-md p-16 rounded-xl">
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
            <h3 className="pb-8" >Star Rating</h3>
            <ReactStars
              count={5}
              size={40}
              onChange={(rating) => setRating(rating)}
            />
          </div>
          <div className="shadow-md p-8 rounded-xl border border-slate-700">
            <h4>Feedback</h4>
            <textarea
              name=""
              id=""
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="pl-3 pt-2 w-full h-32 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="text-right mt-8 items-center">
      <button class="block bg-yellow-400 hover:bg-yellow-400 text-white uppercase text-lg mx-auto px-5 py-2 rounded" 
      type="submit"
      onClick={handleSubmitFeedback}
      >
        Submit
        </button>
        {/* <button
          onClick={handleSubmitFeedback}
          className="px-9 py-2 bg-green-500 rounded-md text-white"
        >
          Submit
        </button> */}
      </div>
    </div>
    </Layout>
  );
};

export default Feedback;
