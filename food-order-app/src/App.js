import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Sandwich from "./components/Sandwich/Sandwiches";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Sandwich />
      </main>
    </>
  );
}

export default App;
