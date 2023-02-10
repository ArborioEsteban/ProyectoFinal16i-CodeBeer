
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Table from './components/Table/Table';


function App() {
  

  return (
    <Container>
      <div className='text-center my-2'>
        <h1>Code & Beer</h1>  
      </div>
      <ProductGrid />
      {/* <Table/> */}
    </Container>
  );
}

export default App;
