import MainNavBar from "../1_mainNavigation/MainNavBar";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <MainNavBar />
      <h2 className={classes.h2Txt}>
        Find the perfect car <br /> for you at YourCar.
      </h2>
      <p className={classes.heroP}>
        We offer a wide range of <br /> cars that cater to your
        <br /> needs and budget.{" "}
        <span className={classes["breaked-ele"]}> Visit </span>
        <br />
        us today and drive <span className={classes["braked-ele"]}> away </span>
        <br />
        with your dream car!
      </p>
      <div className={classes.heroBtn}>
        <button className={classes.ctaBtn}>
          Discover{" "}
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            // stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18"></path>
            <path d="M8 6h10v10"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
