import React, { useEffect, useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { AiOutlineShoppingCart, AiFillCloseSquare } from "react-icons/ai";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";

import axios from "../api/axios";

import ProductItem from "../ProductItem/ProductItem";

import "./ProductGrid.css";

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

let totalLS = 0;
let countLS = 0;

if (carritoLS instanceof Array) {
  carritoLS.forEach((element) => {
    totalLS = totalLS + element.price * element.quantity;
  });

  carritoLS.forEach((element) => {
    countLS = countLS + element.quantity;
  });
}

const ProductGrid = () => {
  // states para el saludo del usuario y su numero de mesa
  const [usuario, setUsuario] = useState("");
  const [mesa, setMesa] = useState("");

  // states para el carrito

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState(carritoLS);
  const [total, setTotal] = useState(totalLS);
  const [countProducts, setCountProducts] = useState(countLS);

  // state para la orden, en espera y pedido realizado
  const [stateOrder, setstateOrder] = useState("en Espera");

  // actualizamos el carrito del localStorage en cada cambio
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(allProducts));
  }, [allProducts]);

  // guardamos los productos en localStorage a medida que se agregan productos al pedido
  useEffect(() => {

    const itemsFetch = async (e) => {
      const data = await axios().get(`/products`);
      setProducts(data.data);
    };
    itemsFetch();


    // si existe el token de la sesion de usuario , mostramos su nombre de usuario y su mesa
    let token = sessionStorage.getItem("token") || "";
    if (token) {
      const userLS = sessionStorage.getItem("userName");
      const numMesaSStorage = sessionStorage.getItem("mesa");
      setUsuario(userLS);
      setMesa(numMesaSStorage);
    }


  }, []);

  const onRemoveProduct = (products) => {
    const results = allProducts.filter(
      (item) => item.productID !== products.productID
    );

    setTotal(total - products.price * products.quantity);
    setCountProducts(countProducts - products.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setTotal(0);
    setCountProducts(0);
    setAllProducts([]);
    setstateOrder("en espera");
  };

  const onConfirmOrder = () => {
    setstateOrder("Realizado");

    Swal.fire({
      title: "Pedido Confirmado!",
      width: 600,
      padding: "3em",
      color: "#ecb465",
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Continuar",
      confirmButtonColor: "#ecb465",
      background:
        "#064663 url(https://i.pinimg.com/originals/33/7d/11/337d113e8745328fb8d68c951c49eec6.gif)",
      backdrop: `
            rgba(0,0,45,0.6)
            url("")
            center
            repeat
          `,
    }).then(() => {
      Swal.fire({
        title: "Gracias por su compra!",
        timer: 3000,
        color: "#ecb465",
        background:
          "#064663 url(https://i.pinimg.com/originals/33/7d/11/337d113e8745328fb8d68c951c49eec6.gif)",
        showConfirmButton: false,
      });
      onCleanCart();
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className=" container d-flex justify-content-end flex-column text-right g-2 mt-3 mb-1 w-25 text-end sticky-top">
        <Button className="" id="myCartBtn" onClick={handleShow}>
          Productos<br></br>
          {countProducts}
          <AiOutlineShoppingCart />
        </Button>
      </div>

      <div className="text-end fixed-bottom mb-1 me-1 container">
        <Offcanvas show={show} className="bg-pedido" onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title className="mt-4">
              <p>Hola {usuario}</p>
              <p className="">Su Pedido está {stateOrder}</p>
              <p className="">Su Mesa: {mesa}</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex justify-content-center flex-column text-center my-1">
              <div className="text-center">
                {allProducts.length ? (
                  <>
                    {allProducts.map((elemento) => (
                      <div key={elemento.productID}>
                        <div className="d-flex flex-direction-row align-items-center bg-dark">
                          <p className="w-25">{elemento.quantity} x </p>
                          <p className="ms-1 w-50">{elemento.name}</p>
                          <p className="w-25">${elemento.price}</p>
                          <div className="w-25">
                            <AiFillCloseSquare
                              className="m-1"
                              onClick={() => onRemoveProduct(elemento)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex flex-direction-row align-items-center justify-content-center mt-5">
                      <p className="w-50 fs-2">Total : </p>
                      <p className="w-50 fs-2"> $ {total}</p>
                    </div>
                  </>
                ) : (
                  <p>El carrito esta Vacio</p>
                )}
              </div>

              <div className="align-content-end justify-content-end">
                <Button
                  onClick={() => onConfirmOrder()}
                  className={`w-50 mt-5 ${
                    allProducts.length ? "" : "disabled"
                  }`}
                  id="cartOrderButtons"
                >
                  Confirmar
                </Button>
                <Button
                  onClick={onCleanCart}
                  className="w-50"
                  id="cartOrderButtons"
                >
                  Vaciar
                </Button>
                <Button
                  onClick={handleClose}
                  className="w-50"
                  id="cartOrderButtons"
                >
                  Regresar
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <Container>
        <Row className="my-5">
          <div className="mt-5"></div>
          {products.map((elemento) => {
            return (
              <Col
                xs={6}
                sm={4}
                md={4}
                lg={2}
                key={elemento.productID}
                className="mt-4"
              >
                <ProductItem
                  {...elemento}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
              </Col>
            );
          })}
        </Row>
      </Container >
      <Container>
        <Footer/>
      </Container>
    </>
  );
};

export default ProductGrid;
