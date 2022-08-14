import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const priceStr = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes["cart-item"]}>
        <div className={classes.summary}>
          <h3>{props.name}</h3>
          <span className={classes.price}>{priceStr}</span>
          <span className={classes.amount}>{props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  );
}
