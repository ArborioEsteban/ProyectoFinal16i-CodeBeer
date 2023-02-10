import { Button, FloatingLabel, Form } from 'react-bootstrap';
import './Table.css';

const Table = () => {
  return (
    <div className='d-flex  justify-content-center flex-column text-center my-3 vh-100'>
        <h2 className='textBienvenidos my-5'>Bienvenido "USUARIO" a Code & Beer</h2>
        <FloatingLabel controlId="SelectMesa"  label="Seleccione el numero de Mesa" className='fs-3 bg-transparent'>
            <Form.Select aria-label="label Seleccionar Mesa" className=' bg-transparent h-25 mt-5 align-items-center optionTable' >              
                <option value="1" className='text-center' id='optionForm' >1</option>
                <option value="2" className='text-center' >2</option>
                <option value="3" className='text-center' >3</option>
                <option value="4" className='text-center' >4</option>
            </Form.Select>
            <Button className="bg-transparent w-25 h-25 px-2 my-5 text-white fs-6" id="btnTable" >Continuar</Button>
        </FloatingLabel>
    </div>
  )
}

export default Table