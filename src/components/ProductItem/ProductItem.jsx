import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './ProductItem.css';
import { AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";



const ProductItem = (props) => {
    const {id,name,price,description,image,category,available} = props;

  return (
    <Card className='cardProductos'>
      <Card.Img src={image} className="imgCardProductos"/>
      <Card.Body>
        <Card.Title className='cardProductos text-center'>{name}</Card.Title>
        {/* <Card.Text className='cardProductos text-center'>{description}</Card.Text> */}
        <div className='text-center'>
          <h5 className='cardProductos'>$ {price}</h5>
          <Button id='myButton'>Agregar<AiOutlineShoppingCart className='ms-2'/></Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductItem