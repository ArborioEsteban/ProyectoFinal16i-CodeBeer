
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid/ProductGrid';
import SelectTable from './components/Table/SelectTable';
import Router from "./routing/Router";
import {BrowserRouter, Routes , Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <Container>
      <div className='text-center my-2'>
        {/* <h1>Code & Beer - Navbar</h1>   */}
        <Router/>
      </div>
    </Container>
  );
}

export default App;
