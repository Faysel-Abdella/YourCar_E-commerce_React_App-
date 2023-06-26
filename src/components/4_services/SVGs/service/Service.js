import CarSvg1 from "./CarSvg1";
import CarSvg2 from "./CarSvg2";
import CarSvg3 from "./CarSvg3";

import classes from "./service.module.css";

const Service = () => {
  return (
    <div className={classes["services"]}>
      <div className={classes.service}>
        <CarSvg1 />
        <h3>Car sales</h3>
        <p>
          At YourCar, we offer a wide selection of luxury vehicles for sale.
          Whether you're in the market for a sleek sports car or a spacious SUV,
          we have the perfect vehicle to fit your needs.
        </p>
      </div>
      <div className={classes.service}>
        <CarSvg2 />
        <h3>Car rental</h3>
        <p>
          If you're in need of a luxury car rental, look no further than
          YourCar. Our fleet of high-end vehicles is regularly maintained and
          serviced to ensure that you have a safe and comfortable driving
          experience.
        </p>
      </div>
      <div className={classes.service}>
        <CarSvg3 />
        <h3> Car selling</h3>
        <p>
          At YourCar, we make it easy to sell your car. Simply bring your
          vehicle in for an appraisal, and we'll handle the rest. We offer fair
          prices and a hassle-free selling process, so you can get your vehicle
          with minimal effort.
        </p>
      </div>
    </div>
  );
};

export default Service;
