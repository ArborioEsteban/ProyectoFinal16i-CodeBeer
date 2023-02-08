
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carrito from './components/Carrito/Carrito';

import ProductGrid from './components/ProductGrid/ProductGrid';


function App() {
  

  return (
    <Container>
      <div className='text-center'>
        <h1>Code & Beer</h1>
        <Carrito />    
      </div>
      <ProductGrid />
    </Container>
  );
}

export default App;
