import { setAuth } from "../redux/authSlice";
import { checkUser } from "@/services/userService";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Add your authentication logic here
  const { isAuthentication } = useSelector((state) => state.auth);
  return isAuthentication ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
