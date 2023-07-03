import Slider from "react-slick";

import data from "../../data/data.json";

import Testimonial from "./Testimonial";

import classes from "./testimonials.module.css";

const Testimonials = () => {
  const testimonialArray = [...data.testimonials];

  const dotsStyle = {
    color: "#ffffff",
    fontSize: "24px",
  };

  const sliderSettings = {
    arrows: false,
    dots: true,
    appendDots: (dots) => (
      <ul className={classes.slickDots} style={dotsStyle}>
        <div style={dotsStyle}> {dots}</div>
      </ul>
    ),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
  };

  return (
    <div className={classes["testimonials-container"]}>
      <h1>
        TESTIMONIALS <p>Testimonials</p>
      </h1>

      <Slider {...sliderSettings}>
        {testimonialArray.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            description={testimonial.description}
            imageNo={testimonial.image}
            location={testimonial.location}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
