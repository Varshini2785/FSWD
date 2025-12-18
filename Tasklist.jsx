import { useState } from "react";


function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask
      }
    ]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <div className="dashboard">
        <h1>Task Dashboard</h1>

        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul className="task-list">
          {tasks.length === 0 && (
            <p className="empty">No tasks added yet.</p>
          )}

          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <button
                className="delete"
                onClick={() => removeTask(task.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasklist;
