import Card from "../UI/Card";
import SandwichItem from "./SandwichItem/SandwichItem";
import classes from "./AvailableSandwiches.module.css"

const DUMMY_SANDWICHES = [
  {
    id: "m1",
    name: "Pastami",
    description: "Pastami sandwich",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Waldorf Chicken Salad",
    description: "Waldorf Chicken Salad sandwich",
    price: 11.99,
  },
  {
    id: "m3",
    name: "Roast Beef",
    description: "Roast Beef sandwich",
    price: 13.99,
  },
  {
    id: "m4",
    name: "Vegetarian",
    description: "Vegetarian sandwich",
    price: 10.99,
  },
  {
    id: "m5",
    name: "Breakfast",
    description: "Breakfast sandwich—served all day!",
    price: 11.99,
  },
];

export default function AvailableSandwiches() {
  const sandwichList = DUMMY_SANDWICHES.map(
    ({ id, name, description, price }) => {
      return (
        <SandwichItem
          key={id}
          name={name}
          description={description}
          price={price}
        />
      );
    }
  );
  return (
    <section>
      <Card>
        <ul className={classes.list}>{sandwichList}</ul>
      </Card>
    </section>
  );
}
