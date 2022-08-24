import { useEffect, useState } from "react";
import Flex from "./Flex";

export default function Tasks(props) {
  console.log('Tasks component rendered')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchTasks = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(
        "https://react-workshop-679c8-default-rtdb.firebaseio.com/tasks.json"
      );
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = await res.json();
      const tasks = Object.keys(data).map((key) => ({
        id: key,
        text: data[key].text,
      }));
      props.onFetch(tasks);
    } catch (error) {
      console.error(error);
      setIsError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
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
      <p style={{color: 'crimson', fontWeight: 'bold'}}>Something went wrong.</p>
      <button onClick={props.onFetch}>Try again</button>
      </>);
  }
  if (isLoading) {
    content = "Loading tasks...";
  }
  return <Flex direction="column">{content}</Flex>;
}
