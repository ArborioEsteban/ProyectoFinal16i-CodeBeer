import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAdmin = JSON.parse(sessionStorage.getItem("isAdmin"));
  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
