import { useState } from "react";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  console.log("App component rendered");
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prev) => prev.concat(task));
  };

  return (
    <div style={{ width: "60ch" }}>
      <AddTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} onFetch={setTasks} />
    </div>
  );
}
