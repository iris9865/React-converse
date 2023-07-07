import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='card' onClick={showDetail} style={{textAlign: "center", lineHeight: "30px"}}>
      <img src={item.img}/>
      <div style={{fontSize: "20px", fontWeight:"bold"}}>{item.title}</div>
      <div>{item.price}</div>
      <div style={{color: "crimson"}}>{item.new === true ? "New!" : ""}</div>
    </div>
  )
}

export default ProductCard
