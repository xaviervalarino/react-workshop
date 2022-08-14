import SandwichItemForm from "./SandwitchItemForm";
import classes from "./SandwichItem.module.css";

export default function SandwichItem({ id, name, description, price }) {
  price = `$${price.toFixed(2)}`;
  return (
    <li className={classes.sandwich}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <SandwichItemForm id={id} />
      </div>
    </li>
  );
}
