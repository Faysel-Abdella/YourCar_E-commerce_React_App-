import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import { MenuOutline } from "heroicons-react";
import { XOutline } from "heroicons-react";

import { Link } from "react-scroll";

import Cart from "../../modal/Cart";
import classes from "./MainNavBar.module.css";

const MainNavBar = () => {
  // Extracting what we need for this component from the store
  const totalOrderedQuantity = useSelector(
    (state) => state.totalOrderedQuantity
  );

  useEffect(() => {
    localStorage.setItem(
      "total_quantity",
      JSON.stringify(totalOrderedQuantity)
    );
  }, [totalOrderedQuantity]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toogleNavigationHandler = () => {
    setMobileNavOpen((prevState) => !prevState);

    // disabling scrolling if the mobile navigation is open
    document.querySelector("html").style.overflow = mobileNavOpen
      ? "auto"
      : "hidden";
  };

  // Controll cart modal
  const [cartOpen, setCartOpen] = useState(false);
  const toogleCartHandler = () => {
    setCartOpen((prevState) => !prevState);

    // disabling scrolling if the mobile navigation is open
    document.querySelector("html").style.overflow = cartOpen
      ? "auto"
      : "hidden";
  };

  // ******** hide the navBar if the user click an area outside navbar
  const navRef = useRef();
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (event.target.id !== "mainNav") {
  //       setMobileNavOpen(false);
  //     }
  //   };
  //   window.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     window.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  // ********Making the navigation stocky after the first page******************* //
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 900);
      // 900 is the height of the first page
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //****************************************************************************//

  // Hide the navigation after the user click one of the button links

  const hideNavHandler = () => {
    setMobileNavOpen((prevState) => !prevState);
    document.querySelector("html").style.overflow = "auto";
  };

  return (
    <nav>
      <header
        className={`${isSticky ? classes.sticky : ""} ${
          mobileNavOpen ? classes["nav-open"] : ""
        } ${cartOpen ? classes["cart-open"] : ""}`}
      >
        <h1>
          Your<span>Car</span>
        </h1>
        <nav className={classes["main-nav"]} id="mainNav" ref={navRef}>
          <ul className={classes["nav-lists"]}>
            <li>
              <Link
                className={classes.navLink}
                to="section1"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                onClick={hideNavHandler}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="section2"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={hideNavHandler}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="section3"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={hideNavHandler}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="section4"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={hideNavHandler}
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                className={classes.navLink}
                to="section5"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={hideNavHandler}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        <button className={classes.cartBtn} onClick={toogleCartHandler}>
          <div className={classes.cart}>
            <svg
              width="35"
              height="30"
              viewBox="0 0 35 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M0.706372 0.169921C0.121734 0.318451 -0.175325 0.978933 0.109094 1.50037C0.20706 1.6805 0.314507 1.78162 0.5136 1.88907C0.640008 1.9586 0.665289 1.9586 2.14742 1.96808L3.65484 1.97756L3.76861 2.2999C3.82865 2.47687 4.07199 3.16263 4.30584 3.82312C4.5397 4.4836 4.92524 5.57071 5.16226 6.24067C5.39927 6.91063 5.71845 7.81129 5.8733 8.2474C6.02815 8.68035 6.38525 9.68529 6.66335 10.4753C6.94461 11.2654 7.29223 12.2482 7.4376 12.6559C7.58297 13.0635 7.82631 13.7462 7.97484 14.1728C8.12653 14.5994 8.40462 15.3863 8.5974 15.9267C8.78701 16.4639 9.09987 17.3488 9.29264 17.8923L9.64026 18.8752L9.51069 19.2196C9.44117 19.4061 9.23576 19.9623 9.05563 20.4489C8.68272 21.4476 8.64796 21.5803 8.64796 21.9911C8.64796 22.3514 8.71748 22.639 8.87865 22.9739C9.21364 23.666 10.0195 24.1906 10.7432 24.1906C10.8285 24.1906 10.898 24.1969 10.898 24.2064C10.898 24.2159 10.8506 24.3202 10.7906 24.4371C10.3956 25.2272 10.3007 26.0867 10.5188 26.9179C10.9486 28.558 12.5508 29.6767 14.2194 29.5029C15.4519 29.3734 16.4726 28.6623 17.0162 27.5562C17.4902 26.5861 17.4902 25.4673 17.0162 24.5003C16.9403 24.3486 16.8866 24.2159 16.8961 24.2064C16.9214 24.1811 23.9054 24.1875 23.9275 24.2127C23.9402 24.2222 23.9275 24.2665 23.8991 24.3075C23.798 24.4656 23.6273 24.9111 23.5515 25.2177C23.3555 26.0267 23.4472 26.8325 23.8232 27.5878C24.5659 29.0858 26.2914 29.8474 27.8936 29.386C29.499 28.9246 30.5734 27.3413 30.4028 25.698C30.3554 25.2461 30.2732 24.9491 30.0805 24.5477C29.9983 24.3708 29.9351 24.2191 29.9477 24.2096C29.9572 24.2001 30.7125 24.1906 31.6258 24.1906C32.6687 24.1906 33.3323 24.178 33.405 24.159C33.4682 24.1401 33.5914 24.0705 33.6799 24.001C34.135 23.6407 34.1318 22.9234 33.6704 22.5758C33.5883 22.5126 33.465 22.443 33.3987 22.4241C33.3102 22.3988 30.3269 22.3893 22.082 22.3893C14.5512 22.3893 10.8443 22.3798 10.7653 22.3577C10.6326 22.3198 10.503 22.1807 10.4714 22.048C10.4524 21.9627 10.6326 21.4444 11.1951 19.9401L11.2804 19.7189L12.3454 19.583C12.93 19.5104 14.981 19.2512 16.9024 19.011C22.4707 18.3063 26.6074 17.788 28.0895 17.6016C28.8448 17.5036 29.578 17.3993 29.717 17.3614C30.2795 17.2161 30.861 16.8684 31.294 16.4134C31.7206 15.9646 32.0019 15.4495 32.1441 14.8585L32.2136 14.5678V9.14806V3.72831L32.1441 3.59874C32.0366 3.39965 31.9355 3.2922 31.749 3.19107L31.5815 3.09627L18.7796 3.08679L5.97759 3.08047L5.94599 2.97618C5.87646 2.76761 5.1749 0.795641 5.13381 0.694515C5.06745 0.539665 4.87152 0.337412 4.69139 0.242606L4.53022 0.15728L2.6657 0.15096C1.64179 0.1478 0.760095 0.15728 0.706372 0.169921ZM30.3965 9.61261C30.3965 13.4396 30.387 14.3434 30.3522 14.473C30.2163 14.9818 29.8055 15.4147 29.3062 15.5759C29.2209 15.6044 27.7324 15.8034 26.0038 16.0215C24.2752 16.2364 21.5574 16.5777 19.9678 16.7799C14.349 17.4878 11.2867 17.8702 11.2583 17.8702C11.2235 17.8702 11.2298 17.8892 10.0448 14.5362C9.89308 14.1001 9.57074 13.1994 9.33372 12.5295C8.9071 11.3254 8.52787 10.2604 7.82315 8.2632C7.62089 7.69752 7.39336 7.04968 7.31119 6.82531C7.22903 6.59777 7.10894 6.25647 7.04258 6.06686C6.97621 5.87409 6.85928 5.53911 6.78028 5.31473L6.63491 4.91339H18.5141H30.3965V9.61261ZM14.2952 24.4276C14.8767 24.5793 15.3571 25.0692 15.4961 25.6475C15.7142 26.5829 15.0979 27.5057 14.1499 27.6668C13.0754 27.847 12.0768 26.8642 12.2537 25.8023C12.4149 24.8195 13.3567 24.1843 14.2952 24.4276ZM27.3437 24.4308C27.7577 24.5382 28.1622 24.8448 28.3676 25.205C28.4877 25.4168 28.5952 25.8118 28.5952 26.0362C28.592 26.6493 28.1938 27.2687 27.6345 27.5246C27.1573 27.7458 26.6801 27.7427 26.2092 27.5088C25.6593 27.2402 25.3243 26.7377 25.2864 26.1341C25.2548 25.6538 25.4192 25.224 25.7668 24.8732C26.1808 24.4529 26.778 24.2854 27.3437 24.4308Z"
                  fill="#12273D"
                />
                <path
                  id="Vector_2"
                  d="M11.2362 7.54901C11.1382 7.57113 10.996 7.63118 10.9202 7.68174C10.7621 7.79235 10.5978 8.0262 10.5473 8.20949C10.4682 8.50655 10.601 8.9237 10.8412 9.12911C11.1034 9.35665 10.3576 9.33769 19.5222 9.33769H27.7893L27.9505 9.26184C28.3266 9.08803 28.5414 8.68036 28.4656 8.28534C28.3866 7.86503 28.118 7.6059 27.685 7.53637C27.3911 7.48581 11.4637 7.50161 11.2362 7.54901Z"
                  fill="#12273D"
                />
                <path
                  id="Vector_3"
                  d="M13.5528 12.6148C13.3601 12.6843 13.1041 12.9435 13.0377 13.1426C12.9713 13.3385 12.9682 13.5818 13.0345 13.7714C13.1041 13.9737 13.3221 14.2107 13.5275 14.3024L13.695 14.3782H19.5098H25.3246L25.5047 14.2897C25.7006 14.1949 25.8397 14.0559 25.9471 13.8473C26.0451 13.6608 26.0451 13.2658 25.9503 13.0794C25.8397 12.8676 25.7291 12.7602 25.5237 12.6591L25.3309 12.5611L19.513 12.5642C14.2986 12.5642 13.6792 12.5706 13.5528 12.6148Z"
                  fill="#12273D"
                />
              </g>
            </svg>
          </div>
          <span className={classes.badge}>{totalOrderedQuantity}</span>
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

      <div>
        <Cart cartShow={cartOpen} />
      </div>
    </nav>
  );
};

export default MainNavBar;
