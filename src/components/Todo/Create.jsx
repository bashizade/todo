import { useFormik } from "formik";
import Button from "../Button";
import { Input } from "../Form";
import { CreateSchema } from "../../validations/Task"
import {Axios} from "../../configs/Axios";
import Toastify from "../Toastify"

const Create = ({getData}) => {
    const form = useFormik({
        initialValues: {
            task: "",
            complete: false
        },

        onSubmit: values => {
            Axios.post('/tasks', values).then(res => {
                Toastify("success","تسک مورد نظر با موفقیت ذخیره شد");
                getData()
                form.resetForm()
            }).catch( err => {
                console.log(err)
            })
        },

        validationSchema: CreateSchema
    })
    return (
        <div>
            <form className="" onSubmit={form.handleSubmit}>
                <div>
                    <Input type="text" placeholder="تکمیل بکند.." label="تسک مورد نظر خود را وارد کنید" name="task" value={form.values.task} onChange={form.handleChange} onBlur={form.handleBlur} />
                    <span>{form.errors.task && form.touched.task && form.errors.task}</span>
                </div>
                <Button type="submit" color="btn" text="افزودن" className="mt-3" />
            </form>
        </div>
    );
}

export default Create;