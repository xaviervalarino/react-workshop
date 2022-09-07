import ErrorMessage from '../ErrorMessage'
import cls from "./index.module.css";

export default function Input(props) {
  const classNames = `${cls.input} ${props.errorMsg ? cls.error: ''}`
  return (
    <div className={classNames}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.errorMsg && <ErrorMessage>{props.errorMsg}</ErrorMessage>}
    </div>
  );
}
