import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar__warrper">
      <div className="sidebar__logo flex justify-center items-center">
        <img src="logo.svg" alt="" />
        <span>TaildwindCSS</span>
      </div>
      <div className="sidebar__menu mt-3 ml-5">
        <div className="icon__dashboard mt-2 inline-block">
          <Link
            to={"/"}
            className="flex text-white text-xl  items-center cursor-pointer"
          >
            <RiDashboardFill className="mr-2" />
            <span className="">Dashboard</span>
          </Link>
        </div>
        <div className="icon__user mt-2 inline-block">
          <Link
            to={"/user"}
            className="flex text-white text-xl items-center cursor-pointer"
          >
            <FaUser className="mr-2" />
            <span className="text-xl">Người dùng</span>
          </Link>
        </div>
        <div className="icon__user mt-2 inline-block">
          <Link
            to={"/product"}
            className="flex text-white text-xl items-center cursor-pointer"
          >
            <FaStore className="mr-2" />
            <span className="text-xl">Sản phẩm</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
