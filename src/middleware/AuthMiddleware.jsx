import { setAuth, setLogout } from "../redux/authSlice";
import { checkUser } from "@/services/userService";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AuthMiddleware = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthentication, userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    const data = async () => {
      if (!isAuthentication) {
        const response = await checkUser().then((res) => res);
        const user = response.data.data.user;
        if (user) {
          dispatch(setAuth(user));
        } else {
          dispatch(setLogout());
          navigate("/login");
        }
      }
    };
    data();
  }, [isAuthentication, userInfo]);
  return isAuthentication ? <Outlet /> : null;
};

export default AuthMiddleware;
