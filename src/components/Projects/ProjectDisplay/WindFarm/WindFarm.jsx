import React from "react";
import "./WindFarm.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { wind_farm_data } from "../../../../assets/assets";

function WindFarm() {
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
      className="carousel_wind"
    >
      {wind_farm_data.map((data, index) => (
        <div className="wind_farm" key={index}>
          <div className="wind_farm_content">
            <h2 className="wind_farm_title">{data.title}</h2>
            <h4 className="wind_farm_voltage">{data.voltage}</h4>
            <p className="wind_farm_desc">{data.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default WindFarm;
