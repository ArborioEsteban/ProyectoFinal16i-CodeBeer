
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ProductGrid from './components/ProductGrid/ProductGrid';
import SelectTable from './components/Table/SelectTable';
import Router from "./routing/Router";
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import './index.css';



const App = () => {
  useEffect(() => {
    localStorage.setItem("user","Esteban");
    // localStorage.setItem("password","123456");
  }, []);
  

  return (
    <> 
      <Container>
        <Router />  
      </Container>
      
    </>
  );
}

export default App;
