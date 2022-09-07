import { useState } from "react";
import Input from "../Input";
import cls from "./index.module.css";

export default function Form(props) {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };
  const nameInputBlurHandler = (e) => {
    setNameTouched(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
   if (!nameIsValid) {
      return
    }
    console.log(name);
    setName('')
    setNameTouched(false)
  };
  return (
    <form className={cls.form} onSubmit={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        label="Name"
        errorMsg={nameInputIsInvalid && 'Name must not be empty'}
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={name}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
