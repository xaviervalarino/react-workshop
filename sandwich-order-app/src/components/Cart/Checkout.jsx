import classes from "./Checkout.module.css";
import Button, { ButtonGroup } from "../UI/Button";

export default function Checkout(props) {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.inline}>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
      </div>

      <ButtonGroup>
        <Button alt type="button" onClick={props.onCancel} text="Cancel" />
        <Button text="Confirm" />
      </ButtonGroup>
    </form>
  );
}
