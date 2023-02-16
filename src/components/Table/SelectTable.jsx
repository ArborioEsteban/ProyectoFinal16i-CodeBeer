import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';



import './Table.css';

const SelectTable = () => {

  const [mesa, setMesa] = useState();



  const navigate = useNavigate();

  return (

    <div className='d-flex  justify-content-center flex-column text-center my-3 vh-100'>
        <h2 className='textBienvenidos my-5'>Bienvenido "USUARIO" a Code & Beer</h2>

        <Form.Group className='bg-transparent fs-3 my-5 text-center align-content-center'> 
        <Form.Label> Ingrese su numero de Mesa</Form.Label>
          <Form.Control
          className='mt-5 bg-transparent align-content-center m-auto text-center text-white w-50'
            type='number'
            min={1}
            max={10}
            // value={mesa}
            required={true}
            onChange={(e) => setMesa(e.target.value)}
          />
        <Button 
        
        className="bg-transparent w-25 h-25 px-2 my-5 text-white fs-6" 
        id="btnTable"
        onClick={()=> navigate('/products')}>Continuar</Button>

        </Form.Group>
            
        
    </div>
  )
}

export default SelectTable