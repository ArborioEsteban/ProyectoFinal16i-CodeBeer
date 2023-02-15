import React from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const FormSignIn = () => {
  const { register, handleSubmit: handleSignIn } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container ">
    <div className="container login rounded ">
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="py-3">Code & Beer </h1>
       
      </div>
      
      <div className="container">
      <hr />
        <h2 className="py-3 ms-2 ">Registrate</h2>
      </div>
      <Form onSubmit={handleSignIn(handleSubmit)} className="container px-4">
        <Form.Group className="pb-2" controlId="Nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            {...register("nombre", { required: true, maxLength: 20 })}
            placeholder="Ingrese su nombre"
          />
        </Form.Group>

        <Form.Group className="pb-2" controlId="correo">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("correo", { required: true, maxLength: 20 })}
            placeholder="Ingrese su email"
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Contraseña">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="container text-center">
          <button type="submit" className="botonIngresar py-2 mt-4">
            Guardar
          </button>
        </div>
      </Form>

      <Container className="px-4 py-3 text-center">
        <hr />
        <h5 className="py-3">O registrate con</h5>

<Row className="justify-content-md-center">
  
  <Col xs={12} md={6}>
        <Row className="py-1 mt-2 border">

          <Col xs={2} md={2} className='ms-4 pt-2 text-center'>
            <FaFacebookF />
          </Col>
          <Col xs={6} md={7} className='ms-2 pt-2 text-center'>
          <p>Facebook</p>
          </Col>
          </Row>
<Row className="py-1 mt-3 border">
<Col xs={2} md={2} className='ms-4 pt-2 text-center'>
            <FaGoogle />
          </Col>
          <Col xs={6} md={7} className='ms-2 pt-2 text-center'>
          <p>Google</p>
          </Col>
          </Row>   
          </Col>
         
          </Row>
        
      </Container>

      <hr />

      <div className="container text-center pt-2 pb-4">
        <div className="">
          <p>¿ya tenes cuenta?</p>

          <button type="submit" className="botonIngresar mt-2 py-2 ">
            Ingresar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormSignIn;
