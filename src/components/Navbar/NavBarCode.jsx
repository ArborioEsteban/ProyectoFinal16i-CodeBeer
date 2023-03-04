import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import "../Navbar/Navbar1.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';


const NavBarCode = () => {
  const navigate = useNavigate();

  const handleCLick = (route) => {
    navigate(route);
  };
    
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
            Swal.fire({

              text:'Regresa Pronto!. Su sesion finalizó correctamente',
              timer: 3000,
            }
            )

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    
    console.log(data.Nombre)
    console.log(data.Apellido)


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
                {isActive ? "Cerrar Sesion" : "Login"}
                
              </Button>

              <Button
                onClick={handleShow}
                variant="dark"
                className={`ms-2 ${
                  isActive ? "" : "d-none"
                }`}
                id="myloginBtn"
              >
                Mi Cuenta
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>


      <Offcanvas show={show} onHide={handleClose}  className="bg-dark d-flex vh-100 justify-content-center align-items-center flex-column m-auto bg-edit">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Editar Datos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent m-auto">
            <label>Editar Nombre</label>    
            <input
            type="text" 
            placeholder="Nombre"
             {...register("Nombre", {required: true, max: 20, min: 2, maxLength: 20, pattern: /^[a-zA-Z]{6,20}$/i})} 
             maxLength={20}
             minLength={2}
             required
            className="w-100 align-self-center bg-transparent text-white"/>

            <label>Editar Apellido</label>
            <input
             type="text"
             placeholder="Apellido"
             {...register("Apellido", {required: true, max: 20, min: 2, maxLength: 20, pattern: /^[a-zA-Z]{6,20}$/i})}
             maxLength={20}
             minLength={2}
             required
             className="w-100 align-self-center bg-transparent text-white"/>

            <input type="submit" id="editButton" className="text-end mt-3"/>
         </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBarCode;
