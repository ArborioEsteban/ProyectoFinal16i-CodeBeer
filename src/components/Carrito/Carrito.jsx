import { Button } from "react-bootstrap"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Carrito.css';


const handleCart = () =>{
    console.log("carrito");
    
}

const Carrito = () => {
  return (
    <>
    
    <Button className="bg-transparent w-25" id='myCartBtn'>
      <AiOutlineShoppingCart/>
    </Button>
    </>
  )
}

export default Carrito