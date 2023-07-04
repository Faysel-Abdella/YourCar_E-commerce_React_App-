import classes from "./aboutUs.module.css";

const AboutUs = () => {
  const myimg = require("../../assets/aboutusimg/abtus.png");
  return (
    <div className={classes["about-us-container"]} id="section2">
      <h1>ABOUT US</h1>
      <div className={classes["inside-container"]}>
        <div className={classes["about-us"]}>
          <h2>About</h2>
          <p className={classes["first-par"]}>
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>
          <p className={classes["second-par"]}>
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </div>
        <div className={classes["about-us-img"]}>
          <img src={myimg} alt="Our car" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
