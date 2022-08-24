import Flex from "./Flex";
import DeleteTask from "./DeleteTask";

export default function Task(props) {
  return (
    <li key={props.id}>
      <Flex justifyContent='space-between' padding="0.25rem" margin="0" border="none">
        <h3>{props.text}</h3>
        <DeleteTask id={props.id} onDelete={props.onDelete}/>
      </Flex>
    </li>
  );
}
