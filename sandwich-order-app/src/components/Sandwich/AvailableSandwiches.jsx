import { useEffect, useState } from "react";

import Card from "../UI/Card";
import SandwichItem from "./SandwichItem/SandwichItem";
import classes from "./AvailableSandwiches.module.css";

export default function AvailableSandwiches() {
  const [sandwiches, setSandwiches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          "https://react-workshop-679c8-default-rtdb.firebaseio.com/Sandwiches.json"
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setSandwiches(data);
        setIsLoading(false);
      };
      fetchData()
        .then()
        .catch((err) => {
          setIsLoading(false);
          setHttpError(err.message);
        });
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

  let content = "";
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  else if (httpError) {
    content = (
      <div className={classes.error}>
        <h3>Error</h3>
        <p >{httpError}</p>
      </div>
    );
  } else {
    content = <ul className={classes.list}>{sandwichList}</ul>;
  }

  return (
    <section>
      <Card>{content}</Card>
    </section>
  );
}
