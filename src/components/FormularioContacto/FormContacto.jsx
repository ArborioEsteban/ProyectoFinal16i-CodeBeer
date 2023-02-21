import { useState } from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import { Alert, Form, Button, FormGroup, FormControl } from "react-bootstrap";

import "./Formulario.css";

const FormContacto = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit: handleRHF,
    handleSubmit,
  } = useForm();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const incluirTelefono = watch("incluirTelefono");

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <Form className="Formulario1" onSubmit={handleRHF(handleSubmit)}>
              {isError && (
                <Alert variant="danger">
                  {errorMessage || "Revise los campos"}
                </Alert>
              )}

              <h2 className="display-5 FormH2 text-light text-center">Formulario</h2>
              <Form.Group>
                <div className="py-2">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("nombre", {
                      required: true,
                      maxLength: 10,
                    })}
                    placeholder="Nombre Completo"
                  />
                  {errors.nombre?.type === "required" && (
                    <p>El campo nombre es requerido</p>
                  )}
                  {errors.nombre?.type === "maxLength" && (
                    <p>El campo nombre debe tener menos de 10 caracteres</p>
                  )}
                </div>
              </Form.Group>
              <FormGroup>
                <div className="py-2">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("direccion", {
                      required: true,
                    })}
                    placeholder="malvinas argentinas 123"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="py-2  ">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("email", {
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    })}
                    required
                    placeholder="Email"
                  />
                  {errors.email?.type === "pattern" && (
                    <p>El formato del email es incorrecto</p>
                  )}
            
                </div>
              </FormGroup>

              <div className="py-2">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type="text"
                  {...register("edad", {
                    validate: edadValidator,
                  })}
                  placeholder="Edad"
                />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
              </div>
              <FormGroup>
                <div className="py-2">
                  <Form.Label>Provincia</Form.Label>
                 <div className="Form-control">
                  <select {...register("pais")}>
                    <option value="es">Tucuman</option>
                    <option value="it">Salta</option>
                    <option value="fr">Jujuy</option>
                   
                    
          

                  </select>
               </div>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="py-2">
                  <Form.Label>¿Incluir teléfono?</Form.Label>
                  
                  <input type="checkbox" {...register('incluirTelefono')} />
                </div>
              </FormGroup>
              {incluirTelefono && (
                <div>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="text" {...register("telefono")} />
                </div>
              )}


              <div className="  mt-3 ">
               <FormGroup>
              
                <Button className=" btn-btn-dark form-control Button" type="submit" variant="dark" > 
                  Ingresar
                </Button>
               
                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContacto;
