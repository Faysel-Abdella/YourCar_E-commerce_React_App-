import { useSelector, useDispatch } from "react-redux";

import { carActions } from "../../../store/carDataStore";

import SvgOne from "./SvgOne";
import SvgTwo from "./SvgTwo";

import classes from "./carList.module.css";

const CarList = (pr) => {
  const props = pr.dataObj;

  const orderedCars = useSelector((state) => state.orderedCars);
  const thisCar = orderedCars.find((car) => car.id === props.id);
  const thisCarOrderedQuantity = thisCar ? thisCar.orderedQuantity : 0;

  localStorage.setItem("ordered_cars", JSON.stringify(orderedCars));

  const dispatch = useDispatch();

  const removeCarFromCartHandler = () => {
    if (thisCarOrderedQuantity === 0) {
      return;
    }
    dispatch(
      carActions.removeCarFromCart({
        id: props.id,
      })
    );
  };

  const addCarToCartHandler = () => {
    dispatch(
      carActions.addCarToCart({
        id: props.id,
        name: props.name,
        class: props.name,
        image: props.image,
      })
    );
  };

  let imageSrc = require(`../../../assets/carssectionimgs/car${props.image}.png`);

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
          <small onClick={removeCarFromCartHandler}>-</small>
          <h2>{thisCarOrderedQuantity}</h2>
          <small onClick={addCarToCartHandler}>+</small>
        </div>
      </div>
    </div>
  );
};

export default CarList;
