import { useEffect } from "react";
import useRequest from "../hooks/use-request";
import Flex from "./Flex";

export default function Tasks(props) {
  console.log("Tasks component rendered");
  const { isLoading, isError, sendRequest: fetchTasks } = useRequest();
  useEffect(() => {
    fetchTasks((data) => {
      const tasks = Object.keys(data).map((key) => ({
        id: key,
        text: data[key].text,
      }));
      props.onFetch(tasks);
    });
  }, []);

  let content = <h2>No Tasks to do</h2>;
  if (props.items.length) {
    content = (
      <ul>
        {props.items.map(({ id, text }) => (
          <li key={id}>{text}</li>
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
  return <Flex direction="column">{content}</Flex>;
}
