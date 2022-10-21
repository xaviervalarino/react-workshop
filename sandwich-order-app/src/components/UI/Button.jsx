import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={(props.alt && classes["button--alt"]) || classes.button}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export function ButtonGroup(props) {
  return <div className={classes["button-group"]}>{props.children}</div>;
}
