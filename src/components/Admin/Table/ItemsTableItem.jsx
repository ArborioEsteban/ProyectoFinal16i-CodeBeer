import {axios} from 'axios'
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_BASE_URL;


const ItemsTableItem = (props) => {
    const {id,name,price,image,description}= props;

   const handleEdit = ()=>{}

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
     const res = await axios.delete(`${baseUrl}/items/${id}`)
        if (res.status === 200){
            Swal.fire({
                title:'Operacion exitosa',
                text:'Elemento eliminado correctamente',
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        } else {
            Swal.fire({
                title:'Error',
                text:'Ocurrio un error al eliminar el elemento, que es: ${res.statusText}',
                icon:'success',
                timer:2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        }
    }
   });
   }

  return ( <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>
        <img src={image} className='imgTable' alt={name}/>
    </td>
    <td>{description}</td>
    <td>
        <Button variant='primary' className='me-1' onClick={handleEdit}>Editar</Button>
        <Button variant='danger' onClick={handleDelete}>Borrar</Button>
    </td>
  </tr>
  )
}

export default ItemsTableItem