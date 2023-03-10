import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteUser = () => {
  const isActive = JSON.parse(sessionStorage.getItem("isActive"));
  if (!isActive) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRouteUser;
