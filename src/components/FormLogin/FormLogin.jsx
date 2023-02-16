import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import { Button } from "react-bootstrap";
import { HiLogin, HiOutlineClipboardList, HiLockClosed } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

import "./FormLogin.css";

const FormLogin = () => {
  const { register, handleSubmit: handleLogin } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-5">
      <div className=" mx-5">
        <div className="p-3 py-4 login rounded">
          <div>
            <h2 className="ms-2 my-2">Iniciar sesión</h2>
            <hr className="mt-4" />
          </div>
          <div className="form">
            <Form
              onSubmit={handleLogin(handleSubmit)}
              className="container px-4 pt-5"
            >
              <Form.Group className="container " controlId="email">
                <Form.Label>
                  <HiEnvelope className="me-2" />
                  Ingrese su Email
                </Form.Label>
                <Form.Control
                  {...register("email", { required: true, maxLength: 20 })}
                  type="email"
                  placeholder="Coloque un Email"
                />
              </Form.Group>

              <Form.Group className="container my-5" controlId="Password">
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
              <a href="" className="icons">
                ¿Olvido su contraseña?
              </a>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-transparent mt-3"
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
            <Button className="bg-transparent my-3" id="botonLogin">
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
