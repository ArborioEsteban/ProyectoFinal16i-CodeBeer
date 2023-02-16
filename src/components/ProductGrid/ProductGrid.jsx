import React, { useEffect, useState } from 'react'
import {  Button, Col,  Container,  Offcanvas,  Row } from 'react-bootstrap'
import axios, { all } from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import './ProductGrid.css';
import { AiOutlineShoppingCart , AiFillCloseSquare} from 'react-icons/ai';
import Swal from 'sweetalert2';





const baseUrl = process.env.REACT_APP_BASE_URL;
const carritoLS = JSON.parse(localStorage.getItem("carrito")) || '[]';
const userLS = localStorage.getItem("user");
const numMesaSStorage = sessionStorage.getItem('mesa');




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
    // state para la orden, en espera y pedido realizado
    const [stateOrder, setstateOrder] = useState("en Espera");

    
    

    const saveLS = () =>{
      localStorage.setItem("carrito", JSON.stringify(allProducts));
    }

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
          confirmButtonText:'Realizar nuevo pedido',
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
      

      
    // console.log(numMesaSStorage);

  return (
    <>

        
      <div className='text-end fixed-top mt-3 mx-2 container'>
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