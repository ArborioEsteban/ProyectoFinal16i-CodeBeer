import { useEffect, useState } from 'react'
import axios from '../../api/axios';
import {Button, Container,Form} from 'react-bootstrap';
import Swal from 'sweetalert2';

import { validateDate } from '../../../hellpers/validateDate';


const ItemsForm = (props) => {

        const {modifyingItem} = props;

        const[name,setName]= useState();
        const[price,setPrice]=useState();
        const[image,setImage]=useState();
        const[description,setDescription]=useState(); 
        const[category,setCategory]=useState(); 
        const[quantity,setQuantity]=useState(); 
        const[available,setAvailable]=useState(); 
        
        useEffect(()=>{
                    const fetchItems = async () =>{
                    const res = await axios.get(`/products`);
                    const items = res.data;
                    
                    const itemToModify = items.find (
                        (element) => element.productID === modifyingItem);
                        
                    setName(itemToModify.name);
                    setPrice (itemToModify.price);
                    setDescription (itemToModify.description);
                    setImage (itemToModify.image);
                    setCategory (itemToModify.category);

                };
                if(modifyingItem){
                    fetchItems();
                } 
        }, [modifyingItem]);
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateDate(name, price, description, image)) {
     
    
          //   Caso EDITAR
          if (modifyingItem) {
            const res = await axios.put(`/product/${modifyingItem}`, {

                productID:modifyingItem,
                name:name,
                price:price,
                image:image,
                description:description,
                category:category,
                // quantity:quantity,
                // isActive:true,
            });
    
            if (res.status === 200) {
              Swal.fire({
                title: 'Operacion exitosa',
                text: 'Elemento modificado correctamente',
                icon: 'success',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
              }).then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire({
                title: 'Error',
                text: `Ocurrio un error al editar el elemento, que es: ${res.statusText}`,
                icon: 'error',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
              });
            }
    
            return;
          }
    
          //   Caso CREAR
          const res = await axios.post(`/product`, {
            
            name:name,
            price:price,
            description:description,
            image:image,
            category:category,
            
          });
    
          if (res.status === 200) {
            Swal.fire({
              title: 'Operacion exitosa',
              text: 'Elemento agregado correctamente',
              icon: 'success',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: `Ocurrio un error al guardar el elemento, que es: ${res.statusText}`,
              icon: 'error',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false,
            });
          }
        } else {
          // muestro error
          
    
          Swal.fire({
            title: 'Error',
            text: `Revise los campos`,
            icon: 'error',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      };


     return (
            <Form className='bg-dark text-light rounded w-100 Titulo mt-3'
            onSubmit={handleSubmit}>
                
              <Container>
                <h2 className='Titulo'>{modifyingItem ? "Editar Productos"  : "Crear Productos"}</h2>
                <hr />
                <Form.Group >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
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
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='3'
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                <Form.Group className='mt-2'>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        
                        type='text'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                {/* <Form.Group className='mt-2'>
                <Form.Label>Producto disponible?</Form.Label>
                  <Form.Select aria-label="Estado del producto" className='formDescripcion bg-white'>
                    <option value="true" className='formDescripcion bg-dark text-light'>Disponible</option>
                    <option value="2" className='formDescripcion bg-dark text-light'>No disponible</option>
                    
                  </Form.Select>
                </Form.Group> */}

                {/* <Form.Group className='mt-2'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        
                        type='number'
                        value={1}
                        // onChange={(e) => setCategory(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group> */}

                

                    <div className='text-end mt-3'>
                        <Button type='submit' className='botonGeneral'>Guardar</Button>
                    </div>
                 </Container>
            </Form>
);
};

export default ItemsForm;