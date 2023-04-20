import React from "react";
import styled from "styled-components";

export default function ProductHeader({ productDetail }) {
  // console.log(productDetail)
  return (
    <Container>
      <h2>Store name</h2>
      <p>Near Me &gt;</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  h2 {
    font-size: 1.5rem;
  }
`;
