import { useEffect } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./carLists.module.css";
import CarList from "../carList/CarList";

import data from "../../../data/data.json";

const CartLists = () => {
  console.log(data.cars);

  const dataArray = [...data.cars];

  const sliderSettings = {
    // arrows: false,
    dots: true,
    appendDots: (dots) => <ul className={classes.slickDots}>{dots}</ul>,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    infinite: true,

    nextArrow: (
      <div>
        <div className={classes["next-slick-arrow"]}>
          <button
            className={classes["prev-icon"]}
            // onClick={handleGoToClick(--currentSlid)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585815 2.34317L2.00003 0.928955L9.0711 8.00002L2.00003 15.0711L0.585815 13.6569L6.24267 8.00002L0.585815 2.34317Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className={classes["prev-slick-arrow"]}>
          <button
            className={classes["next-icon"]}
            // onClick={handleGoToClick(++currentSlid)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.41418 2.34317L7.99997 0.928955L0.928904 8.00002L7.99997 15.0711L9.41418 13.6569L3.75733 8.00002L9.41418 2.34317Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={classes.content} id="section4">
      <h1 className={classes.header}>
        CARS <h3>Cars</h3>
      </h1>

      <Slider {...sliderSettings}>
        {dataArray.map((dataObj, index) => (
          <div key={index} className={classes["car-item"]}>
            <CarList dataObj={dataObj} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CartLists;
