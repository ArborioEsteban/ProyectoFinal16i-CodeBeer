import axios from '../../api/axios';
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import './table.css'




const ItemsTableItem = (props) => {
    const {id,name,price,image, category,description, available,quantity, setModifyingItem}= props;

   const handleEdit = ()=>{
    
    setModifyingItem(id);
   }

   const handleDelete = ()=>{
    Swal.fire({
        title:'Eliminar',
        text:'¿Estas seguro?',
        icon:'warning',
        showCancelButton: true,
        cancelButtonText:'Cancelar'
   }).then(async (res) =>{
    if(res.isConfirmed){
        //eliminar
     const res = await axios.delete(`/product/${id}`);
        if (res.status === 200){
            Swal.fire({
                title:'Operacion exitosa',
                text:'Elemento eliminado correctamente',
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            }).then(()=>{
                window.location.reload();
            });
        } else {
            Swal.fire({
                title:'Error',
                text:`Ocurrio un error al eliminar el elemento, que es: ${res.statusText}`,
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        }
    }
   });
   }

  return ( 
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                    <img src={image} className='imgTable' alt={name}/>
                </td>
                <td>{description}</td>
                <td>{category}</td>
                {/* <td>{quantity}</td> */}
                <td>
                    <Button  className='me-1 botonGeneral' onClick={handleEdit}>Editar</Button>
                    <Button className='botonGeneral' variant='danger' onClick={handleDelete}>Borrar</Button>
                </td>
            </tr>
  )
}

export default ItemsTableItem