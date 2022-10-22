const TextField = (props: { id: string; label: string }) => (
  <div style={{ display: "flex", flexDirection: "column", margin: "1rem 0" }}>
    <label htmlFor={props.id} style={{ fontSize: "0.85rem" }}>
      {props.label}
    </label>
    <input type="text" id={props.id} />
  </div>
);

export default function Auth() {
  return (
    <form
      style={{
        maxWidth: "60ch",
        padding: "1.5rem",
        margin: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0, 0.2)",
      }}
    >
      <TextField id="email" label="Email" />
      <TextField id="password" label="Password" />
      <button>Login</button>
    </form>
  );
}
