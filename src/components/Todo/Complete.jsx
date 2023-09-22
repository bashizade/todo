import { Axios } from "../../configs/Axios";
import Toastify from "../Toastify";

export const Complete = (title,taskId,getData) => {
    Axios.put('tasks/'+taskId,{
        task: title,
        complete: true
    }).then(res => {
        Toastify("success","با موفقیت تایید شد");
        getData();
    }).catch(err => {
        Toastify("error","خطا در ارسال اطلاعات");
        console.log(err)
    })
}