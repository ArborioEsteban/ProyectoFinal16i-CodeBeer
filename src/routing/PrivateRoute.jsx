import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAdmin }) => {
  console.log(isAdmin);
  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
