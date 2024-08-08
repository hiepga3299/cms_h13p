import React from "react";
import { IoReorderFourOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="header__container h-54px flex justify-between items-center">
      <div className="header__outline text-4xl ml-2 hover:cursor-pointer">
        <IoReorderFourOutline />
      </div>
      <div className="header-right">
        <div className="icon__notification">
          <IoIosNotifications />
        </div>
      </div>
    </div>
  );
};

export default Header;
