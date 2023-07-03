import { Link } from "react-scroll";

import classes from "./CarsImages.module.css";

const CarsImages = () => {
  const car1 = require("../../assets/carsImages/car1.png");
  const car2 = require("../../assets/carsImages/car2.png");
  const car3 = require("../../assets/carsImages/car3.png");
  const car4 = require("../../assets/carsImages/car4.png");
  const car5 = require("../../assets/carsImages/car5.png");
  const car6 = require("../../assets/carsImages/car6.png");
  const car7 = require("../../assets/carsImages/car7.png");
  const car8 = require("../../assets/carsImages/car8.png");
  const car9 = require("../../assets/carsImages/car9.png");

  return (
    <div className={classes["images-container"]}>
      <div className={`${classes["image-container"]} ${classes["image-one"]}`}>
        <img src={car1} alt="car"></img>
      </div>
      <div
        className={`${classes["image-container"]} ${classes["central-image"]}`}
      >
        <img src={car2} alt="car"></img>
      </div>
      <div
        className={`${classes["image-container"]} ${classes["image-three"]}`}
      >
        <img src={car3} alt="car"></img>
      </div>
      <div className={`${classes["image-container"]} ${classes["image-four"]}`}>
        <img src={car4} alt="car"></img>
      </div>
      <div
        className={`${classes["image-container"]} ${classes["central-image"]} ${classes["center-image"]}`}
      >
        <div className={classes["central-text"]}>
          <h2>Tesla Model 3</h2>
          <p>Disruptive, avant-grade, futuristic, innovative</p>
          <button>
            <Link to="section5" duration={900} smooth={true}>
              <span>Contact</span>
            </Link>
          </button>
        </div>

        <img src={car5} alt="car"></img>
      </div>
      <div className={`${classes["image-container"]} ${classes["image-six"]}`}>
        <img src={car6} alt="car"></img>
      </div>
      <div
        className={`${classes["image-container"]} ${classes["image-seven"]}`}
      >
        <img src={car7} alt="car"></img>
      </div>
      <div
        className={`${classes["image-container"]} ${classes["central-image"]}`}
      >
        <img src={car8} alt="car"></img>
      </div>
      <div className={`${classes["image-container"]} ${classes["image-nine"]}`}>
        <img src={car9} alt="car"></img>
      </div>
    </div>
  );
};

export default CarsImages;
