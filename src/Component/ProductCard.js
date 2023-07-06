import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img}/>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item.new === true ? "New!" : ""}</div>
    </div>
  )
}

export default ProductCard