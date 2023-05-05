import React from "react";
import logo from "../assets/icons/logo.png";

export default function Header() {
  return (
    <section className="h-wrapper ">
      <div className="h-container container">
        <img src={logo} alt="logo" width="120" />

        <div className="h-nav-wrapper">
          <nav className="h-menu">
            <a href="#" className="h-menu_item">
              Residencies
            </a>
            <a href="#" className="h-menu_item">
              Our Value
            </a>
            <a href="#" className="h-menu_item">
              Contact Us
            </a>
            <a href="#" className="h-menu_item">
              Get Started
            </a>
          </nav>

          <a href="#" className="btn">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
