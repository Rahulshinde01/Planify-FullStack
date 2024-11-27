import { useState } from "react";

export function CreateTasks({renderFun}) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  async function addingData() {
    const response = await fetch("https://planify-fullstack.onrender.com/add", {
      method: "POST",
      body: JSON.stringify({
        tasks: task,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    
    if(response.ok){
      renderFun();
      alert("task is created successfully")
    }
    else{
      alert("error while creating the task")
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button type="button" onClick={
        ()=>{
          if(!task || !description){
            alert("Please enter task and description both");
          }
          else{
            addingData()
          }
        }
      }>
        Add Task
      </button>
    </div>
  );
}
