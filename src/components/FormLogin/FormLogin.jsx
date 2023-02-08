import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./FormLogin.css";

const FormLogin = () => {
  return (
    <div className='mx-3 rounded border login'>
<div className='p-4 text-center'> 
<h1> Completa los campos para iniciar sesión </h1>
    </div> 

    <Form className='p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese un Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese un Email" />
              </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingrese su contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
     
      
      
    </Form>
    <div className='container pb-3 px-5'>
    <div className='botonesLogin d-flex flex-column '>
    <Button className='colorBotones my-2' type='submit'>
Ingresar
    </Button>

    <Button className='colorBotones mb-2'  type="submit">
      Registrarse
    </Button>

    </div>
    </div>
    </div>
  )
}

export default FormLogin
