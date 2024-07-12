import React from "react";
import "./AboutUs.css";
import { AboutData } from "./AboutData/AboutData";

function AboutUs() {
  return (
    <>
      <section className="testimonials-section">
        <h2 className="common_heading">About Us</h2>
        <div className="container page-padding">
          {AboutData.map((item, index) => (
            <div className="testimonials-wrapper" key={index}>
              <div className="img-container">
                <img
                  alt="testimonial_img"
                  src="https://img.freepik.com/premium-photo/portrait-indian-male-businessman-standing-white-background_466689-45678.jpg?w=360"
                  className={`testimonial-img ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                />

                <div className="text-boxes">
                  <div
                    className={`quote-section ${
                      index % 2 === 0 ? "even" : "odd"
                    }`}
                  >
                    <img
                      alt="quote_img"
                      src={item.image}
                      className={`quote-img ${
                        index % 2 === 0 ? "even" : "odd"
                      }`}
                    />
                    <p className="quote-text">{item.text}</p>
                    <h3 className="quote-name">{item.name}</h3>
                    <p className="quote-job">{item.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
