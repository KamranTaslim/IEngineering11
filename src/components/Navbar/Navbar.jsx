import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const servicesPaths = [
      "/services/null",
      "/services/0",
      "/services/1",
      "/services/2",
      "/services/3",
      "/services/4",
      "/services/5",
      "/services/6",
      "/services/7",
    ];

    if (path === "/") {
      setMenu("home");
    } else if (servicesPaths.includes(path)) {
      setMenu("services");
    } else if (path === "/Projects") {
      setMenu("projects");
    } else if (path === "/contact-us") {
      setMenu("contact-us");
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "home", label: "Home", path: "/" },
    { name: "services", label: "Services", path: "/services/null" },
    { name: "projects", label: "Projects", path: "/Projects" },
    { name: "contact-us", label: "Contact Us", path: "/ContactUs" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <li
                onClick={() => {
                  setMenu(item.name);
                  setIsMobileMenuOpen(false); // Close mobile menu on item click
                }}
                className={menu === item.name ? "active" : ""}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
