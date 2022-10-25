import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{...item}}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
