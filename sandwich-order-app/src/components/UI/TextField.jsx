import classes from "./TextField.module.css";

export default function TextField(props) {
  return (
    <div className={classes.control}>
      <label htmlFor={props.id}>{props.title}</label>
      <input type="text" id={props.id} ref={props.ref} />
    </div>
  );
}
