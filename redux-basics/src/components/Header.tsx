export default function Header() {
  return (
    <div
      style={{
        background: "darkCyan",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "1rem"
      }}
    >
      <div style={{ fontWeight: "bold"}}>Redux Auth</div>
      <button>Logout</button>
    </div>
  );
}
