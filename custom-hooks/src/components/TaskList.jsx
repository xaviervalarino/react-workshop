import { useEffect } from "react";
import useRequest from "../hooks/use-request";

import Card from "./UI/Card";
import Task from "./Task";

import cls from "./TaskList.module.css";

export default function TaskList(props) {
  console.log("Tasks component rendered");
  const { isLoading, isError, sendRequest: fetchTasks } = useRequest("GET");
  useEffect(() => {
    fetchTasks((data) => {
      const tasks = !data
        ? []
        : Object.keys(data).map((key) => ({
            id: key,
            text: data[key].text,
          }));
      props.onSetTasks((prev, props) => {
        return prev.length === tasks.length ? prev : tasks;
      });
    });
  }, []);

  let content = <h2>No Tasks to do</h2>;
  if (props.items.length) {
    content = (
      <ul className={cls.list}>
        {props.items.map(({ id, text }) => (
          <Task
            key={id}
            id={id}
            text={text}
            onUpdate={props.onUpdateTask}
            onDelete={props.onDeleteTask}
          />
        ))}
      </ul>
    );
  }
  if (isError) {
    content = (
      <>
        <p style={{ color: "crimson", fontWeight: "bold" }}>
          Something went wrong.
        </p>
        <button onClick={props.onFetch}>Try again</button>
      </>
    );
  }
  if (isLoading) {
    content = "Loading tasks...";
  }
  return <Card direction="column">{content}</Card>;
}
