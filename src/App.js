
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid/ProductGrid';


function App() {
  return (
    <Container>
      <h1>Code & Beer</h1>
      <ProductGrid/>    
    </Container>
  );
}

export default App;
