import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

import "./SelectTable.css";

const SelectTable = () => {
  const { register, handleSubmit: handleRHF } = useForm();

  const navigate = useNavigate();

  // aqui tengo que obtener el nombre del usuario q inicie sesion
  let userName = sessionStorage.getItem("userName");

  return (
    <>
      <div className="d-flex justify-content-center flex-column text-center container">
        <div className="">
          <h2 className="textBienvenidos mt-5">Bienvenido {userName}</h2>

        </div>
      </div>

      <div className="d-flex justify-content-center flex-column text-center g-1">

        <form
          onSubmit={handleRHF((data) => {
            let nmesa = data.numMesa;

            sessionStorage.setItem("mesa", nmesa);

            Swal.fire({
              title: "Bienvenido a Code&Beer",
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
              background: "#ecb465",
            }).then(() => {
              navigate("/products");
            });
          })}
          className="bg-transparent fs-3 my-1 text-center align-content-center"
        >
          <label className="textBienvenidos mt-5 bg-transparent align-content-center m-auto text-center w-100">
            Seleccione su Mesa
          </label>
          <select
            {...register("numMesa", { required: true })}
            className="mt-5 bg-transparent align-content-center m-auto text-center w-50"
          >
            <option
              value=""
              className="bg-dark align-content-center text-center text-white"
            ></option>
            <option
              value="1"
              className="bg-dark align-content-center m-auto text-center text-white"
            >
              1
            </option>
            <option
              value="2"
              className="bg-dark align-content-center m-auto text-center text-white"
            >
              2
            </option>
            <option
              value="3"
              className="bg-dark align-content-center m-auto text-center text-white"
            >
              3
            </option>
            <option
              value="4"
              className="bg-dark align-content-center m-auto text-center text-white"
            >
              4
            </option>
            <option
              value="5"
              className="bg-dark align-content-center m-auto text-center text-white"
            >
              5
            </option>
          </select>

          <Button
            type="submit"
            className="bg-transparent w-50 h-25 px-2 my-5 text-white fs-6"
            id="btnTable"
          >
            Continuar
          </Button>
        </form>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default SelectTable;
