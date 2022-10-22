import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { authActions } from "../store/auth";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <div
      style={{
        background: "darkCyan",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "1rem",
        fontWeight: "bold",
      }}
    >
      <div>Redux Auth</div>
      {auth && (
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
          <div>Tab One</div>
          <div>Tab Two</div>
          <div>Tab Three</div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
}
