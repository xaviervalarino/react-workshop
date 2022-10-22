import { useSelector, useDispatch } from "react-redux";
import { CountState } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: CountState) => state.count);
  const decrementHandler = () => dispatch({ type: "decrement" });
  const incrementHandler = () => dispatch({ type: "increment" });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "2rem",
      }}
    >
      <h3>Redux Counter</h3>
      <div style={{ fontSize: "5rem" }}>{counter}</div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  );
}
