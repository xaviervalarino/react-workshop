import { useRef, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, authActions } from "../store";

const TextField = forwardRef((props: { id: string; label: string }, ref) => (
  <div style={{ display: "flex", flexDirection: "column", margin: "1rem 0" }}>
    <label htmlFor={props.id} style={{ fontSize: "0.85rem" }}>
      {props.label}
    </label>
    <input type="text" id={props.id} />
  </div>
));

export default function Auth() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const loginHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailRef.current?.value.trim() === "") {
      return;
    }
    if (passwordRef.current?.value.trim() === "") {
      return;
    }
    dispatch(authActions.login());
  };

  return (
    <form
    onSubmit={loginHandler}
      style={{
        maxWidth: "60ch",
        padding: "1.5rem",
        margin: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0, 0.2)",
      }}
    >
      <TextField id="email" ref={emailRef} label="Email" />
      <TextField id="password" ref={passwordRef} label="Password" />
      <button >Login</button>
    </form>
  );
}
