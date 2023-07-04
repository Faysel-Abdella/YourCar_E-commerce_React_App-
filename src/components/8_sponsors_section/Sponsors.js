import classes from "./sponsors.module.css";
const Sponsors = () => {
  return (
    <div className={classes["sponsers-container"]} id="section5">
      <img
        src={require("../../assets/sponsorsimages/sponsor1.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor2.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor3.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor4.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor5.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor6.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor7.png")}
        alt="our sponser"
      />
      <img
        src={require("../../assets/sponsorsimages/sponsor8.png")}
        alt="our sponser"
      />
    </div>
  );
};

export default Sponsors;
