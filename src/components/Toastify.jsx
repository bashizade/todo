import { toast } from "react-toastify";

const Toastify = (type,content) => {
    toast(content,{
        position: "bottom-right",
        type: type,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
        theme: "light",
    })
}
 
export default Toastify;