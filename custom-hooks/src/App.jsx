import { useState } from "react";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  console.log("App component rendered");
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prev) => prev.concat(task));
  };

  const deleteTaskHandler = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((task) => task.id == id);
      prev.splice(index, 1)
      return [...prev]
    });
  };

  return (
    <div style={{ width: "60ch" }}>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList items={tasks} onDeleteTask={deleteTaskHandler} onSetTasks={setTasks} />
    </div>
  );
}
