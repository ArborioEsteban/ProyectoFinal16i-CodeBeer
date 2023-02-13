import React, { useEffect, useState } from 'react'
import {  Button, Col,  Container,  Offcanvas,  Row } from 'react-bootstrap'
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import './ProductGrid.css';
import { AiOutlineShoppingCart , AiFillCloseSquare} from 'react-icons/ai';





const baseUrl = process.env.REACT_APP_BASE_URL;


// inicializar con valores del localStorage
const carritoLS = JSON.parse(localStorage.getItem("carrito")) || '[]';
let totalLS=0; 
let countLS=0;

carritoLS.forEach(element => {
  totalLS = totalLS + (element.price * element.quantity)
});

carritoLS.forEach(element => {
   countLS = countLS + element.quantity; 
});



const ProductGrid = () => {
  const [products,setItems] = useState([]);

    // states para el carrito
    const [allProducts, setAllProducts] = useState(carritoLS);
    const [total, setTotal] = useState(totalLS);
    const [countProducts, setCountProducts] = useState(countLS);

    
    


    const saveLS = () =>{
      localStorage.setItem("carrito", JSON.stringify(allProducts));

    }

    // actualizar localStorage por cada cambio en los productos del LocalStorage
    useEffect(() => {
      saveLS();
    }, [allProducts])
    
    

    useEffect(() => {
        const itemsFetch = async () => {
          const data = await axios.get(`${baseUrl}/products`);
          setItems(data.data);
        };
        itemsFetch();
        
        
      }, []);
      
      
      
      

         
          
          

      
      
      

      

      const onRemoveProduct = products => {
        const results = allProducts.filter(
          item => item.id !== products.id
        );

        setTotal(total - products.price * products.quantity);
        setCountProducts(countProducts - products.quantity);
        setAllProducts(results);

      };
      

      const onCleanCart = () => {
        setTotal(0);
        setCountProducts(0);
        setAllProducts([]);
        // localStorage.setItem("carrito", JSON.stringify([])); 
      };
      

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      

      
  return (
    <>

        
      <div className='text-end fixed-top mt-3 mx-2 container'>
        <Button className="w-25" id='myCartBtn' onClick={handleShow}>
          {countProducts}<AiOutlineShoppingCart/>
        </Button>

        <Offcanvas show={show} className="bg-pedido" onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title className='my-5'>Su Pedido :</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex justify-content-center flex-column text-center my-3'>
            <div className='text-center'>
              {allProducts.length ? (
                <>
                  {allProducts.map( elemento =>(
                          <div key={elemento.id}>
                            <div className='d-flex flex-direction-row align-items-center bg-dark'>
                              <p className='w-25'>{elemento.quantity} x </p>
                              <p className='ms-1 w-50'>{elemento.name}</p>
                              <p className='w-25'>${elemento.price}</p>
                              <div className='w-25'>

                                <AiFillCloseSquare className='m-1'
                                onClick={() => onRemoveProduct(elemento)}
                                />
                                
                              </div>
                            </div>
                            
                          </div>
                    ))}
                    <div className='d-flex flex-direction-row align-items-center justify-content-center'>
                      <p className='w-50'>Total : </p>
                      <p className='w-50'> $ {total}</p>
                    </div>
                
                </>
              )
              
              : (
                <p>El carrito esta Vacio</p>
              )}

            </div>

            <div className='align-content-end justify-content-end'>

              <Button className="w-50 mt-5" id='cartOrderButtons'>
                  Confirmar
              </Button>
              <Button onClick={onCleanCart} className="w-50" id='cartOrderButtons'>
                  Vaciar
              </Button>
              <Button onClick={handleClose} className="w-50" id='cartOrderButtons'>
                  Regresar
              </Button>

            </div>


          </div>
        </Offcanvas.Body>
        
      </Offcanvas>

      </div>
      <Row>
            {products.map((elemento) => {
                return (
                    <Col xs={6} sm={4} md={4} lg={2} key={elemento.id} className='p-2'>
                    <ProductItem {...elemento} 

                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}/>
                    
                </Col>
                );
            })}
            
        </Row>
    </>
  )
}

export default ProductGrid