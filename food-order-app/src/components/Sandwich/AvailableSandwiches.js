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
    description: "Breakfast sandwich---served all day!",
    price: 11.99,
  },
];

export default function AvailableSandwiches() {
  const sandwichList = DUMMY_SANDWICHES.map((sandwich) => {
    return <li key={sandwich.id}>{sandwich.name}</li>;
  });
  return (
    <section style={{ background: "#fff", padding: "0.5rem" }}>
      <ul>{sandwichList}</ul>
    </section>
  );
}
