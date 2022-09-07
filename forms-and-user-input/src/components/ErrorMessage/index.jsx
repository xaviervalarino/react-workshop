import cls from "./index.module.css";

export default function ErrorMessage(props) {
  return <p className={cls["error-msg"]}>{props.children}</p>;
}
