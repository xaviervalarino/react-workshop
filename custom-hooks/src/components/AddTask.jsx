import { useRef } from "react";
import Card from "./UI/Card";
import useRequest from "../hooks/use-request";

export default function AddTask(props) {
  console.log("AddTask component rendered");
  const inputRef = useRef("");
  const { isLoading, isError, sendRequest: addTask } = useRequest("POST");
  const addTaskHandler = async (event) => {
    event.preventDefault();
    const task = inputRef.current.value;
    if (!task.trim().length) {
      return;
    }
    addTask({ text: task }, ({ name }) =>
      props.onAddTask({ id: name, text: task })
    );
  };

  return (
    <form onSubmit={addTaskHandler}>
      <Card>
        <input type="text" ref={inputRef} style={{ flex: "1" }} />
        <button>{isLoading ? "Sending..." : "Add Task"}</button>
      </Card>
    </form>
  );
}
