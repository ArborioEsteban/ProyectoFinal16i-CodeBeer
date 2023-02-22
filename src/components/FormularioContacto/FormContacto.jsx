import { useState } from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import { Alert, Form, Button, FormGroup, FormControl } from "react-bootstrap";
import Swal from 'sweetalert2';
import "./Formulario.css";

const FormContacto = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit: handleRHF,
    // handleSubmit,
  } = useForm();

  const handleSubmit = (e) => {
    Swal.fire({
      title: 'Mensaje Enviado, Gracias por comunicarte!',
      width: 600,
      padding: '3em',
      color: '#ecb465',
      allowOutsideClick:false,
      allowEscapeKey:false,
      confirmButtonText:'Continuar',
      confirmButtonColor:'#ecb465',
      background: '#064663 url(https://i.pinimg.com/originals/33/7d/11/337d113e8745328fb8d68c951c49eec6.gif)',
      backdrop: `
        rgba(0,0,45,0.6)
        url("")
        center
        repeat
      `
    }).then(() => {
        window.location.reload();
    });

  }

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
                      maxLength: 14,
                      minLength: 2,
                    })}
                    placeholder="Nombre Completo"
                    className={`py-2
            `} />
                  {errors.nombre?.type === "required" && (
                    <p className="text-danger">El campo nombre es requerido</p>
                  )}
                  {errors.nombre?.type === "maxLength" && (
                    <p className="text-danger">El campo nombre debe tener menos de 10 caracteres</p>
                  )}
                  {errors.nombre?.type === "minLength" && (
                    <p className="text-danger">El campo nombre debe tener mas de 2 caracteres</p>
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
                    placeholder="malvinas argentinas 123" />
                  {errors.direccion?.type === "required" && (
                    <p className="text-danger">El campo Direccion es requerido</p>
                  )}
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
                    placeholder="Email" />
                  {errors.email?.type === "pattern" && (
                    <p className="text-danger">El formato del email es incorrecto</p>
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
                  placeholder="Edad" />
                {errors.edad && <p className="text-danger">La edad debe estar entre 18 y 65</p>}
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

                  <Button className=" form-control Button" type="submit" variant="dark">
                    Enviar
                  </Button>

                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
        </div>
       
        <section className="w-50 mx-auto text-center pt-5 my-5">
        <h1 className="p-4 fs-2 border-top text-light border-3">Direccion</h1>

        <div className="map-responsive ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1676604491283!5m2!1ses-419!2sar"
            width="700"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
     </div>
    
     
      

  );
};

export default FormContacto;
