import React from "react";

import meta from "../images/certifications/meta.png";
import andela from "../images/certifications/andela.png"
import freecodecamp from "../images/certifications/freecodecamp.png";

const Certifications = () => {
  const commonImageStyles={
    maxWidth:"100%"
  }

  return (
    <div className="section-wrapper">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <section class="section services-section" id="services">
        <div class="container-fluid .flex-row">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>Certifications</h2>
                <p>These are certifications that add credibility to my skills. You can verify them via <a href="https://www.linkedin.com/in/nimrod-nyongesa-walwe/">Linkedin <i class="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <img src={meta} alt="" style={commonImageStyles}/>
                <div class="feature-content">
                  <h5>Meta Backend Development</h5>
                  <p>
                    The course covered Django, django restframework, sqlite and MVT architecture.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <img src={freecodecamp} alt="" style={commonImageStyles}/>
                <div class="feature-content">
                  <h5>Backend Development and APIs</h5>
                  <p>
                    This course tackled Express js, MongoDB and MVC architecture.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <img src={andela} alt="" style={commonImageStyles}/>
                <div class="feature-content">
                  <h5>Andela Frontend Development</h5>
                  <p>
                    This course handled React js, Next js and React native.
                  </p>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
