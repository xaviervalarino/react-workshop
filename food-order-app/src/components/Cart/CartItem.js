import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const price = `$${props.price}`;
  return (
    <li key={props.id} className={classes["cart-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
          <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
}
