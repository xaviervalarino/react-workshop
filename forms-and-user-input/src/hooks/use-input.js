import { useState } from "react";

export default function (validateValue) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && touched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value)

  }
  const inputBlurHandler = (e) => {
    setTouched(true)
  }

  const resetValue = () => {
    setValue('')
    setTouched(false)
  }

  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetValue,
  };
}
