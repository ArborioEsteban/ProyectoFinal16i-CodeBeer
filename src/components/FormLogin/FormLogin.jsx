import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import SignInPage from "../../pages/SignInPage";


import "./FormLogin.css";
import swal from "sweetalert2";

const FormLogin = () => {
  
  const {register, handleSubmit: handleLogin} = useForm();


  const handleSubmit = (data) =>{

    console.log(data);
    
  

  };
 

  return (
    <div className="mx-3 login rounded p-3">
      <div className="p-4 mt-3 text-center">
        <h1>Te damos la bienvenida a Code & Beer </h1>
      </div>
      <div className="container mt-2">
        <h2 className="ms-2">Iniciar sesión</h2>
      </div>
      <div className="mx-2 mt-3 form">
        <Form onSubmit={handleLogin(handleSubmit)} className="p-4">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Ingrese un Email</Form.Label>
            <Form.Control
            {... register('email', {required: true, maxLength: 20})}
             type= "email"
                                       
              placeholder="Ingrese un Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Ingrese su contraseña</Form.Label>
            <Form.Control 
             {...register('contraseña', { required: true, maxLength: 20 })}  
             type="password" placeholder="Contraseña" />
          </Form.Group>
          <a href="" className="enlaces">
            ¿Olvido su contraseña?
          </a>
          <button type="submit" className="botonIngresar ms-5 mt-4">
            Ingresar
          </button>
        </Form>
      </div>
      <div className="container d-flex justify-content-center my-4 ">
        <div></div>
      </div>
      <hr />

      <div className="container d-flex justify-content-center mt-4 mb-3">
        <div className="">
          <p>¿No tenes cuenta?</p>
          
            Registrate
          
        </div>
      </div>
    </div>
  );
  }

export default FormLogin;
