import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CountState } from "./store";

export default function App() {
  const amountRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const counter = useSelector((state: CountState) => state.count);
  const amount = useSelector((state: CountState) => state.amount);

  const decrementHandler = () => dispatch({ type: "decrement" });
  const incrementHandler = () => dispatch({ type: "increment" });
  const changeAmountHandler = () => {
    dispatch({
      type: "change_amount",
      amount: amountRef.current?.value || 1,
    });
  };

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem",
        }}
      >
        <label htmlFor="count">Count by:</label>
        <input
          type="number"
          id="count"
          defaultValue={amount}
          onChange={changeAmountHandler}
          ref={amountRef}
          style={{
            width: "6rem",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #999",
          }}
        />
      </div>
    </div>
  );
}
