  export default function Flex (props) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: props.direction || "initial",
          alignItems: props.alignItems || 'baseline',
          justifyContent: props.justifyContent || 'initial',
          gap: props.gap || "1rem",
          margin: props.margin || "1rem",
          padding: props.padding || "1rem",
          border: props.border || "1px solid",
        }}
      >
        {props.children}
      </div>
    );
  };
