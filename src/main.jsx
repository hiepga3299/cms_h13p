import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./page/Login.jsx";
import Dashboard from "./page/Dashboard.jsx";
import { ToastContainer } from "react-toastify";
import { ToastProvider } from "./context/ToastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </ToastProvider>
);
