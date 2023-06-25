import React from "react";
import { MenuOutline } from "heroicons-react";
import { XOutline } from "heroicons-react";

import { useState } from "react";

import { Link, animatedScroll as scroll } from "react-scroll";

import classes from "./MainNavBar.module.css";

const MainNavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toogleNavigationHandler = () => {
    setMobileNavOpen((prevState) => !prevState);
  };

  return (
    <header className={mobileNavOpen ? classes["nav-open"] : ""}>
      <h1>
        Your<span>Car</span>
      </h1>
      <nav className={classes["main-nav"]}>
        <ul className={classes["nav-lists"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">About</Link>
          </li>
          <li>
            <Link to="/product">Services</Link>
          </li>
          <li>
            <Link to="/product">Cars</Link>
          </li>
          <li>
            <Link to="/product">Contact us</Link>
          </li>
        </ul>
      </nav>
      <button className={classes.cartBtn}>
        <ion-icon
          name="cart-outline"
          size="large"
          className={classes.cart}
        ></ion-icon>
        <span className={classes.badge}>0</span>
      </button>
      <button className={classes["btn-mobile-nav"]}>
        {!mobileNavOpen && (
          <MenuOutline
            size={46}
            className={classes["open-icn"]}
            onClick={toogleNavigationHandler}
          />
        )}
        {mobileNavOpen && (
          <XOutline
            size={46}
            className={classes["close-icn"]}
            onClick={toogleNavigationHandler}
          />
        )}
      </button>
    </header>
  );
};

export default MainNavBar;
