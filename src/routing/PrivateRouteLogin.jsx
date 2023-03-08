import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteLogin = () => {
  const isActive = JSON.parse(sessionStorage.getItem("isActive"));
  if (!isActive) {
    return <Outlet />;
  } else {
    return <Navigate to="/products" />;
  }
};

export default PrivateRouteLogin;
