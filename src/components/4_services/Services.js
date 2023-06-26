import Service from "./SVGs/service/Service";
import classes from "./services.module.css";

const Services = () => {
  return (
    <div className={classes["services-container"]}>
      <h1>SERVICES</h1>
      <h2>Services</h2>
      <Service />
    </div>
  );
};

export default Services;
