import { useState, useMemo } from "react";
import List from "./components/UI/List";

export default function App() {
  console.log("App rendered");

  const [show, setShow] = useState(false);
  const listItems = useMemo(() => {
    console.log("List memoized");
    return [4, 2, 0, 3, 1, 5];
  }, []);

  return (
    <div>
      <h1>This is the list</h1>
      <List items={listItems} />
      <button
        onClick={() => {
          console.log("click");
          setShow(true);
        }}
      >
        Show
      </button>
      {show && <h3>Shown</h3>}
    </div>
  );
}
