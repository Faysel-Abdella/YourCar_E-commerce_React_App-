import classes from "./description.module.css";

const Description = () => {
  return (
    <div className={classes["description-container"]}>
      <h1>
        Your<span>Car</span>
      </h1>
      <p>
        We are known for luxurious and premium chaffeur services worldwide. We
        are simply the best you can find.
      </p>
      <p>
        we are dedicated to providing our customers with a first-class car
        buying, selling, and renting experience.
      </p>
    </div>
  );
};

export default Description;
