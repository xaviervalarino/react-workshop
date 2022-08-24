import { useEffect, useState } from "react";

export default function useCounter(forwards = true) {
  const [counter, setCounter] = useState(0);
  const countFn = (value) => forwards ? value + 1 : value - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(countFn);
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
}
