import { toast } from "react-toastify";

export const showNotification = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};
