
import { toast } from "react-toastify";
import i18n from './../Components/Localize/i18n';


export default function toastPopup(type, text) {
 
  const lang = i18n.language; 



  if (type === "error") {
    toast.error(text, {
      position:
        lang === "ar" ? toast.POSITION.TOP_RIGHT : toast.POSITION.TOP_LEFT,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (type === "success") {
    toast.success(text, {
      position:
        lang === "ar" ? toast.POSITION.TOP_RIGHT : toast.POSITION.TOP_LEFT,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
 
  
};

 
