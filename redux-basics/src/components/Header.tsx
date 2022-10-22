import { useSelector, useDispatch } from "react-redux";
import { RootState, authActions } from "../store";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const logoutHandler = (e: React.ChangeEvent<HTMLButtonElement>) => {
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
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
        {auth && (
          <>
            <div>Tab One</div>
            <div>Tab Two</div>
            <div>Tab Three</div>
          </>
        )}
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}
