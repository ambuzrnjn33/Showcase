import React from 'react'
import styled from 'styled-components'

export default function ProductCard({ width, product }) {
  return (
    <Container width={width} product={product}>
        <video src={product?.video} controls />
        <button>VIEW</button>
        <div className="details">
            <div>
              <p>Store: {product?.storeId?.storeName}</p>
              <p>{product.distance}kms</p>
            </div>
            {/* <div>Offer: {product?.discount}</div> */}
            <div>Rate: {product.price}</div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
    video{
      width: ${props => props.width}px;
      height: calc( 1.15 * ${props => props.width}px );
      object-fit: cover;
      border: 2px solid #eaca8b;
      border-bottom: 0;
    }
    button{
      width: 90%;
      padding: 8px 0;
      background-color: #5e5f8f;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: -1px;
    }
    .details{
      margin-top: 1rem;
      div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    ::before{
      content: '-${props => props.product.discount}%';
      display: ${props => props.product.discount <= 0 ? 'none' : 'block'};
      position: absolute;
      top: 0;
      left: 0;
      width: 25%;
      padding: 5px;
      font-weight: bold;
      color: white;
      background-color: #5e5f8f;
    }
`
