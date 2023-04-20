import React, { useState, useRef } from "react";
import styled from "styled-components";
import AuthNavbar from "../components/AuthNavbar";

export default function AddProduct() {
  const initialState = {
    name: "",
    description: "",
    video: "",
    price: "",
    category: "",
  };
  const [video, setVideo] = useState();
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(formData);
  };
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const uploadVideo = async () => {
    console.log(video);
  };
  return (
    <Wrapper className="overflow-hidden">
      <AuthNavbar title="Add Product" />
      <Container>
        <Content>
          <div>
            <label htmlFor="name">Product name *</label>
            <br />
            <input
              onChange={onChange}
              value={formData.name}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <br />
            <input
              name="category"
              onChange={onChange}
              value={formData.category}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="description">Product Description</label>
            <br />
            <textarea
              onChange={onChange}
              value={formData.description}
              name="description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="product-description">Video</label>
            <br />
            <div className="upload">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleClick}
              >
                <img
                  className="icon1"
                  src="/src/assets/upload-icons/video.svg"
                />
                <img
                  className="icon2 cursor-pointer"
                  src="/src/assets/upload-icons/upload.svg"
                />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="video"
                className="hidden"
                onChange={(e) => setVideo(e.target.files[0])}
              />
              <button onClick={uploadVideo}>Upload</button>
            </div>
          </div>
          <div className="product-availability">
            <div>
              <label htmlFor="price">Price</label>
              <br />
              <input
                onChange={onChange}
                value={formData.price}
                name="price"
                type="text"
              />
            </div>
          </div>
          <div className="buttons">
            <button className="save" onClick={handleSubmit}>
              Save & Publish
            </button>
            <button className="cancel">Cancel</button>
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;

const Header = styled.nav`
  width: 100%;
  background-color: #b4b4b4;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  gap: 33%;
  img {
    width: 130px;
  }
  h1 {
    font-size: 30px;
  }
  @media (max-width: 430px) {
    gap: 10%;
    justify-content: space-between;
    img {
      width: 80px;
    }
    h1 {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #c2d6c3;
  padding: 50px 0;
`;

const Content = styled.div`
  width: 60%;
  padding: 50px 50px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-around;

  input {
    width: 330px;
    height: 45px;
    background: rgba(176, 226, 223, 0.5);
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    margin: 10px 0;
    outline: none;
    padding: 0 10px;
  }
  textarea {
    width: 330px;
    height: 250px;
    resize: none;
    outline: none;
    background: rgba(176, 226, 223, 0.5);
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 10px 10px;
    margin: 10px 0;
  }
  .upload {
    width: 330px;
    height: 250px;
    padding: 10px 10px;
    border-radius: 10px;
    border: 4px dashed #ffc93c;
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    img:nth-child(1) {
      width: 170px;
    }
    img:nth-child(2) {
      width: 80px;
    }
    button {
      position: absolute;
      width: 160px;
      height: 40px;
      bottom: -100px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffc040;
      border: 3px solid #dbd6d6;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
  }
  .product-availability {
    width: 100%;
    padding: 0 40px;
    input {
      width: 40%;
      height: 45px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      margin: 10px 0;
      outline: none;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10rem;
    button {
      width: 150px;
      height: 40px;
      background: rgba(22, 208, 108, 0.86);
      border: 3px solid #dbd6d6;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      color: white;
      font-weight: bold;
    }
    button:nth-child(2) {
      background: #ff4040;
    }
  }
  @media (max-width: 1350px) {
    .product-availability {
      margin-top: 3rem;
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      input {
        width: 50%;
      }
    }
  }
  @media (max-width: 1230px) {
    .buttons {
      padding: 0;
    }
    width: 90%;
  }
  @media (max-width: 430px) {
    padding: 10px 0;
    div {
      width: 80%;
    }
    .product-availability {
      padding: 0 30px;
      input {
        width: 100%;
      }
    }
    input {
      width: 100%;
    }
    .upload {
      width: 100%;
      img:nth-child(1) {
        width: 100px;
      }
      img:nth-child(2) {
        width: 60px;
      }
    }
    textarea {
      width: 100%;
    }
    .buttons {
    }
  }
`;
