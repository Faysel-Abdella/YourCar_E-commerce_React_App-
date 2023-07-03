import classes from "./sponsors.module.css";
const Sponsors = () => {
  return (
    <div className={classes["sponsers-container"]} id="section5">
      <img
        src={require("../../assets/sponsorsImages/sponsor1.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor2.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor3.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor4.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor5.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor6.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor7.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsImages/sponsor8.png")}
        alt="our sponser"
      />
    </div>
  );
};

export default Sponsors;
