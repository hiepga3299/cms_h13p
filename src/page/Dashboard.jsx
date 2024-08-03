import React, { useEffect } from "react";
import { showNotification } from "../helper/showNotify";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "../redux/toastSlice";
// import { useToast } from "../context/ToastContext";

function Dashboard() {
  // const { message, type } = useToast();

  // useEffect(() => {
  //   if (message) {
  //     showNotification(message, type);
  //   }
  // }, [message, type]);

  const { type, message } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    showNotification(message, type);
    dispatch(clearToast());
  }, [type, message]);

  return <div>Dashboard</div>;
}

export default Dashboard;
