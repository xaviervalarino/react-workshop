import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import SandwichItemForm from "./SandwitchItemForm";
import classes from "./SandwichItem.module.css";

export default function SandwichItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);
  const priceStr = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.sandwich}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceStr}</div>
      </div>
      <div>
        <SandwichItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
