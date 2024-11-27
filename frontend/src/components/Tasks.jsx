export function Tasks({ tasks, fun}) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <h1>{task.tasks}</h1>
            <h2>{task.description}</h2>
            <button onClick={() => fun(task._id)}>
              {task.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
