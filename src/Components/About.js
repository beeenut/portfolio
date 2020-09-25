import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={"images/brendan.png"}
              alt="Brendan Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              I am a tech nerd at heart with a passion for designing systems
              that amplify exploration. As a founding graduate of SCU’s
              Electrical & Computer Engineering program and satellite specialist
              of the Robotic Systems Lab, my most valued accomplishment was
              building an autonomous drone cluster for applications in
              industries like agriculture and environmental monitoring. My most
              creative solutions are influenced by my love for the outdoors --
              fishing, surfing, skiing, or traveling.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Brendan Engh</span>
                  <br />
                  <span>La Jolla, California, 92037</span>
                  <br />
                  <span>
                    <a href="tel:+18583442793">(858) 344-2793</a>
                  </span>
                  <br />
                  <span>
                    <a href="mailto:brendanengh@gmail.com">
                      brendanengh@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={"Brendan Engh Resume.pdf"}
                    className="button"
                    download
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
