import { forwardRef } from "react";
import classes from "./TextField.module.css";

const TextField = forwardRef((props, ref) => (
  <div className={classes.control}>
    <label htmlFor={props.id}>{props.title}</label>
    <input type="text" id={props.id} ref={ref} />
  </div>
));

export default TextField;
