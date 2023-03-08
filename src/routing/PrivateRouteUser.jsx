import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteUser = ({ isActive}) => {
  console.log(isActive);
  

  if (!isActive) {
    return <Navigate to="/" />;
  }else{
    return <Outlet />;
  }

};

export default PrivateRouteUser;
