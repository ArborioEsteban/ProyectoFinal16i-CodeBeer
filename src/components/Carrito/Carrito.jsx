import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Carrito.css';



const Carrito = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      
    <Button className="bg-transparent w-25" id='myCartBtn' onClick={handleShow}>
      <AiOutlineShoppingCart/>
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Carrito