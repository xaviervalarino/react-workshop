import cls from "./Flex.module.css";

export default function Flex(props) {
  const style = {
    ["--align-items"]: props.alignItems,
    ["--direction"]: props.direction,
    ["--border"]: props.border,
    ["--gap"]: props.gap,
    ["--justify-content"]: props.justifyContent,
    ["--margin"]: props.margin,
    ["--padding"]: props.padding,
  };
  return (
    <div style={style} className={cls.flex}>
      {props.children}
    </div>
  );
}
