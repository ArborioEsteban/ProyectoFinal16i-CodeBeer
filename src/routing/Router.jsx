import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AcercaDe from '../components/AcercaDe';

import NavBarCode from '../components/Navbar/Navbar';
import Error404 from '../components/Error404';
import Inicio from '../components/Inicio';





const Router = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={ <NavBarCode /> } >
        <Route index element={<Inicio/>} />
        <Route path='AcercaDe' element={ <AcercaDe /> } />
        <Route path='Inicio' element={ <Inicio /> } />
        <Route path='Error404' element={ <Error404 /> } />
        <Route path='*' element={ <Navigate replace to="Error404"/> }/>


        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
