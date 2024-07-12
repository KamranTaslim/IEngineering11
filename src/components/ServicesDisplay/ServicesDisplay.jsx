// components/ServicesDisplay/ServicesDisplay.js
import React, { useContext } from "react";
import "./ServicesDisplay.css";

import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

function ServicesDisplay() {
  const { service_data } = useContext(StoreContext);

  if (!service_data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="services-display" id="services-display">
      <h2 className="common_heading">Our Services</h2>
      <div className="services-display-list">
        {service_data.map((item, index) => (
          <div className="services" key={index}>
            <img className="services-image" src={item.img} alt={item.name} />

            <div className="services-content">
              <h2 className="services-title">{item.name}</h2>
              <ul className="services_list">
                {item.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
              <Link to={`/services/${index}`}>
                <button className="services-button">Know More </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesDisplay;
