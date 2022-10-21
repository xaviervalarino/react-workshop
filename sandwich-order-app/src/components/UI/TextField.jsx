import { forwardRef } from "react";
import classes from "./TextField.module.css";

const TextField = forwardRef((props, ref) => (
  <div className={`${classes.control} ${props.error && classes.error}`}>
    <label htmlFor={props.id}>{props.title}</label>
    <input type="text" id={props.id} ref={ref} />
    {props.error && <p>{props.error}</p>}
  </div>
));

export default TextField;
