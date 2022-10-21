import classes from "./Checkout.module.css";

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

      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}
