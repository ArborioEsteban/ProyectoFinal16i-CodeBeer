import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteUser = ({ isActive }) => {
  if (!isActive) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRouteUser;
