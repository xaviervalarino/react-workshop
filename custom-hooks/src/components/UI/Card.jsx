import Flex from "./Flex";

export default function Card(props) {
  return (
    <Flex
      direction={props.direction}
      alignItems="stretch"
      alignContent="stretch"
      padding="1rem"
      margin="1rem"
      gap="1rem"
      border="1px solid"
    >
      {props.children}
    </Flex>
  );
}
