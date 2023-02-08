import { Button } from "react-bootstrap"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Carrito.css';


const handleCart = () =>{
    console.log("carrito");
}

const Carrito = () => {
  return (
    <>
    {/* <Button className='w-25 text-center mx-4 my-2' id='myCartBtn' onClick={handleCart}>
    </Button>    */}
    <Button className="bg-transparent">
      <AiOutlineShoppingCart/>
    </Button>
    </>
  )
}

export default Carrito