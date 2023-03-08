import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AcercaDe from "../components/AcercaDe";
import AdminView from "../components/Admin/AdminView";
import Error404 from "../components/Error404";
import FormContacto from "../components/FormularioContacto/FormContacto";
import FormLogin from "../components/FormLogin/FormLogin";
import FormSignIn from "../components/FormSigIn/FormSignIn";
import jwt_decode from "jwt-decode";
import MainView from "../components/View/MainView";
import NavBarCode from "../components/Navbar/NavBarCode";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SelectTable from "../components/Table/SelectTable";

import PrivateRoute from "./PrivateRoute";
import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRouteActiveUser from "./PrivateRouteUser";

import "../components/ProductGrid/ProductGrid.css";



const Router = () => {

const [isAdmin,setIsAdmin]  = useState();
const [isActive,setIsActive]  = useState(false);

useEffect(() => {

  let token = sessionStorage.getItem("token");
  console.log(token);
  if (token) {
    const dataDecoded = jwt_decode(token);
    if(dataDecoded.isAdmin == true){

      setIsAdmin(true);    
    }
  }
  setIsActive(true);

}, [sessionStorage.getItem("token")]);


  return (
    <BrowserRouter>
      <NavBarCode />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/selectTable" element={<SelectTable />} />
        <Route path="FormContacto" element={<FormContacto />} />
        <Route path="AcercaDe" element={<AcercaDe />} />
        <Route path="Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate replace to="Error404" />} />
        <Route path="/FormSignIn" element={<FormSignIn />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/FormLogin" element={<FormLogin />} />
        

        {/* rutas protegidas Admin*/}

        <Route path="/" element={<PrivateRoute isAdmin={isAdmin}/>}>
          <Route path="/adminForm" element={<AdminView/>} />
        </Route>

        {/* rutas protegidas, solo para usuario logeado */}

        <Route path="/" element={<PrivateRouteUser isActive={isActive}/>}>
          <Route path="/products" element={<ProductGrid />} />
        </Route>

        

        {/* fin rutas protegidas */}

      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;
