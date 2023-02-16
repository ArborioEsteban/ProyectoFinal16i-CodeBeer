import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import NavBarCode from '../components/Navbar/Navbar';
import Error404 from '../components/Error404';






const Router = () => {
  return (
    <BrowserRouter>
     
      <Routes>
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
