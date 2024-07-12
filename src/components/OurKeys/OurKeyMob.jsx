import React, { useState } from "react";
import "./OurKeyMob.css";
import { ourkey_data } from "./OurKey_Data/OurKey";

function OurKeyMob() {
  const [activeTab, setActiveTab] = useState(null); // Change initial state to null

  const handleClick = (id) => {
    setActiveTab(activeTab === id ? null : id); // Toggle activeTab state
  };

  return (
    <div className="ourkeymob">
      <h2 className="common_headingmob">Our Key Areas</h2>
      <div className="main_Ourkeymob">
        <div className="container_ourkeymob">
          <ul>
            {ourkey_data.map((tab, i) => (
              <li
                key={i}
                className={`${activeTab === i ? "active" : ""}`}
                onClick={() => handleClick(i)} // Change to onClick for mobile touch
              >
                <img src={tab.img} alt={tab.title} className="tab-imagemob" />
                {tab.title}
                {activeTab === i && ( // Show description when activeTab matches current index
                  <div className="descmob active">{tab.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurKeyMob;
