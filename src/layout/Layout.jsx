import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout__wapper">
      <div className="layout__container flex">
        <div className="layout__sidebar fixed">
          <Sidebar />
        </div>
        <div className="layout__main">
          <div className="layout__header bg-white w-full fixed">
            <Header />
          </div>
          <div className="layout__content">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
