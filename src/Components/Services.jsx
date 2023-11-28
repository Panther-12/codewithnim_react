import React from "react";

const Services = () => {
  const downloadFile = () => {};
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
                <h2>What I Do</h2>
                <p>These are some of the projects i have worked on that showcase my skillset.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-desktop"></i>
                </div>
                <div class="feature-content">
                  <h5>Frontend Development</h5>
                  <p>
                    I create user-friendly interfaces and responsive designs. This is done using
                    React/Angular js for web and Flutter/React native for android.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="feature-content">
                  <h5>Backend Development</h5>
                  <p>
                    I Build server-side logic and databases for web applications using three
                    frameworks Django, Express and Flask framework.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-comment"></i>
                </div>
                <div class="feature-content">
                  <h5>API Development</h5>
                  <p>
                    I Design and implement APIs for data exchange. The primary technologies used are
                    Postman, REST APIs and GraphQL
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-image"></i>
                </div>
                <div class="feature-content">
                  <h5>Database Management</h5>
                  <p>
                    Storing, retrieving, and managing data efficiently using MYSQL, MongoDB or
                    Postgresql.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-th"></i>
                </div>
                <div class="feature-content">
                  <h5>Testing and Debugging</h5>
                  <p>
                    I ensure code quality, identify and fix issues through the use of tools such as
                    jest, selenium, chai and jasmine.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-cog"></i>
                </div>
                <div class="feature-content">
                  <h5>Deployment and Maintenance</h5>
                  <p>
                    Launch web apps into production environments and provide ongoing support.
                    Technologies used include: Azure, AWS, Vercel, Netlify, Heroku, Digital ocean,
                    GoDaddy and Hostinger.
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

export default Services;
