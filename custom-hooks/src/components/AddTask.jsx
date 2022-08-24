import { useRef } from "react";
import Flex from "./Flex";

export default function AddTask(props) {
  console.log("AddTask component rendered");
  const inputRef = useRef("");
  const addTaskHandler = async (event) => {
    event.preventDefault();
    const task = inputRef.current.value;
    if (!task.trim().length) {
      return;
    }
    try {
      const res = await fetch(
        "https://react-workshop-679c8-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: task }),
        }
      );
      if (!res.ok) {
        throw new Error("Request failed.");
      }
      const data = await res.json();
      const id = data.name;
      props.onAddTask({ id: data.name, text: task });
    } catch (error) {
      setError(error.message || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={addTaskHandler}>
      <Flex>
        <input type="text" ref={inputRef} style={{ flex: "1" }} />
        <button>{props.loading ? "Sending..." : "Add Task"}</button>
      </Flex>
    </form>
  );
}
