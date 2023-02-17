import { Container } from "react-bootstrap"
import ItemsForm from "../../src/components/Admin/Form/ItemsForm"
import ItemsTable from "../../src/components/Admin/Table/ItemsTable"

const AdminView =() =>{
    const {modifyingItem, setModifyingItem} = useState (null)
    return (
        <Container className='my-5'>
          <h1 className="text-center">Panel de Adinistracion</h1>
           <hr/>
           <ItemsForm modifyingItem ={modifyingItem} />
           <ItemsTable setModifyingItem={setModifyingItem}/>
        </Container>
    )
}
 export default AdminView