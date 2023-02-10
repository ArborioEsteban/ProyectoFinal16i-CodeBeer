import React from 'react'
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap';
import './ProductItem.css';
import { AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";




const ProductItem = (props) => {
    const {id,name,price,description,image,category,available} = props;

    const popover = (
        <Popover id="popover-basic" className='popOverInfo'>
          <Popover.Header as="h4" className='popOverInfo'>{name}</Popover.Header>
          <Popover.Body className='popOverInfo'>
            {description}
          </Popover.Body>
        </Popover>
      );

  return (
    <Card className='cardProductos'>
       <OverlayTrigger trigger="click" placement="bottom" overlay={popover}  rootClose={true}>
            <div className='divImagen'>
            <p className='text-center'>+ info</p>
            <Card.Img src={`${
                available ? image : 'https://img.freepik.com/free-vector/404-error-template-flat-style_23-2147759636.jpg?w=826&t=st=1675871123~exp=1675871723~hmac=d506aee3005de3475235f0ac680d1a69430d9266eea5a2630e9509cfb5358cbd'
            }`
              
            }
            className="desvanecer imgCardProductos" 
            alt={description}
            />
            </div>
        </OverlayTrigger> 
      <Card.Body className='bodyCardProductos'>
        <Card.Title className='text-center'>{name}</Card.Title>
        {/* <Card.Text className='cardProductos text-center'>{description}</Card.Text> */}
        
        <div className='text-center my-2'>
          <h5>$ {price}</h5>

             
          <Button 
          id='myButton'
           className={`
           btnCardProductos mt-
            ${
						available ? '' : 'disabled'
					}`}>
          
            {`${available ? Button.innerHTML = `Agregar`  : Button.innerHTML = ''}`}
            <AiOutlineShoppingCart/>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )



}

export default ProductItem