import Flex from "./Flex";
import useRequest from "../hooks/use-request";

export default function DeleteTask(props) {
  const { isLoading, isError, sendRequest } = useRequest();
  const onDeleteHandler = () => {
    console.log(props.id, props.onDelete);
    sendRequest(
      {
        url: `https://react-workshop-679c8-default-rtdb.firebaseio.com/tasks/${props.id}.json`,
        method: "DELETE",
      },
      () => props.onDelete(props.id)
    );
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
