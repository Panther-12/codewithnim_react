/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "black",
        opacity: "0.8",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
      className="nav-wrapper"
    >
      <a href="#home" style={{ backgroundColor: "#C8963E" }}>
        Home
      </a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
