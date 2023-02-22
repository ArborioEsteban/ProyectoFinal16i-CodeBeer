import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container, Row, Col } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiLogin, HiOutlineClipboardList, HiLockClosed } from "react-icons/hi";
import { HiEnvelope, HiUser } from "react-icons/hi2";

import axios from '../api/axios';
import Swal from 'sweetalert2';

const FormSignIn = () => {
  const navigate = useNavigate();

  const handleCLick = (route) => {
    navigate(route);
  };
  //const de los campos
  const [nombreRegistro, setNombreRegistro] = useState();
  const [apellidoRegistro, setApellidoRegistro] = useState();
  const [emailRegistro, setEmailRegistro] = useState();
  const [contraseñaRegistro, setContraseñaRegistro] = useState();





  //const para validar errores en campo email y password
  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async  (e) => {
    e.preventDefault();

    const textoRegex = /^[a-zA-Z]{6,20}$/;
    if (!textoRegex.test(nombreRegistro.trim())) {
      setNombreError(true);
      return;
    }
    setNombreError(false);

    if (!textoRegex.test(apellidoRegistro.trim())) {
      setApellidoError(true);
      return;
    }
    setApellidoError(false);
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRegistro)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    // Validar contraseña
    const passwordRegex = /^(?=.*[a-zA-Z]{2,})(?=.*\d{2,}).{6,}$/;
    if (
      !passwordRegex.test(contraseñaRegistro) ||
      contraseñaRegistro.lenght < 6
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    try {
      const response = await axios.post('/user', {
       name: nombreRegistro,
       lastName:apellidoRegistro ,
       email: emailRegistro,
       password: contraseñaRegistro,
       
      });

      if (response.status === 200) {
        setIsError(false);
        
       
        // const token = response.data.token;
        // sessionStorage.setItem('token', token);
       
        // sessionStorage.setItem('token', token);

        Swal.fire({
          title: 'Usuario registrado, Por favor inicie Sesion para continuar',
          timer: 4000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          navigate('/FormLogin');
          
         

        });
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Container className="container mt-5">
    
    <div className="container mt-5">
      <div className="mt-5 pt-5 px-4  login rounded ">
        <div className="">
          <hr />
          <h2 className="my-3 ms-2 ">Registrate</h2>
        </div>
        
        <Form onSubmit={handleSubmit} className="form py-4   px-4 ">
          <Form.Group className="mt-4" controlId="Nombre">
            <Form.Label>
              <HiUser className="me-2" />
              Ingrese su nombre
            </Form.Label>
            <Form.Control
              type="text"
              value={nombreRegistro}
              onChange={(e) => setNombreRegistro(e.target.value)}
              placeholder="Nombre"
              autoComplete="username"
            />
            {nombreError && (
              <span className="helper-text">Ingrese solo letras</span>
            )}
          </Form.Group>

          <Form.Group className="mt-4" controlId="Apellido">
            <Form.Label>
              <HiUser className="me-2" />
              Ingrese su apellido
            </Form.Label>
            <Form.Control
              type="text"
              value={apellidoRegistro}
              onChange={(e) => setApellidoRegistro(e.target.value)}
              placeholder="Apellido"
              autoComplete="username"
            />
            {apellidoError && (
              <span className="helper-text">Ingrese solo letras</span>
            )}
          </Form.Group>

          <Form.Group className="mt-4" controlId="correo">
            <Form.Label>
              <HiEnvelope className="me-2" />
              Ingrese su Email
            </Form.Label>
            <Form.Control
              type="Email"
              value={emailRegistro}
              onChange={(e) => setEmailRegistro(e.target.value)}
              placeholder="Email"
            />
            {emailError && (
              <span className="helper-text">
                El formato del email no es válido.
              </span>
            )}
          
          </Form.Group>
          <Form.Group className="my-4" controlId="Password">
            <Form.Label>
              <HiLockClosed className="me-2" />
              Ingrese su contraseña
            </Form.Label>
            <Form.Control
              type="password"
              value={contraseñaRegistro}
              onChange={(e) => setContraseñaRegistro(e.target.value)}
              placeholder="****************"
              autoComplete="current-password"
            />
            {passwordError && (
              <span className="helper-text">
                La contraseña debe contener al menos 2 caracteres alfabéticos, 2
                caracteres numéricos y tener una longitud mínima de 6
                caracteres.
              </span>
            )}
          </Form.Group>

          <Form.Group
            className="container"
            controlId="CheckboxTerminosYCondiciones"
          >
            <div onClick={() => handleCLick("/Error404")}>
              <p className="">Terminos y condiciones</p>
            </div>
            <Form.Check
              type="checkbox"
              label="Al hacer click aqui acepta nuestros terminos y condiciones"
            />
          </Form.Group>

          <div className="d-flex column align-items-center justify-content-center">
            <Button
              className="bg-transparent my-3"
              id="botonLogin"
              onClick={handleSubmit}
            >
              Registrate
              <HiOutlineClipboardList className="ms-2 icons" />
            </Button>
          </div>
        </Form>

        <div className="text-center">
          <h5 className="my-4">O registrate con</h5>
        </div>
        <Container className="px-4  text-center">
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Row
                onClick={() => handleCLick("/Error404")}
                className="border y-1"

              >
                <Col xs={2} md={2} className="ms-4 pt-2 text-center">
                  <FaFacebookF />
                </Col>
                <Col xs={6} md={7} className="ms-2 pt-2 text-center">
                  <p>Facebook</p>
                </Col>
              </Row>
              <Row
                onClick={() => handleCLick("/Error404")}
                className="border py-1 mt-3 "
               
              >
                <Col xs={2} md={2} className="ms-4 pt-2 text-center">
                  <FaGoogle />
                </Col>
                <Col xs={6} md={7} className="ms-2 pt-2 text-center">
                  <p>Google</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <hr />

        <div className="text-center px-5">
          <div className="">
            <p>¿ya tenes cuenta?</p>

            <div className="text-center">
              <Button
                onClick={() => handleCLick("/FormLogin")}
                type="submit"
                className="bg-transparent my-3"
                id="botonLogin"
              >
                Ingresar
                <HiLogin className="icons ms-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default FormSignIn;
