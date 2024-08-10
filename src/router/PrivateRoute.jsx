import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

const PrivateRoute = () => {
  // Add your authentication logic here
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
