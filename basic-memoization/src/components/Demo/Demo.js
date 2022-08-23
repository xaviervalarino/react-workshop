import { memo } from "react";

function DemoOutput(props) {
  return <p>{props.show ? "this is new" : ""}</p>;
}

export default memo(DemoOutput);
