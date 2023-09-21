import * as Yup from "yup"
export const CreateSchema = Yup.object().shape({
    task: Yup.string("مقدار درست را وارد کنید").min(3,'حداقل 3 کاراکتر مجاز می باشد').required("عنوان تسک الزامی می باشد")
})