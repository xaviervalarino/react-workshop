import { useRef, useState } from "react";
import Flex from "../../UI/Flex";
import useRequest from "../../../hooks/use-request";

export default function EditTask(props) {
  const inputRef = useRef("");
  const { isLoading, isError, sendRequest } = useRequest("PUT");
  const onEditHandler = (condition) => props.setIsEditing(condition);
  const onUpdateHandler = () => {
    const newValue = { text: inputRef.current.value };
    sendRequest(props.id, newValue, () =>
      props.onUpdate(props.id, newValue.text)
    );
    if (!isError) {
      props.setIsEditing(false);
    }
  };

  let content = <button onClick={onEditHandler.bind(null, true)}>Edit</button>;

  if (props.isEditing) {
    content = (
      <>
        <input
          type="text"
          defaultValue={props.text}
          ref={inputRef}
          style={{ flexGrow: "1", paddingLeft: "0.75rem" }}
        />
        <button onClick={onEditHandler.bind(null, false)}>Cancel</button>
        <button onClick={onUpdateHandler}>Update</button>
      </>
    );
  }
  return (
    <>
      {isError && <p style={{ color: "crimson" }}>Something went wrong</p>}
      {content}
    </>
  );
}
