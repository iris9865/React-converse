import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `http://localhost:3005/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container style={{ marginTop: "120px"}}>
      <Row>
        <Col className='product-detail-img'>
          <img src={product.img} />
        </Col>
        <Col style={{ marginLeft: "80px"}}>
          <div className='product-info'>{product.title}</div>
          <div className='product-info'>{product.price}</div>
          <div className='choice'>
            {product.choice ? 'Conscious choice' : ''}
          </div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size.map((item) => (
                <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-button' style={{ width: "150px"}}>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
