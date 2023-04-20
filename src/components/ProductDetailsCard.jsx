import React from 'react'
import styled from 'styled-components'

export default function ProductDetailsCard({ width, product }) {
  return (
    <Container width={width} discount={product.discount} className="flex">
        <video src={product.videoURL} controls />
        <div className="details">
            <div className='gap-3'>
              <p className='flex'><h3 className='font-bold pr-2'>Store:</h3>{product.store}</p>
              <p>{product.distance}kms</p>
            </div>
            <p className='flex'><h3 className='font-bold pr-2'>Offer:</h3><p className='text-[#FFC93C]'>{product.offer}</p></p>
            <div className='flex'><h3 className='font-bold pr-2'>Rate:</h3> ${product.rate}</div>
        </div>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
    video{
      width: 320px;
      height: 200px;
      object-fit: cover;
      border: 2px solid #eaca8b;
      border-bottom: 0;
    }
    button{
      width: 100%;
      padding: 8px 0;
      background-color: #5e5f8f;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: -1px;
    }
    .details{
      margin-top: 3rem;
      margin-left: 60px;
      div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    ::before{
      content: '-${props => props.discount }%';
      display: ${props => props.discount <= 0 ? 'none' : 'block'};
      position: absolute;
      top: 0;
      left: 0;
      width: 11%;
      padding: 5px;
      font-weight: bold;
      color: white;
      background-color: #5e5f8f;
    }
`