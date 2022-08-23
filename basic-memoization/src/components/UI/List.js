import { memo, useMemo } from "react";

const List = ( prop ) => {
  console.log("List rendered");

  const listItems = useMemo(() => {
    console.log('Item sort memoized')
    return prop.items
      .sort((a, b) => a - b)
      .map((item) => <li key={item}>{item}</li>);
  }, [prop.items])


  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default memo(List);
