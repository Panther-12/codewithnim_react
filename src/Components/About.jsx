/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "based in Chuka . My vision is to leave a mark in the computing field by building a ";
const description2 =
  "in the next three years. Together, we'll focus on creating solutions that have a real impact on society and instill a culture of giving back. Join me in this mission to blend technical prowess with social responsibility for a brighter future.";
const descriptionIntro = "I'm a ";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "User interfaces",
  "Backend Architecture",
  "Database Management",
  "Server Configuration",
  "API Integration",
  "Full Stack Frameworks",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my web development experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Meet Nimrod</h2>
        <p className="large">
          {descriptionIntro}{" "}
          <span style={{ color: "#E3C567", fontWeight: "600" }}>Fullstack Engineer </span>
          {description}
          <span style={{ color: "#E3C567", fontWeight: "600" }}>
            community of over 500 developers{" "}
          </span>
          {description2}
        </p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
