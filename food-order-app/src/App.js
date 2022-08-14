import Header from "./components/Layout/Header";
import Sandwich from "./components/Sandwich/Sandwiches";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Sandwich />
      </main>
    </>
  );
}

export default App;
