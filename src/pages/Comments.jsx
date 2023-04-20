import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../components";
import { FaAngleLeft } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import axios from "axios";


const data = [
  {
    id: 1,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    img: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 2,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    img: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 3,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    img: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 4,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    img: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 5,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    img: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
];

const Comments = () => {
  const { url, user, token } = useGlobalContext();
  console.log(token);
  const params = useParams();
  const { productId, id } = params;
  const [review, setReview] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  console.log(productId);
  console.log(user._id)

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`${url}/user/get-comments/${productId}`);
      console.log(res);
      setReview(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

console.log(review);

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(message);
    console.log(url);
    console.log(token);
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(`${url}/user/${user._id}/add-comments?productId=${productId}`,{comment: message},{
        headers: {
          "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
      },
      });
      setMessage("");
      fetchProductDetails();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
            <h1 className="text-gray-500 font-bold flex text-lg items-center">Comments</h1>
            </div>
      <div className="md:p-8 sm:p-8 xs:p-8 space-y-5">
        {review.map((comment) => (
          <div
            className="flex items-stretch space-x-6"
            key={comment._id}
            {...comment}
          >
            {/* <div className="img">
              <img
                className="h-14 w-14 rounded-full"
                src={comment.img}
                alt=""
              />
            </div> */}
            <input
                      type="text"
                      placeholder="Send"
                      className="p-4 flex-1 border border-slate-300 rounded-xl"
                      value={comment.comment}
                    />
          </div>
        ))}
        <div className="flex items-stretch space-x-6">
        <div className="img">
              <img
                className="h-14 w-14 rounded-full"
                src="https://wallpapercave.com/wp/wp5741281.jpg"
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit} className="space-x-6">
        <input
                      type="text"
                      placeholder="Send"
                      name="message"
                      className="p-4 flex-1 border border-slate-300 rounded-xl"
                      value={message}
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                    />
                    <button className="p-4 flex-1 border border-slate-300 rounded-xl">Send</button>
                    </form>
      </div>
      </div>
    </Layout>
  );
};

export default Comments;