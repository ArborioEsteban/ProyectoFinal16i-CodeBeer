import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiLogin, HiOutlineClipboardList, HiLockClosed } from "react-icons/hi";
import { HiEnvelope, HiUser } from "react-icons/hi2";

const FormSignIn = () => {
  const { register, handleSubmit: handleSignIn } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="mt-5 pt-5 px-4 container login rounded ">
        <div className="container">
          <hr />
          <h2 className="my-3 ms-2 ">Registrate</h2>
        </div>
        <Form
          onSubmit={handleSignIn(handleSubmit)}
          className="form container py-4 px-4"
        >
          <Form.Group className="mt-3" controlId="Nombre">
            <Form.Label>
              <HiUser className="me-2" />
              Ingrese su nombre
            </Form.Label>
            <Form.Control
              {...register("nombreRegistro", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Ingrese su nombre"
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="correo">
            <Form.Label>
              <HiEnvelope className="me-2" />
              Ingrese su Email
            </Form.Label>
            <Form.Control
              {...register("correoRegistro", { required: true, maxLength: 20 })}
              type="Email"
              placeholder="Ingrese su email"
            />
          </Form.Group>
          <Form.Group className="my-5" controlId="Password">
                <Form.Label>
                  <HiLockClosed className="me-2" />
                  Ingrese su contraseña
                </Form.Label>
                <Form.Control
                  {...register("contraseña", { required: true, maxLength: 20 })}
                  type="password"
                  placeholder="****************"
                />
              </Form.Group>

          <Form.Group
            className="container"
            controlId="CheckboxTerminosYCondiciones"
          >
            <Form.Check
              type="checkbox"
              label="Al hacer click aqui acepta nuestros terminos y condiciones"
            />
          </Form.Group>
          <div className="container text-center">
            <Button
              type="submit"
              className="bg-transparent mt-3"
              id="botonLogin"
            >
              Registrarse
              <HiOutlineClipboardList className="icons ms-2" />
            </Button>
          </div>
        </Form>

        <div className="text-center">
          <h5 className="my-4">O registrate con</h5>
        </div>
        <Container className="px-4  text-center">
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <Row className="py-1 border">
                <Col xs={2} md={2} className="ms-4 pt-2 text-center">
                  <FaFacebookF />
                </Col>
                <Col xs={6} md={7} className="ms-2 pt-2 text-center">
                  <p>Facebook</p>
                </Col>
              </Row>
              <Row className="py-1 mt-3 border">
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
                type="submit"
                className="bg-transparent mt-2 mb-4"
                id="botonLogin"
              >
                Ingresar
                <HiLogin className="icons ms-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
