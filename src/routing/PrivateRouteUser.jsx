
import { Navigate, Outlet } from "react-router-dom";


const isActive = JSON.parse(sessionStorage.getItem("isActive"));
console.log(isActive);

const PrivateRouteUser = () => {
  
  return isActive ? <Outlet /> : <Navigate to="/FormLogin" />;
};

export default PrivateRouteUser;
