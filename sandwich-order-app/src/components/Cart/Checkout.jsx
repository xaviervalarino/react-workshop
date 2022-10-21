import { useRef, useState } from "react";
import TextField from "../UI/TextField";
import Button, { ButtonGroup } from "../UI/Button";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;
const objMap = (obj, callback) => Object.fromEntries(Object.entries(obj).map(callback))

export default function Checkout(props) {
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });
  const refs = {
    name: useRef(),
    address: useRef(),
    city: useRef(),
    postalCode: useRef(),
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    const validatedInputs = objMap(refs, ([key, ref]) => {
        const value =
          key === "postalCode"
            ? isFiveChars(ref.current.value)
            : !isEmpty(ref.current.value);
        return [key, value];
      });
    setFormValidity(validatedInputs)

    if (Object.values(validatedInputs).includes(false)) {
      return
    }
    props.onConfirm(objMap(refs, ([key, ref]) => [key, ref.current.value]));
  };

  return (
    <form>
      <TextField
        id="name"
        title="Your Name"
        error={!formValidity.name && "Please enter a valid name"}
        ref={refs.name}
      />
      <TextField
        id="address"
        title="Street Address"
        error={!formValidity.address && "Please enter a valid address"}
        ref={refs.address}
      />
      <div className={classes.inline}>
        <TextField
          id="city"
          title="City"
          error={!formValidity.city && "Please enter a valid city"}
          ref={refs.city}
        />
        <TextField
          id="postal"
          title="Postal Code"
          error={!formValidity.postalCode && "Please enter a valid postal code"}
         ref={refs.postalCode}
        />
      </div>

      <ButtonGroup>
        <Button alt type="button" onClick={props.onCancel} text="Cancel" />
        <Button text="Confirm" onClick={confirmHandler} />
      </ButtonGroup>
    </form>
  );
}
