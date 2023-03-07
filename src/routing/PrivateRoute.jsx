import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const isAdmin = JSON.parse(sessionStorage.getItem("isAdmin"));
console.log(isAdmin);

const PrivateRoute = () => {
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
