import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/navbar.css"; 
import logoImage from './images/LOGO IMG.png';

const Navbar = () => {
  const location = useLocation(); // Current URL எடுக்க

  useEffect(() => {
    let navLinks = document.querySelectorAll(".nav-item a");
    navLinks.forEach(link => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [location]);

  return (
    <div className='container-Fluid'>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/"><img src={logoImage} alt="logo"/></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/About">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Package">Plans & Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>

          <div className="d-flex align-items-center nav-button">
            <a href="/Enquiryform"><button>Enquiry</button></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
