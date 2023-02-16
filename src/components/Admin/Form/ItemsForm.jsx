import {axios} from 'axios';
import { useState } from 'react'
import {Button, Container,Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { getRandomId } from '../../../hellpers/getRandomId';
const baseUrl = process.env.REACT_APP_BASE_URL



const ItemsForm = () => {
    const[name,SetName]= useState();
        const[price,setPrice]=useState();
        const[image,setImage]=useState();
        const[description,setDescription]=useState(); 
     
        const handleSubmit = async (e)=>{
            
            e.preventDeFault();}


     return (
            <Form className='bg-dark text-light rounded w-100'>
              <Container>
                <h2>Lista de Productos</h2>
                <hr />
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        value={name}
                        onChange={(e) => SetName(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type='url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>description</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='3'
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                    <div className='text.end'>
                        <Button type='submit'>Guardar</Button>
                    </div>
                 </Container>
            </Form>
)
}

export default ItemsForm