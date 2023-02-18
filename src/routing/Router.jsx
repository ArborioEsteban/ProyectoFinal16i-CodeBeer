
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import App from '../App';
// import Navbar from '../components/Navbar/Navbar';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import SelectTable from '../components/Table/SelectTable';
import '../components/ProductGrid/ProductGrid.css';
import NavBarCode from '../components/Navbar/Navbar';
import Error404 from '../components/Error404';


const Router = () => {
  return (
    <BrowserRouter>

      <Routes>
        {/* <Route path="/" element={ <App/> }/> */}
        <Route path="/products" element={ <ProductGrid /> }/>
        <Route path="/selectTable" element={ <SelectTable/> }/>
        <Route path='/' element={ <NavBarCode /> } >
        <Route path='Error404' element={ <Error404 /> } />
        <Route path='*' element={ <Navigate replace to="Error404"/> }/>
        </Route>
      
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
