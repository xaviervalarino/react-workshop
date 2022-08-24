import useCounter from "./hooks/use-counter";

export default function App() {
  const countUp = useCounter();
  const countDown = useCounter(false);

  return (
    <>
      <h2>{countUp}</h2>
      <h2>{countDown}</h2>
    </>
  );
}
