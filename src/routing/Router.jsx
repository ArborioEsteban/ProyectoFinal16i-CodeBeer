
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SelectTable from '../components/Table/SelectTable';
import '../components/ProductGrid/ProductGrid.css';
import NavBarCode from '../components/Navbar/NavBarCode';
import Error404 from '../components/Error404';
import AcercaDe from '../components/AcercaDe';
import FormContacto from "../components/FormularioContacto/FormContacto";

const Router = () => {
  return (
    <BrowserRouter>
    {/* <NavBarCode></NavBarCode> */}
      <Routes>
        {/* <Route path="/" element={ <App/> }/> */}
        <Route path="/products" element={ <ProductGrid /> }/>
        <Route path="/selectTable" element={ <SelectTable/> }/>
        <Route path='/' element={ <NavBarCode /> } >
        <Route path='FormContacto' element={ <FormContacto /> } />
        
        <Route path='AcercaDe' element={ <AcercaDe /> } />
        <Route path='Error404' element={ <Error404 /> } />
        <Route path='*' element={ <Navigate replace to="Error404"/> }/>


        </Route>
        <Route path='*' element={ <Error404 /> } />
        {/* <Route path='*' element={ <Navigate replace to="Error404"/> }/> */}
      
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
