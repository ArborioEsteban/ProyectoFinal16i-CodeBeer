import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "../Navbar/Navbar1.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const NavBarCode = () => {
  const navigate = useNavigate();

  const handleCLick = (route) => {
    navigate(route);
  };

  // decodificamos info del token del user
  // if( !token === []){
    //     const dataDecoded = jwt_decode(token);
    //     let isActive = dataDecoded.isActive;
    // }
    
    const [isActive, setIsActive] = useState(false);
    
  useEffect(() => {
    let token = sessionStorage.getItem("token") || "";
    if (token) {
    const dataDecoded = jwt_decode(token);
    setIsActive(!!dataDecoded.isActive);
    }
    
  }, [])
  

  const handleClickLogin = () => {
    let token = sessionStorage.getItem("token") || "";
    if (token) {
      
      
      if(isActive){

        Swal.fire({
          title: '¿Cerrar Sesion?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ecb465',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Cerrar Sesion'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Regresa Pronto',
              'Su sesion finalizó correctamente',
              'success'
            )
            localStorage.setItem("carrito" , "");
            sessionStorage.setItem("token", "");
            sessionStorage.setItem('userName', "");
            sessionStorage.setItem('mesa', "");
            setIsActive(false);
            navigate("/FormLogin");
          }
        })
      }
    }
  }
  

  return (
    <>
      <Navbar className="navBg fixed-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://live.staticflickr.com/65535/52696635898_5d1c068db0_b.jpg"
              alt="Code&Beer"
              className="CodeBeer"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav nav-tabs  me-auto mx-auto mb-lg-0 justify-content-end fs-5  ">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/AcercaDe">
                Acerca De Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/FormContacto">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav className="p-2 mt-2  ">
              <Button
                onClick={() => handleClickLogin()}
                variant="dark "
                className="ms-2"
                id="myloginBtn"
              >
                {isActive ? "Logout" : "Login"}
                
              </Button>
              {/* Link o NavLink  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBarCode;
