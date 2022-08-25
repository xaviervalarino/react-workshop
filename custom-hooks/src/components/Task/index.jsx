import { useState } from "react";

import Flex from "../UI/Flex";
import TaskActions from "./TaskActions";

export default function Task(props) {
  console.log('Task component rendered')

  const [isEditing, setIsEditing] = useState(false);
  return (
    <li key={props.id}>
      <Flex gap="1rem" alignItems={isEditing || "baseline"}>
        {isEditing || <h3 style={{ flex: "1" }}>{props.text}</h3>}
        <TaskActions
          {...props}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </Flex>
    </li>
  );
}
