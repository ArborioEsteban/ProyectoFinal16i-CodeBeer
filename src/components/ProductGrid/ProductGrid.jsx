import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';



const baseUrl = process.env.REACT_APP_BASE_URL;

const ProductGrid = () => {
    const [products,setItems] = useState([]);

    useEffect(() => {
        const itemsFetch = async () => {
          const data = await axios.get(`${baseUrl}/products`);
          setItems(data.data);
        };
    
        itemsFetch();
      }, []);

  return (
        <Row>
            {products.map((elemento) => {
                return (
                <Col xs={6} sm={4} md={4} lg={2} key={elemento.id} className='p-2'>
                    <ProductItem {...elemento} />
                </Col>
                );
            })}
        </Row>
  )
}

export default ProductGrid