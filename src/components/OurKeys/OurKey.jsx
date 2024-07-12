// import React from "react";
import React, { useState } from "react"; // Ensure useState is imported
import "./OurKey.css";
import { ourkey_data } from "./OurKey_Data/OurKey";

function OurKey() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div className="ourkey">
        <h2 className="common_heading">Our Key Areas</h2>
        <div className="main_Ourkey">
          <div className="container_ourkey">
            <ul>
              {ourkey_data.map((tab, i) => (
                <li
                  key={i}
                  className={`${activeTab === i ? "active" : ""}`}
                  onMouseOver={() => handleClick(i)}
                >
                  <img src={tab.img} alt={tab.title} className="tab-image" />
                  {tab.title}
                </li>
              ))}
            </ul>
            <div className="content">
              {ourkey_data.map((data, i) => (
                <div
                  className={`desc ${activeTab === i ? "active" : ""}`}
                  key={i}
                >
                  {data.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurKey;
