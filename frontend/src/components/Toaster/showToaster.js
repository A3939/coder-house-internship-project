import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const showToaster = (msg, type) => {
  toast(msg, { type });
};
