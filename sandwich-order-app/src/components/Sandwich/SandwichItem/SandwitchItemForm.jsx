import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./SandwichItemForm.module.css";

export default function SandwichItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (
      enteredAmount === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      return setAmountIsValid(false);
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount-${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
}
