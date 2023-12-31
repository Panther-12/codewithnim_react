/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Nim.jpg";

const imageAltText = "Once in a while he gets to unleash his full potential through a game of chess";

const Home = ({ name, title }) => {
    const hStyles = {
        backgroundColor:"#C8963E",
        color:"white",
        padding:"10px",
        marginTop:"25px",
        fontSize:"20px",
        width:"fit-content"
    }
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "10rem", left: "2rem", width: "65rem" }}>
        <h1 style={{ fontWeight: "heavy", fontSize:"90px", color:"white"}}>{name} <span style={{color:"#C8963E"}}>NYONGESA</span></h1>
        <h2 style={hStyles}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%"}}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", backgroundColor:"#C8963E",borderRadius:"50%"}} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
