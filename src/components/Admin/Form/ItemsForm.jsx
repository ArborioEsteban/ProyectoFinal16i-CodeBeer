import {axios} from 'axios';
import { useEffect, useState } from 'react'
import {Button, Container,Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { getRandomId } from '../../../hellpers/getRandomId';
import { validateDate } from '../../../hellpers/validateDate';
const baseUrl = process.env.REACT_APP_BASE_URL



const ItemsForm = (props) => {
        const {modifyingItem, setModifyingItem} = props;

    const[name,SetName]= useState();
        const[price,setPrice]=useState();
        const[image,setImage]=useState();
        const[description,setDescription]=useState(); 

        useEffect(()=>{
             const fetchItems = async () =>{
                    const res = await axios.get(`${baseUrl}/items`)
                    
                    const items= res.data;
                    const itemToModify = items.find (
                        element => element.id === modifyingItem);

                    SetName (itemToModify.name);
                    setPrice (itemToModify.price);
                    setDescription (itemToModify.description);
                    setImage (itemToModify.image);
                };
                if(modifyingItem){
                    fetchItems()
                } 
        }, {modifyingItem})
     
        const handleSubmit = async (e)=>{
            
            e.preventDeFault();
        
        if (validateDate(name, price, description, image)){
            

            //Caso Editar
            if (modifyingItem){
                const res =await axios.put (`${baseUrl}/items/${modifyingItem}`, {   
                });
                if(res.status === 201){
                    Swal.fire ({
                    title:'Operacion exitosa',
                    text:'Elemento modificado correctamente',
                    icon:'success',
                    timer:2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                }); 
                SetName("");
                    setPrice("");
                    setDescription("");
                    setImage("");
                    setModifyingItem(null) ;
     
    
            }   else{
                Swal.fire ({
                    title:'Error',
                    text:'Ocurrio un error al editar el elemento,que es: ${res.statusText} ',
                    icon:'success',
                    timer:2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });  
            }  

            }
        //guardo los datos
           const res = await axios.post(`${baseUrl}/items`,{
                id:getRandomId(),
                name:name,
                price:price,
                description:description,
                image:image,
            })
            
            if(res.status === 201){
                Swal.fire ({
                title:'Operacion exitosa',
                text:'Elemento agregado correctamente',
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            }); 
            SetName("");
                setPrice("");
                setDescription("");
                setImage("")  
 

        }   else{
            Swal.fire ({
                title:'Error',
                text:'Ocurrio un error al guardar el elemento,que es: ${res.statusText} ',
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
            <Form className='bg-dark text-light rounded w-100'
            onSubmit={handleSubmit}>
                
              <Container>
                <h2>{modifyingItem ? "Editar Productos"  : "Crear Productos"}</h2>
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
                        onChange={(e) => setDescription(e.target.value)} 
                        className='formDescripcion'/>
                </Form.Group>
                    <div className='text-end mt-3'>
                        <Button type='submit' className='BotonGuardar'>Guardar</Button>
                    </div>
                 </Container>
            </Form>
)
}

export default ItemsForm