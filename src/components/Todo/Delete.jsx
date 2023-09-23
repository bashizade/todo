import { Axios } from "../../configs/Axios";
import Toastify from "../Toastify";
import Swal from "sweetalert2";

const Delete = (taskId, getData) => {
  Swal.fire({
    title: "آیا مطمئن به حذف تسک هستید ؟",
    showCancelButton: true,
    confirmButtonText: "حذف",
    cancelButtonText: "خیر",
    cancelButtonColor: 'red'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Axios.delete("tasks/" + taskId)
        .then((res) => {
          Toastify("success", "با موفقیت حذف شد");
          getData();
        })
        .catch((err) => {
          console.log(err);
          Toastify("error", "خطا در ارسال درخواست");
        });
    } else if (result.isDenied) {
        Toastify("error", "حذف لغو شد");
    }
  });
};

export default Delete;
