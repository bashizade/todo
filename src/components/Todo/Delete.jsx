import { Axios } from "../../configs/Axios";
import Toastify from "../Toastify";

const Delete = (taskId, getData) => {
    Axios.delete('tasks/' + taskId).then(res => {
        Toastify("success", "با موفقیت حذف شد");
        getData()
    }).catch(err => {
        console.log(err);
        Toastify("error", "خطا در ارسال درخواست")
    })
}

export default Delete;