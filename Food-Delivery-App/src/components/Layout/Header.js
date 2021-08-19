import React, { Fragment } from "react";
import mealsImage from "../../assets/Indian-Cuisine.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OrderYourFavouriteFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious Indian food" />
      </div>
    </Fragment>
  );
};

export default Header;
