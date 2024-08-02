import { createContext, useContext, useState } from "react";

const ToastContext = createContext(undefined);

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const setToast = (message, type) => {
    setMessage(message);
    setType(type);
  };
  return (
    <ToastContext.Provider value={{ message, type, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new "Some thing went wrong!"();
  }
  return context;
};
