import React from "react";
import "./SolarFarm.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { solar_farm_data } from "../../../../assets/assets";

function SolarFarm({ scrollToId }) {
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
      autoPlaySpeed={2000}
      partialVisible={false}
      className="carousel_solar_farm"
      scrollToItem={scrollToId} // Scroll to the specified item based on scrollToId prop
    >
      {solar_farm_data.map((data, index) => (
        <div className="solar_farm" key={index} id={`item-${index}`}>
          <div className="solar_farm_content">
            <h2 className="solar_farm_title">{data.title}</h2>
            <h4 className="solar_farm_voltage">{data.voltage}</h4>
            <p className="solar_farm_desc">{data.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default SolarFarm;
