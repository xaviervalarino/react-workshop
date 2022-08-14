import CartContext from "./cart-context";

export default function CartProvider(props) {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (item) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
