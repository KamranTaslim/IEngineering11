import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className=" footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={assets.logo} alt="footer_logo" className="footer-logo" />
          <p className="footer-text">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          {/* Socials */}
          <div className="footer-socials">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="footer-social-icon"
            />
            <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="footer-social-icon"
            />
            <FontAwesomeIcon icon={faYoutube} className="footer-social-icon" />
          </div>
          <p className="footer-privacy">
            Privacy Policy | © {new Date().getFullYear()}iEngineering <br />{" "}
            Design by
            <span> ADKT </span>
          </p>
        </div>
        <span></span>
        <div>
          <form className="form-container">
            <h3 className="form-heading">Contact Us</h3>
            <span className="form-highlight"></span>
            <input
              className="form-input"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="form-input"
              placeholder="Email Address *"
              type="email"
            ></input>

            <textarea
              placeholder="Comment"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-button">
              submit now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
