import useInput from "../../hooks/use-input";

import Input from "../Input";
import cls from "./index.module.css";

const stringNotEmpty = (str) => str.trim() !== ""
export default function Form(props) {
  const {
    value: firstName,
    isValid: firstNameValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetValue: resetFirstName,
  } = useInput(stringNotEmpty);
  const {
    value: lastName,
    isValid: lastNameValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetValue: resetLastName,
  } = useInput(stringNotEmpty);
  const {
    value: email,
    isValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useInput((str) => str.includes('@'));

  const formIsValid = firstNameValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
    }
    console.log('Submitted', firstName, lastName, email)
    resetFirstName()
    resetLastName()
    resetEmail()
    };

  return (
    <form className={cls.form} onSubmit={formSubmitHandler}>
      <Input
        id="first-name"
        type="text"
        label="First Name"
        errorMsg={firstNameError && "First name must not be empty"}
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        value={firstName}
      />
      <Input
        id="last-name"
        type="text"
        label="Last Name"
        errorMsg={lastNameError && "Last name must not be empty"}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        value={lastName}
      />
      <Input
        id="email"
        type="text"
        label="Email Address"
        errorMsg={emailError && "Email address must be valid"}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={email}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
