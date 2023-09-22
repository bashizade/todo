import { useEffect, useState } from "react";
import Create from "./components/Todo/Create"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Axios } from "./configs/Axios";
import Toastify from "./components/Toastify";
import Task from "./components/Todo/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const getData = () => {
    Axios.get('tasks').then(res => {
      setTasks(res.data)
    }).catch(err=>{
      console.log(err);
      Toastify('error','خطا در دریافت اطلاعات')
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="text-center text-4xl mt-10 underline">ToDo List</div>
      <div className="flex flex-col justify-center items-center mt-10 text-right">
        <Create getData={getData} />
        <div className="w-full max-w-lg mt-5">
          {tasks.length > 0 && tasks.filter(person => person.complete != true).map(task => (
            <Task key={task.id} title={task.task} complete={task.complete} taskId={task.id} getData={()=>getData()} />
          ))}
        </div>
        <hr />
        <div className="w-full max-w-lg mt-5">
          {tasks.length > 0 && tasks.filter(person => person.complete != false).map(task => (
            <Task key={task.id} title={task.task} complete={task.complete} taskId={task.id} getData={()=>getData()} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
