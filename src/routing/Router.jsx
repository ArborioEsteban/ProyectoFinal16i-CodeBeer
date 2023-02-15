import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import LoginPage from '../pages/LoginPage';



const Router = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LoginPage/>}  />
        <Route path="/SignInPage" element={<SignInPage/>}  />
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
