import Flex from "./UI/Flex";
import useRequest from "../hooks/use-request";

export default function DeleteTask(props) {
  const { isLoading, isError, sendRequest } = useRequest('DELETE');
  const onDeleteHandler = () => {
    console.log(props.id, props.onDelete);
    sendRequest(props.id, () => props.onDelete(props.id));
  };
  return (
    <Flex border="none" padding='0' margin='0'>
      {isError && <p style={{ color: "crimson" }}>Something went wrong</p>}
      <button onClick={onDeleteHandler}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </Flex>
  );
}
