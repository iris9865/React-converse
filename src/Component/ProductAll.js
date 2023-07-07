import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ProductAll = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async() => {
      let searchQuery = query.get('q') || '';
      let url = `https://my-json-server.typicode.com/iris9865/React-converse/products?q=${searchQuery}`;
      let response = await fetch(url); 
      let data = await response.json();
      console.log(data);
      setProductList(data);
    };
    useEffect(()=>{
      getProduct();
  }, [query]);

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword);
      navigate(`/?q=${keyword}`);  
    }
  }

  return (
    <div>
      <div className='main-banner'>
        <img src='img/banner4.jpg'></img>
        <div className='main-banner-text'>
          <h1>HEAVYWEIGHT CANVAS</h1>
          <h3>뛰어난 스케이트 보딩 퍼포먼스를 위한 디자인과</h3>
          <h3>클래식한 소재에 현대적인 감각을 더한</h3>
          <h3>해비웨이트 캔버스를 만나보세요</h3>
        </div>
      </div>
      <Container className='cards_all'>
        <h2 style={{padding: "40px 0", textAlign: "center"}}>What's Your Style?</h2>
        <div className='search-box'>
          <input type='text' placeholder='검색' onKeyPress={search}/>
        </div>
        <Row>
          {productList.map((item)=> (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
