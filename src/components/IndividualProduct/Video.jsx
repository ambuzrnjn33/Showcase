import React from "react";
import styled from "styled-components";
import video from "../../assets/video/videoplayback.mp4";
export default function Video({ productDetail }) {
  return (
    <Container>
      <video controls className="w-full">
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;
