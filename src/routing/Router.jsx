
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SelectTable from '../components/Table/SelectTable';
import '../components/ProductGrid/ProductGrid.css';
import NavBarCode from '../components/Navbar/NavBarCode';
import Error404 from '../components/Error404';
import App from '../App';
import ItemsForm from '../components/Admin/Form/ItemsForm';
import AdminView from '../components/Admin/AdminView';


const Router = () => {
  return (
    <BrowserRouter>
    {/* <NavBarCode></NavBarCode> */}
      <Routes>
        {/* <Route path="/" element={ <App/> }/> */}
        <Route path="/products" element={ <ProductGrid /> }/>
        <Route path="/selectTable" element={ <SelectTable/> }/>
        <Route path='/' element={ <NavBarCode /> } >
        </Route>
        <Route path='*' element={ <Error404 /> } />
        {/* <Route path='*' element={ <Navigate replace to="Error404"/> }/> */}
        <Route path='adminForm' element={ <AdminView/> }/>
      
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
