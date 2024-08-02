import axios from "../config/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const login = async (payload) => {
  try {
    await axios.post("/login", payload);
    return true;
  } catch (error) {
    toast.error(error.response.data);
  }
};
