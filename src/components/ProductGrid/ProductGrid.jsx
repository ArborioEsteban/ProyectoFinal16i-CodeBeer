import React, { useEffect, useState } from 'react'
import {  Button, Col, Container, Offcanvas,  Row } from 'react-bootstrap'
import axios from '../api/axios';
import ProductItem from '../ProductItem/ProductItem';
import { AiOutlineShoppingCart , AiFillCloseSquare} from 'react-icons/ai';
import Swal from 'sweetalert2';
import './ProductGrid.css';




// localStorage.setItem("carrito", []);
const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
// el [] despues del || va con o sin comillas?

const userLS = localStorage.getItem("user");
const numMesaSStorage = localStorage.getItem('mesa');

let totalLS=0; 
let countLS=0;


if (carritoLS instanceof Array) {
carritoLS.forEach(element => {
  totalLS = totalLS + (element.price * element.quantity)
});

carritoLS.forEach(element => {
   countLS = countLS + element.quantity; 
});
}



const ProductGrid = () => {
  const [products,setProducts] = useState([]);

    // states para el carrito

    const [allProducts, setAllProducts] = useState(carritoLS);
    
    const [total, setTotal] = useState(totalLS);
    const [countProducts, setCountProducts] = useState(countLS);

    // state para la orden, en espera y pedido realizado
    const [stateOrder, setstateOrder] = useState("en Espera");

    
    

    const saveLS = () =>{
      localStorage.setItem("carrito", JSON.stringify(allProducts));
    }

    useEffect(() => {
      saveLS();

    }, [allProducts])
    
    

    useEffect(() => {
        const itemsFetch = async (e) => {
          const data = await axios.get(`/products`);
          setProducts(data.data);  
        };
        itemsFetch();
        
        
      }, []);

      const onRemoveProduct = products => {
        const results = allProducts.filter(
          item => item.productID
          !== products.productID

        );

        setTotal(total - products.price * products.quantity);
        setCountProducts(countProducts - products.quantity);
        setAllProducts(results);

      };
      

      const onCleanCart = () => {
        setTotal(0);
        setCountProducts(0);
        setAllProducts([]);
        setstateOrder('en espera');
        
      };

      const onConfirmOrder = () => {
        setstateOrder('Realizado');

        // podriamos agregar numeros de pedido para guardarlos

        Swal.fire({
          title: 'Pedido Confirmado!',
          width: 600,
          padding: '3em',
          color: '#ecb465',
          allowOutsideClick:false,
          allowEscapeKey:false,
          confirmButtonText:'Continuar',
          confirmButtonColor:'#ecb465',
          background: '#064663 url(https://i.pinimg.com/originals/33/7d/11/337d113e8745328fb8d68c951c49eec6.gif)',
          backdrop: `
            rgba(0,0,45,0.6)
            url("")
            center
            repeat
          `
        }).then(() => {
          Swal.fire({
            title: 'Gracias por su compra!',
            timer: 3000,
            color: '#ecb465',
            background: '#064663 url(https://i.pinimg.com/originals/33/7d/11/337d113e8745328fb8d68c951c49eec6.gif)',
            showConfirmButton:false,
          })
          onCleanCart();
        });

      }
      

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      

      

  return (
    <>
      <div className='text-end fixed-bottom  mb-0 me-1 container'>
        <Button className="w-25" id='myCartBtn' onClick={handleShow}>
          {countProducts}<AiOutlineShoppingCart/>
        </Button>

        <Offcanvas show={show} className="bg-pedido" onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title className='mt-4'>
            <p>Hola {userLS }</p>
            <p className=''>Su Pedido está {stateOrder}</p>
            <p className=''>Su Mesa: {numMesaSStorage}</p>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='d-flex justify-content-center flex-column text-center my-1'>
            <div className='text-center'>
              {allProducts.length ? (
                <>
                  {allProducts.map( elemento =>(
                          <div key={elemento.productID
                          }>
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
                    <div className='d-flex flex-direction-row align-items-center justify-content-center mt-5'>
                      <p className='w-50 fs-2'>Total : </p>
                      <p className='w-50 fs-2'> $ {total}</p>
                    </div>
                    
                
                </>
              )
              
              : (
                <p>El carrito esta Vacio</p>
              )}

            </div>

            <div className='align-content-end justify-content-end'>

              <Button 
              onClick={ ()=> onConfirmOrder()}
              
              className= {`w-50 mt-5 ${
                allProducts.length ? '' : 'disabled'
              }`}
              id='cartOrderButtons'>
                
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

      <Container>
          <Row className='mt-5'>
            <div className='mt-5'></div>
                {products.map((elemento) => {
                    return (
                        <Col xs={6} sm={4} md={4} lg={2} key={elemento.productID
                        } className='mt-4'>
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
      </Container>
    </>
  )
}

export default ProductGrid