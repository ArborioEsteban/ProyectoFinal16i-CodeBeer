import axios from '../../api/axios';
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import './table.css'




const ItemsTableItem = (props) => {
    const {productID
        ,name,price,image, category,description, isActive,quantity, setModifyingItem}= props;
        

   const handleEdit = ()=>{
    
    setModifyingItem(productID);
   }


   const handleDelete = ()=>{
    Swal.fire({
        title:'Cambiar estado del Producto',
        text:'¿Estas seguro?',
        icon:'warning',
        background: "#ecb465",
        showCancelButton: true,
        cancelButtonText:'Cancelar'
   }).then(async (res) =>{
    if(res.isConfirmed){
        //eliminar
     const res = await axios().delete(`/product/${productID
     }`);
        if (res.status === 200){
            Swal.fire({
                title:'Operacion exitosa',
                text:'Estado modificado correctamente',
                icon:'success',
                timer:2000,
                background: "#ecb465",
                showCancelButton: false,
                showConfirmButton: false,
            }).then(()=>{
                // window.location.reload();
            });
        } else {
            Swal.fire({
                title:'Error',
                text:`Ocurrio un error al modificar el estado, que es: ${res.statusText}`,
                icon:'success',
                timer:2000,
                background: "#ecb465",
                showCancelButton: false,
                showConfirmButton: false,
            });
        }
    }
   });
   }

  return ( 
            <tr>
                
                <td>{name}</td>
                <td>${price}</td>
                <td>
                    <img src={image} className='imgTable' alt={name}/>
                </td>
                <td>{description}</td>
                <td>{category}</td>

                <td>{isActive ? 'Habilitado' : 'Desactivado'}</td>
                
                <td>
                    <Button  className='me-1 botonGeneral' onClick={handleEdit}>Editar</Button>
                    <Button className='botonGeneral' variant='danger' onClick={handleDelete}>
                        {isActive ? 'Desactivar' : 'Activar' }</Button>
                </td>
            </tr>
  )
}

export default ItemsTableItem