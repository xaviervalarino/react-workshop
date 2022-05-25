import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import sandwichImg from "../../assets/chicken-waldorf-sandwiches-hero.webp";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Sandwich Shop</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={sandwichImg} alt="Waldorf chicken salad sandwich" />
      </div>
    </>
  );
};

export default Header;
