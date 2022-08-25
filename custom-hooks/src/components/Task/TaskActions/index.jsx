import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import Flex from "../../UI/Flex";

export default function TaskActions(props) {
  return (
    <>
      <EditTask
        id={props.id}
        text={props.text}
        isEditing={props.isEditing}
        setIsEditing={props.setIsEditing}
        onUpdate={props.onUpdate}
      />
      {props.isEditing || (
        <DeleteTask id={props.id} onDelete={props.onDelete} />
      )}
    </>
  );
}
