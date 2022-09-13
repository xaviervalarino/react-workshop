import Card from "../UI/Card";
import SandwichItem from "./SandwichItem/SandwichItem";
import classes from "./AvailableSandwiches.module.css";

const DUMMY_SANDWICHES = {
  m1: {
    name: "Pastami",
    description: "Pastami sandwich",
    price: 12.99,
  },
  m2: {
    name: "Waldorf Chicken Salad",
    description: "Waldorf Chicken Salad sandwich",
    price: 11.99,
  },
  m3: {
    name: "Roast Beef",
    description: "Roast Beef sandwich",
    price: 13.99,
  },
  m4: {
    name: "Vegetarian",
    description: "Vegetarian sandwich",
    price: 10.99,
  },
  m5: {
    name: "Breakfast",
    description: "Breakfast sandwich—served all day!",
    price: 11.99,
  },
};

export default function AvailableSandwiches() {
  const sandwichList = Object.keys(DUMMY_SANDWICHES).map((id) => {
    const { name, description, price } = DUMMY_SANDWICHES[id];
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
        <ul className={classes.list}>{sandwichList}</ul>
      </Card>
    </section>
  );
}
