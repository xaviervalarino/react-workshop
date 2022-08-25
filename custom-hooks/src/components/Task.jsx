import Flex from "./UI/Flex";
import DeleteTask from "./DeleteTask";

export default function Task(props) {
  return (
    <li key={props.id}>
      <Flex alignItems="baseline" justifyContent="space-between">
        <h3>{props.text}</h3>
        <DeleteTask id={props.id} onDelete={props.onDelete}/>
      </Flex>
    </li>
  );
}
