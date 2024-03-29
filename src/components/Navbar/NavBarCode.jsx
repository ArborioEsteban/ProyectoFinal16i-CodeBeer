import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

import axios from "../api/axios";

import "./NavBarCode.css";

const NavBarCode = () => {
  const navigate = useNavigate();

  const handleCLick = (route) => {
    navigate(route);
  };

  const [isActive, setIsActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      const dataDecoded = jwt_decode(token);

      setIsActive(dataDecoded.isActive);
      setIsAdmin(dataDecoded.isAdmin);
      setUserName(dataDecoded.name);
      setUserLastName(dataDecoded.lastName);
      setUserEmail(dataDecoded.email);
    }
  }, [sessionStorage.getItem("token")]);

  const handleClickLogin = () => {
    let token = sessionStorage.getItem("token") || "";
    if (token) {
      if (isActive) {
        Swal.fire({
          title: "¿Cerrar Sesion?",
          icon: "warning",
          showCancelButton: true,
          background: "#ecb465",
          confirmButtonColor: "#041c32",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Cerrar Sesion",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: "Regresa Pronto!. Su sesion finalizó correctamente",
              timer: 3000,
              background: "#ecb465",
            });

            sessionStorage.clear();
            setIsActive(false);
            navigate("/");
          }
        });
      }
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios().put(`/user/${userEmail}`, {
      name: data.Nombre,
      lastName: data.Apellido,
      email: userEmail,
    });

    if (res.status === 200) {
      Swal.fire({
        title: "Operacion exitosa",
        text: "Usuario modificado correctamente. Por favor inicie sesion nuevamente para ver sus datos",
        icon: "success",
        timer: 5000,
        background: "#ecb465",
        showCancelButton: false,
        showConfirmButton: false,
      }).then(() => {
        sessionStorage.clear();
        navigate("/FormLogin");
        window.location.reload();
      });
    } else {
      Swal.fire({
        title: "Error",
        text: `Ocurrio un error al editar el usuario, que es: ${res.statusText}`,
        icon: "error",
        timer: 2000,
        background: "#ecb465",
        showCancelButton: false,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <Navbar className="navBg sticky-top" variant="dark" expand="lg">
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
              <Nav.Link
                as={Link}
                to="/products"
                className={` ${isActive ? "" : "d-none"}`}
              >
                Mi pedido
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/adminForm"
                className={` ${isAdmin ? "" : "d-none"}`}
              >
                Administrador
              </Nav.Link>
            </Nav>

            <Nav className="p-2 mt-2  ">
              <Button
                onClick={() => handleClickLogin()}
                variant="dark "
                className={`ms-2 ${isActive ? "" : "d-none"}`}
                id="myloginBtn"
              >
                {isActive ? "Cerrar Sesion" : "Login"}
              </Button>

              <Button
                onClick={handleShow}
                variant="dark"
                className={`ms-2 ${isActive ? "" : "d-none"}`}
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

      <div className="d-flex justify-content-center flex-column text-center my-1">
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="bg-dark m-auto bg-edit"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fs-2">Editar Datos</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex justify-content-center flex-column text-center my-1">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-transparent m-auto"
            >
              <label>Editar Nombre</label>
              <input
                type="text"
                placeholder={userName}
                {...register("Nombre", {
                  required: true,
                  max: 20,
                  min: 2,
                  maxLength: 20,
                  pattern: /^[a-zA-Z]{2,20}$/i,
                })}
                maxLength={20}
                minLength={2}
                required
                className="w-100 align-self-center bg-transparent text-white"
              />

              <label>Editar Apellido</label>
              <input
                type="text"
                placeholder={userLastName}
                {...register("Apellido", {
                  required: true,
                  max: 20,
                  min: 2,
                  maxLength: 20,
                  pattern: /^[a-zA-Z]{2,20}$/i,
                })}
                maxLength={20}
                minLength={2}
                required
                className="w-100 align-self-center bg-transparent text-white"
              />

              <Button
                type="submit"
                id="editButton"
                className="text-center w-50 me-2 mt-3"
                placeholder="Editar"
              >
                Editar
              </Button>
              <Button
                onClick={handleClose}
                className="w-50 mt-3"
                id="editButton"
              >
                Cancelar
              </Button>
            </form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default NavBarCode;
