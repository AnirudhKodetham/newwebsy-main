import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "BeatByte exceeded my expectations with their prompt delivery and excellent customer service. Highly recommend!
            But we need more indian varieties from ruchi hotel and Jai bhavani tiffin center!!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          {/* <img src={ava01} alt="avatar" className=" rounded" /> */}
          <h6>-Nishanth Vengala</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "BeatByte's food delivery service is exceptional! They deliver hot and delicious meals right on time, every time. 
         Highly recommended! The website has an amazing design and intutive interface! Just wow!
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <h6>-Nikhila Korakanti</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "BeatByte makes food delivery hassle-free. 
        With their wide selection of restaurants and quick delivery, 
        I can always count on them for a great meal.
        The website is amazing and is built according to the industry standards.
        I'm highly impressed!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <h6>-Rajesh Peramasani</h6>
        </div>
      
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
