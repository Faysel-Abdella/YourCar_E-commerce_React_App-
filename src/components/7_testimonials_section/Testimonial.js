import Rates from "./SvgReturner/Rates";

import classes from "./testimonial.module.css";

const Testimonial = (props) => {
  let imageSrc = require(`../../assets/testimonial_images/car${props.imageNo}.png`);

  return (
    <div className={classes["testimonial-container"]}>
      <p>{props.description}</p>
      <div className={classes["rates"]}>
        <Rates />
      </div>
      <h2>
        {props.name} <span>{props.location}</span>
      </h2>

      <div className={classes["testimonial-car-image"]}>
        <img src={imageSrc} alt="car" />
      </div>
    </div>
  );
};

export default Testimonial;
