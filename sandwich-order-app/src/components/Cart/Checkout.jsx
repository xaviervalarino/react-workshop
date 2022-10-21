import TextField from "../UI/TextField";
import Button, { ButtonGroup } from "../UI/Button";
import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <TextField id="name" title="Your Name" />
      <TextField id="address" title="Street Address" />
      <div className={classes.inline}>
        <TextField id="city" title="City" />
        <TextField id="postal" title="Postal Code" />
      </div>

      <ButtonGroup>
        <Button alt type="button" onClick={props.onCancel} text="Cancel" />
        <Button text="Confirm" />
      </ButtonGroup>
    </form>
  );
}
