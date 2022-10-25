import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Falling in Love with Space Werewolves",
    description: "A gripping piece of post-modern sci-fi drama",
  },
  {
    id: "p2",
    price: 10,
    title: "Werewolves: lore and history",
    description:
      "The comprehensive and authoritative work of non-fiction on the topic of Werewolves and Lycans",
  },
];
const Products = (props: any) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => (
          <ProductItem key={products.id} {...products} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
