import Create from "./components/Todo/Create"
function App() {
  return (
    <>
      <div className="text-center text-4xl mt-10 underline">ToDo List</div>
      <div className="flex flex-col justify-center items-center mt-10 text-right">
        <Create />
      </div>
    </>
  )
}

export default App
