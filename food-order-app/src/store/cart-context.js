import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAMount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
