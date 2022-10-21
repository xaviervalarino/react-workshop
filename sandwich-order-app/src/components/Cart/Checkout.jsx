import { useRef, useState } from "react";
import TextField from "../UI/TextField";
import Button, { ButtonGroup } from "../UI/Button";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

export default function Checkout(props) {
  const [formInputsValid, setFormInputsValid] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    setFormInputsValid({
      name: !isEmpty(nameInputRef.current.value),
      address: !isEmpty(addressInputRef.current.value),
      city: !isEmpty(cityInputRef.current.value),
      postalCode: isFiveChars(postalInputRef.current.value),
    });
  };

  return (
    <form>
      <TextField
        id="name"
        title="Your Name"
        error={!formInputsValid.name && "Please enter a valid name"}
        ref={nameInputRef}
      />
      <TextField
        id="address"
        title="Street Address"
        error={!formInputsValid.address && "Please enter a valid address"}
        ref={addressInputRef}
      />
      <div className={classes.inline}>
        <TextField
          id="city"
          title="City"
          error={!formInputsValid.city && "Please enter a valid city"}
          ref={cityInputRef}
        />
        <TextField
          id="postal"
          title="Postal Code"
          error={!formInputsValid.postalCode && "Please enter a valid postal code"}
          ref={postalInputRef}
        />
      </div>

      <ButtonGroup>
        <Button alt type="button" onClick={props.onCancel} text="Cancel" />
        <Button text="Confirm" onClick={confirmHandler} />
      </ButtonGroup>
    </form>
  );
}
