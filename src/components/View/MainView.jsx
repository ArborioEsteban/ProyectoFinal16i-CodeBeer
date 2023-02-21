import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './MainView.css'
import { FaBeer } from "react-icons/fa";
import { IconName, IoMdBeer } from "react-icons/io";

const MainView = () => {
    const navigate = useNavigate();


    const handleClick= () => {

            Swal.fire({
                title: 'Code&Beer',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
                background: '#ecb465',
            }).then(() => {
                navigate('/FormLogin');
            });
    }

  return (

    <>
        <Container className='d-flex  justify-content-center flex-column text-center mt-2 vh-100'>
            <h1 className='align-items-center mt-5 titulo textBienvenidos'>Bienvenidos a Code & Beer</h1>
            
            {/* <Button 
                onClick={()=>handleClick()}
                className="align-self-center bg-transparent w-50 h-25 px-2 my-5fs-4" 
                id="btnTable">
                
            </Button> */}
            <p className="align-self-center bg-transparent w-100 h-25 px-2 my-5 fs-4"
            onClick={()=>handleClick()} >
                Ingresar
                <IoMdBeer className="align-self-center bg-transparent w-100 h-25 px-2 my-5 fs-4"
                />
            </p>
        </Container>

    </>
  )
}

export default MainView