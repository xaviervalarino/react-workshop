import { useSelector } from "react-redux";
import { RootState } from "./store";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserDashboard from "./components/UserDashboard";

export default function App() {
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <Header />
      {auth &&  <UserDashboard /> || <Auth />}
      <Counter />
    </div>
  );
}
