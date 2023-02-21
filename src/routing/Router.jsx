import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SelectTable from "../components/Table/SelectTable";
import "../components/ProductGrid/ProductGrid.css";
import NavBarCode from "../components/Navbar/NavBarCode";
import Error404 from "../components/Error404";
import FormSignIn from "../components/FormSigIn/FormSignIn";
import FormLogin from "../components/FormLogin/FormLogin";

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SelectTable from '../components/Table/SelectTable';
import '../components/ProductGrid/ProductGrid.css';
import NavBarCode from '../components/Navbar/NavBarCode';
import Error404 from '../components/Error404';
import App from '../App';
import ItemsForm from '../components/Admin/Form/ItemsForm';
import AdminView from '../components/Admin/AdminView';
import FormContacto from '../components/FormularioContacto/FormContacto';
import AcercaDe from '../components/AcercaDe';




const Router = () => {
  return (
    <BrowserRouter>
      <NavBarCode />
      <Routes>
        {/* <Route path="/" element={ <App/> }/> */}
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/selectTable" element={<SelectTable />} />
        <Route path="/FormLogin" element={<FormLogin />} />
        <Route path='FormContacto' element={ <FormContacto /> } />
        <Route path='AcercaDe' element={ <AcercaDe /> } />
        <Route path='Error404' element={ <Error404 /> } />
        <Route path='*' element={ <Navigate replace to="Error404"/> }/>


        <Route path="/FormSignIn" element={<FormSignIn />} />
        <Route path="*" element={<Error404 />} />
        {/* <Route path='*' element={ <Navigate replace to="Error404"/> }/> */}
        <Route path='adminForm' element={ <AdminView/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
