import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Hero.css";
import { hero_data } from "../../assets/assets";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Hero() {
  useEffect(() => {
    window.scrollTo({
      top: 0, // Scroll down by 40 pixels
      behavior: "smooth", // Smooth scrolling
    });
  }, []);
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      partialVisible={true}
      showArrows={false}
      className="carousel"
    >
      {hero_data.map((data, index) => (
        <div className="hero-title-img" key={index}>
          <h2>{data.title}</h2>
          <img src={data.img} alt={data.title} />
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
