import axios from 'axios';
import { useEffect, useState } from 'react'
import {Button, Container,Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { getRandomId } from '../../../hellpers/getRandomId';
import { validateDate } from '../../../hellpers/validateDate';
// import ItemsTable from '../Table/ItemsTable';

const baseUrl = process.env.REACT_APP_BASE_URL;



const ItemsForm = (props) => {

        const {modifyingItem} = props;

        const[name,SetName]= useState();
        const[price,setPrice]=useState();
        const[image,setImage]=useState();
        const[description,setDescription]=useState(); 
        const[category,setCategory]=useState(); 
        const[quantity,setQuantity]=useState(); 
        const[available,setAvailable]=useState(); 
        
        useEffect(()=>{
             const fetchItems = async () =>{
                    const res = await axios.get(`${baseUrl}/products`);
                    const items = res.data;
                    
                    const itemToModify = items.find (
                        element => element.id === modifyingItem);

                    SetName (itemToModify.name);
                    setPrice (itemToModify.price);
                    setDescription (itemToModify.description);
                    setImage (itemToModify.image);
                    setCategory (itemToModify.category);
                    setAvailable (itemToModify.available);
                    setQuantity (itemToModify.quantity);
                };
                if(modifyingItem){
                    fetchItems()
                } 
        }, [modifyingItem])
     
        const handleSubmit = async (e)=>{
            
            e.preventDeFault();
        
        if (validateDate(name, price, description, image)){
            

            //Caso Editar
            if (modifyingItem){
                const res =await axios.put (`${baseUrl}/products/${modifyingItem}`, { 
                    id:getRandomId(),
                    name:name,
                    price:price,
                    description:description,
                    image:image,
                    category:category,
                    available:available, 
                    quantity:1,

                });
                if(res.status === 201){
                    Swal.fire ({
                    title:'Operacion exitosa',
                    text:'Elemento modificado correctamente',
                    icon:'success',
                    timer:2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                }).then(()=>{
                    window.location.reload();
                }); 
            
    
            }   else{
                Swal.fire ({
                    title:'Error',
                    text:`Ocurrio un error al editar el elemento,que es: ${res.statusText} `,
                    icon:'success',
                    timer:2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });  
            }  
        
            return;
            }
        //caso crear
           const res = await axios.post(`${baseUrl}/products`,{
                id:getRandomId(),
                name:name,
                price:price,
                description:description,
                image:image,
                category:category,
                available:available,
            })
            
            if(res.status === 201){
                Swal.fire ({
                title:'Operacion exitosa',
                text:'Elemento agregado correctamente',
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            }).then(()=>{
                window.location.reload();
            });

        }   else{
            Swal.fire ({
                title:'Error',
                text:`Ocurrio algun error ,Revise los campos. ${res.statusText} `,
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            });  
        }  
        } else{
            Swal.fire ({
                title:'Error',
                text:'Revise los campos',
                icon:'error',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            });   
        }
        
    }


     return (
            <Form className='bg-dark text-light rounded w-100 Titulo'
            onSubmit={handleSubmit}>
                
              <Container>
                <h2 className='Titulo'>{modifyingItem ? "Editar Productos"  : "Crear Productos"}</h2>
                <hr />
                <Form.Group >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        value={name || ""}
                        onChange={(e) => SetName(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type='number'
                        value={price || ""}
                        onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type='url'
                        value={image || ""}
                        onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='3'
                        type='text'
                        value={description || ""}
                        onChange={(e) => setDescription(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                <Form.Group className='mt-2'>
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        
                        type='text'
                        value={category || ""}
                        onChange={(e) => setCategory(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                <Form.Group className='mt-2'>
                    <Form.Label>Disponible</Form.Label>
                    <Form.Control
                        type='text'
                        value={available || ""}
                        onChange={(e) => setAvailable(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                <Form.Group className='mt-2'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        type='number'
                        value={quantity || ""}
                        onChange={(e) => setQuantity(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>

                    <div className='text-end mt-3'>
                        <Button type='submit' className='botonGeneral'>Guardar</Button>
                    </div>
                 </Container>
            </Form>
)
}

export default ItemsForm