import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteActiveUser = ({isActive}) => {
  if (!isActive) {
    return <Outlet />;
  }
  return <Navigate to="/"/>;
};

export default PrivateRouteActiveUser;
