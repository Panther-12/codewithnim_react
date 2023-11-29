/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project_ecommerce.png";
import laptopfinds from "../images/projects/laptopfinds.png";
import restraurant from "../images/projects/restaurant.png";
import music4life from "../images/projects/music4life.png";
import twitter from "../images/projects/twitter.png";

const imageAltText = "E-commerce platform exclusively dealing with laptops";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-commerce platform",
    description:
      "Laptop Finds: Affordable campus laptop marketplace with vendor-negotiable listings for students to snag the best deals.",
    url: "https://laptopfinds-ff04cf24aea5.herokuapp.com/site/",
    skillset: ["Django", "DRF", "Africastalking api", "Daraja api", "Postgresql", "Heroku"],
    img: laptopfinds,
  },
  {
    title: "Twitter API intergration",
    description:
      "Twitter app with Quotel API on Rapid API platform: Generate random quotes and post directly to Twitter or Facebook.",
    url: "https://codepen.io/NimrodNyongesa/full/JjraPzw",
    skillset: ["React", "Twitter api", "Rapid api", "MongoDB"],
    img: twitter,
  },
  {
    title: "Hotel management system",
    description:
      "Little Lemon: Restaurant app showcasing menus, managing reservations, and using Google Maps API for precise location.",
    url: "https://africancharm-eats.vercel.app/",
    skillset: ["Django", "Postgresql", "REST APIs", "Vercel", "Postman"],
    img: restraurant,
  },
  {
    title: "Music web app",
    description:
      "Music for Life: App for peer-to-peer music sharing through public rooms for collective listening joy.",
    url: "https://github.com/Panther-12/Music4Life",
    skillset: ["React", "Figma", "Spotify API", "Django", "Postgresql"],
    img: music4life,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <div className="section-title2">
        <h2>My Work</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container-fluid About-header">
          <div className="row mb-5 po_items_ho">
            {projectList.map((project, i) => {
              return (
                <div key={i} className="col-3 po_item">
                  <img src={project.img} alt="" />
                  <div className="content">
                    <p>{project.description}</p>
                    <a href={project.url} style={{ padding: "10px"}}>View project</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
