
import { useState } from "react";
import { Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBarCode from "../Navbar/NavBarCode";

import "./Table.css";


const SelectTable = () => {

  const { register, handleSubmit: handleRHF } = useForm();
  // const [data, setData] = useState("");
  const [mesa, setMesa] = useState(0);

  

  const navigate = useNavigate();

  const userLS = localStorage.getItem("user");
  // aqui tengo que obtener el nombre del usuario q inicie sesion

  return (
    <>
      <NavBarCode></NavBarCode>
    <div className="d-flex  justify-content-center flex-column text-center my-2 vh-100">
      <h2 className="textBienvenidos my-2">
        Bienvenido {userLS}
      </h2>
      

      <form onSubmit={handleRHF((data) => {
        let nmesa = data.numMesa;
        sessionStorage.setItem('mesa', nmesa);
        setMesa(nmesa);
        
        
        Swal.fire({
                title: 'Bienvenido a Code&Beer',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
                background: '#ecb465',
              }).then(() => {
                navigate('/products');
              });

      })}
      className="bg-transparent fs-3 my-5 text-center align-content-center"

      >
        <label className='textBienvenidos mt-5 bg-transparent align-content-center m-auto text-center w-100'>Seleccione su Mesa</label>
        <select {...register("numMesa", { required: true })}
        className='mt-5 bg-transparent align-content-center m-auto text-center w-50'>
          <option value=""  className='bg-dark align-content-center text-center text-white'></option>
          <option value="1"  className='bg-dark align-content-center m-auto text-center text-white'>1</option>
          <option value="2" className='bg-dark align-content-center m-auto text-center text-white'>2</option>
          <option value="3" className='bg-dark align-content-center m-auto text-center text-white'>3</option>
          <option value="4" className='bg-dark align-content-center m-auto text-center text-white'>4</option>
          <option value="5" className='bg-dark align-content-center m-auto text-center text-white'>5</option>
        </select>

        <Button 
        type='submit'
        className="bg-transparent w-50 h-25 px-2 my-5 text-white fs-6" 
        id="btnTable"
        
        >Continuar</Button>
      </form>
    </div>
    </>
  );
};

export default SelectTable;
