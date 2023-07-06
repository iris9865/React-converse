import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async() => {
      let searchQuery = query.get('q') || '';
      let url = `http://localhost:3005/products?q=${searchQuery}`;
      let response = await fetch(url); 
      let data = await response.json();
      console.log(data);
      setProductList(data);
    };
    useEffect(()=>{
      getProduct();
  }, [query]);
  return (
    <div>
      <Container className='cards_all'>
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
