import React from "react";
import "./Battery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { battery_data } from "../../../../assets/assets";

function Battery() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      //   autoPlay={true}
      autoPlaySpeed={2000}
      partialVisible={false}
      className="carousel_battery"
    >
      {battery_data.map((data, index) => (
        <div className="battery" key={index}>
          <div className="battery_content">
            <h2 className="battery_title">{data.name}</h2>
            <h4 className="battery_voltage">{data.voltage}</h4>
            <p className="battery_desc">{data.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Battery;
