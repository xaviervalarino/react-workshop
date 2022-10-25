import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { RootState } from "../../store";

import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const toggleCartHanlder = () => {
    dispatch(uiActions.toggle())
  };
  const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={toggleCartHanlder}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
