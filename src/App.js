
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import ProductGrid from './components/ProductGrid/ProductGrid';
import {ItemsForm} from './components/Admin/Form/ItemsForm';
import {ItemsTable} from './components/Admin/Table/ItemsTable'

function App() {
  return (
    <Container>
      <h1 className='text-center Titulo'>Code & Beer</h1>
        <ItemsForm/>
        <ItemsTable/>
     </Container>
  );
}

export default App;
