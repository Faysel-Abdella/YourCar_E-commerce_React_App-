import MainNavBar from "../1_mainNavigation/MainNavBar";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <MainNavBar />
      <h2>
        Find the perfect car <br /> for you at YourCar.
      </h2>
      <p>
        We offer a wide range of <br /> cars that cater to your
        <br /> needs and budget. Visit
        <br />
        us today and drive away
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
