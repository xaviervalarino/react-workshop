import { useEffect, useState } from "react";

import Card from "../UI/Card";
import SandwichItem from "./SandwichItem/SandwichItem";
import classes from "./AvailableSandwiches.module.css";

export default function AvailableSandwiches() {
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-workshop-679c8-default-rtdb.firebaseio.com/Sandwiches.json"
      );
      const data = await res.json();
      setSandwiches(data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const sandwichList = Object.keys(sandwiches).map((id) => {
    const { name, description, price } = sandwiches[id];
    return (
      <SandwichItem
        id={id}
        key={id}
        name={name}
        description={description}
        price={price}
      />
    );
  });

  return (
    <section>
      <Card>
        {(isLoading && <p>Loading...</p>) || (
          <ul className={classes.list}>{sandwichList}</ul>
        )}
      </Card>
    </section>
  );
}
