import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <Header />
      <Auth />
      <Counter />
    </div>
  );
}
