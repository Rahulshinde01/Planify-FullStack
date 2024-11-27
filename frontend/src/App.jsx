import { useEffect, useState } from "react";
import "./App.css";
import { CreateTasks } from "./components/CreateTasks";
import { Tasks } from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    function fun() {
      fetch("http://localhost:3000/").then(async (res) => {
        const json = await res.json();
        setTasks(json.allTasks);
      });
    }
    fun();
  }, [loader]);

  function taskAddedRender(){
    setLoader((prev) => !prev)
  }


  async function updateStatus(taskId){
    const response = await fetch("http://localhost:3000/update",{
      method: "PUT",
      body: JSON.stringify({id : taskId}),
      headers: {
        "Content-Type": "application/json",
      }
    }
    )
    
    if(response.ok){
      taskAddedRender();
    }else{
      alert("can't update the task")
    }

  }

 

  return (
    <>
      <CreateTasks renderFun = {taskAddedRender}></CreateTasks>
      <Tasks tasks={tasks} fun = {updateStatus}></Tasks>
    </>
  );
}

export default App;
