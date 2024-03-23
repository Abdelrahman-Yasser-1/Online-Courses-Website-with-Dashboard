import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const errorNotify = (message) => toast.error(message, { ...options });

export const successNotify = (message) =>
  toast.success(message, { ...options });
