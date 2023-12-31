/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Services from "./Components/Services";
import Certifications from "./Components/Certifications";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "I AM NIMROD",
  title: "FULLSTACK ENGINEER | UI & UX DESIGNER | ANDROID APP DEVELOPER ",
  email: "nimrodnyongesa7@gmail.com",
  gitHub: "Panther-12",
  instagram: "nimrodwalwe",
  linkedIn: "nimrod-nyongesa-walwe",
  medium: "@nimrodnyongesa7",
  twitter: "@NimrodWalwe",
  youTube: "SilentSea",
};

const primaryColor = "#573D1C";
const secondaryColor = "#E3C567";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Services />
      <Portfolio />
      <Certifications/>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
