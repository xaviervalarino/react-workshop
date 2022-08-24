  export default function Flex (props) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: props.direction || "initial",
          gap: "1rem",
          margin: "1rem",
          padding: "1rem",
          border: "1px solid",
        }}
      >
        {props.children}
      </div>
    );
  };
