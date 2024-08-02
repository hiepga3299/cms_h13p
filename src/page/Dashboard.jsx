import React, { useEffect } from "react";
import { useToast } from "../context/ToastContext";
import { showNotification } from "../helper/showNotify";

function Dashboard() {
  const { message, type, setMessage } = useToast();

  useEffect(() => {
    if (message) {
      showNotification(message, type);
    }
  }, [message, type, setMessage]);

  return <div>Dashboard</div>;
}

export default Dashboard;
