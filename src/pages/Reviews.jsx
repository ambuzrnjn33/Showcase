import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { SlLink } from "react-icons/sl";
import { useGlobalContext } from "../context/context";
import { Navbar } from "../components";
import ClientSignup from "./ClientSignup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Reviews() {
  const initialState = {
    feedback: "",
    experience: 0,
    services: 0,
    audio: 0,
    video: 0,
    helpfull: 0,
    satisfaction: 0,
    care: 0,
  };

  const progressRef = useRef();
  const [progress, setProgress] = useState(0);
  const [activeRating, setActiveRating] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const { url, user } = useGlobalContext();
  const navigate = useNavigate();
  const [ratingCategories, setRatingCategories] = useState([
    {
      name: "How do you rate our services",
      rating: formData.services,
      key: "services",
    },
    {
      name: "This application was helpfull",
      rating: formData.helpfull,
      key: "helpfull",
    },
    {
      name: "Video clarity",
      rating: formData.video,
      key: "video",
    },
    {
      name: "Audio clarity",
      rating: formData.audio,
      key: "audio",
    },
    {
      name: "Satisfaction",
      rating: formData.satisfaction,
      key: "satisfaction",
    },
    {
      name: "Customer care",
      rating: formData.care,
      key: "care",
    },
  ]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  function handleRateClick(e) {
    setProgress(e.target.innerText * 20);
    setActiveRating(e.target.innerText);
    setFormData({ ...formData, experience: parseInt(e.target.innerText) });
  }

  function updateRating(ratingCategoriesIdx, value, name) {
    setFormData({ ...formData, [name]: value });
    console.log(ratingCategoriesIdx, value);
    let updatedRatingCategories = [...ratingCategories];
    updatedRatingCategories[ratingCategoriesIdx].rating = value;
    setRatingCategories(updatedRatingCategories);
  }

  const submitFeedback = async () => {
    try {
      console.log(url);
      const res = await axios.post(
        `${url}/feedback/upload/${user._id}`,
        formData
      );
      console.log(res);
      toast.success("Thank you for uploading feedback");
      setFormData(initialState);
      setInterval(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.log(error);

      toast.error("An error occurred while uploading");
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Container>
        <Header>
          <p>&lt;Back</p>
          <p>Review</p>
        </Header>
        <ReviewSection>
          <Feedback>
            <div className="header">
              <p>Feedback</p>
              <SlLink />
            </div>
            <textarea
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
            />
          </Feedback>
          <Rating>
            <label htmlFor="rating">
              Rate your experience <br />
            </label>
            <progress ref={progressRef} value={progress} max={100}>
              {" "}
            </progress>
            <RatingBar>
              {[1, 2, 3, 4, 5].map((value) => {
                const isActive = value.toString() === activeRating;
                return (
                  <Rate
                    key={value}
                    isActive={isActive}
                    onClick={handleRateClick}
                    {...{ isActive }}
                  >
                    {value}
                  </Rate>
                );
              })}
            </RatingBar>
          </Rating>
          {ratingCategories.map((category, ratingCategoriesIdx) => {
            return (
              <OtherRatings key={ratingCategoriesIdx}>
                <p>{category.name}</p>
                <Stars className="stars">
                  {[1, 2, 3, 4, 5].map((value, starsIdx) => (
                    <Star
                      key={starsIdx}
                      onClick={(e) => {
                        updateRating(ratingCategoriesIdx, value, category.key);
                      }}
                      src={
                        value <= ratingCategories[ratingCategoriesIdx].rating
                          ? "/src/assets/stars/filled.svg"
                          : "/src/assets/stars/unfilled.svg"
                      }
                    />
                  ))}
                </Stars>
              </OtherRatings>
            );
          })}
        </ReviewSection>
        <div className="btn-div">
          <button onClick={() => submitFeedback()}>SUBMIT</button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  padding-bottom: 100px;
  margin: 0 auto;
  .btn-div {
    text-align: center;
  }
  button {
    width: 150px;
    height: 54px;
    background: #ffc040;
    border: 3px solid #dbd6d6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 30px 10px;
  p {
    font-size: 1.5rem;
    color: #858a89;
  }
  p:nth-child(2) {
    font-weight: bold;
  }
`;

const ReviewSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10vw;
`;

const Feedback = styled.div`
  width: 473px;
  height: 216px;
  border: 4px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  padding: 10px 30px;
  .header {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  textarea {
    width: 100%;
    height: 172px;
    padding: 10px 0;
    background: transparent;
    outline: none;
    resize: none;
  }
`;

const Rating = styled.div`
  width: 473px;
  height: 216px;
  border-radius: 20px;
  overflow: hidden;
  padding: 10px 30px;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 50px 0;

  progress {
    width: 299px;
    height: 6px;
    border-radius: 20px;
  }

  progress::-moz-progress-bar {
    background: #ffc93e;
  }

  progress::-webkit-progress-value {
    background: #ffc93e;
  }

  progress::-webkit-progress-bar {
    background: #d9d9d9;
  }
`;

const RatingBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Rate = styled.div.attrs((props) => ({
  isActive: props.isActive,
}))`
  cursor: pointer;
  height: 44px;
  width: 44px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;

  background-color: ${(props) =>
    props.isActive &&
    `
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `};

  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const OtherRatings = styled.div`
  width: 473px;
  height: 181px;
  border: 4px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 50px 0;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Stars = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Star = styled.img`
  width: 25px;
  &:hover {
    cursor: pointer;
  }
`;
