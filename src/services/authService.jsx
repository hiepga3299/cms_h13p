import axios from "../config/axios";
import "react-toastify/dist/ReactToastify.css";
import { showNotification } from "../helper/showNotify";

export const login = async (payload) => {
  try {
    await axios.post("/login", payload);
    return true;
  } catch (error) {
    showNotification(error.response.data, "error");
  }
};
