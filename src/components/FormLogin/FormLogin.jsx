import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "react-bootstrap";
import { HiLogin, HiOutlineClipboardList, HiLockClosed } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

import axios from '../api/axios';
import Swal from 'sweetalert2';

import "./FormLogin.css";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };

  const [emailLogin, setEmailLogin] = useState();
  const [contraseñaLogin, setContraseñaLogin] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailLogin)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    // Validar contraseña
    const passwordRegex = /^(?=.*[a-zA-Z]{2,})(?=.*\d{2,}).{6,}$/;
    if (!passwordRegex.test(contraseñaLogin) || contraseñaLogin.lenght < 6) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    console.log([emailLogin, contraseñaLogin]);

    try {
      const response = await axios.post('/login', {
        username: emailLogin,
        password: contraseñaLogin,
      });

      if (response.status === 200) {
        setIsError(false);
        const token = response.data.token;
        console.log(token);
        sessionStorage.setItem('token', token);

        Swal.fire({
          title: 'Bienvenido',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          navigate('/selectTable');
          // aqui hacer un navigate hacia la parte de seleccionar Table
        });
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (

    <div className="pt-5 mb-5 mt-5">
      <div className=" pt-5 mx-5">
        <div className="p-3 py-4 login rounded">
          <div>
            <h2 className="ms-2 my-2">Iniciar sesión</h2>
            <hr className="mt-4" />
          </div>
          <div className="form">
            <Form onSubmit={handleSubmit} className="container px-4 pt-5">
              <Form.Group className="container " controlId="email">
                <Form.Label>
                  <HiEnvelope className="me-2" />
                  Ingrese su Email
                </Form.Label>
                <Form.Control
                  type="Email"
                  value={emailLogin}
                  onChange={(e) => setEmailLogin(e.target.value)}
                  placeholder="Ingrese su email"
                  autoComplete="username"
                />
                {emailError && (
                  <span className="helper-text">
                    El formato del email no es válido.
                  </span>
                )}
              </Form.Group>

              <Form.Group className="container my-5" controlId="Password">
                <Form.Label>
                  <HiLockClosed className="me-2" />
                  Ingrese su contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  value={contraseñaLogin}
                  onChange={(e) => setContraseñaLogin(e.target.value)}
                  placeholder="****************"
                  autoComplete="username"
                />
                {passwordError && (
                  <span className="helper-text">
                    La contraseña debe contener al menos 2 caracteres
                    alfabéticos, 2 caracteres numéricos y tener una longitud
                    mínima de 6 caracteres.
                  </span>
                )}
              </Form.Group>
              <div onClick={() => handleClick("/Error404")}>
                ¿Olvido su contraseña?
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="botonLogin bg-transparent mt-3"
                  id="botonLogin"
                >
                  Ingresar
                  <HiLogin className="icons ms-2" />
                </Button>
              </div>
            </Form>
          </div>
          <div className="container">
            <hr />
          </div>

          <div className="text-center my-3">¿Aun no estas registrado?</div>
          <div className="d-flex column align-items-center justify-content-center">
            <Button
              className="botonLogin bg-transparent my-3"
              id="botonLogin"
              onClick={() => handleClick("/FormSignIn")}
            >
              Registrate
              <HiOutlineClipboardList className="ms-2 icons" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
