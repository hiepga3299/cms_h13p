import "./index.css";
import Login from "./page/Login.jsx";
import Dashboard from "./page/Dashboard.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ToastProvider } from "./context/ToastContext.jsx";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import User from "./page/User";
import PrivateRoute from "./router/PrivateRoute";
import Layout from "./layout/Layout";
import AuthMiddleware from "./middleware/AuthMiddleware";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AuthMiddleware />}>
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user" element={<User />} />
              </Route>
            </Route>
          </Route>

          {/* <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ToastProvider>
  </Provider>
);
