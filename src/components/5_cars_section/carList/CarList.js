import SvgOne from "./SvgOne";
import SvgTwo from "./SvgTwo";

import classes from "./carList.module.css";

const CarList = (pr) => {
  const props = pr.dataObj;
  let imageSrc = require(`../../../assets/carsSectionImgs/car${props.image}.png`);

  return (
    <div className={classes["car-card"]}>
      <div>
        <div className={classes["img-container"]}>
          <img src={imageSrc} alt="car" />
        </div>

        <div className={classes["name-info-container"]}>
          <h1>{props.class}</h1>
          <h3>{props.name}</h3>
        </div>

        <div className={classes["description-container"]}>
          <p>{props.description}</p>
        </div>
      </div>

      <div className={classes["car-footer-container"]}>
        <div className={classes["seats-container"]}>
          <div>
            <SvgOne />
            <p>{props.seats} Seats</p>
          </div>
          <div>
            <SvgTwo />
            <p>{props.luggage} Luggage</p>
          </div>
        </div>

        <div className={classes["car-quantity-conatiner"]}>
          <small>-</small>
          <h2>7</h2>
          <small>+</small>
        </div>
      </div>
    </div>
  );
};

export default CarList;
