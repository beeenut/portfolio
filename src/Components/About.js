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
              My name is Brendan Engh, a recent graduate eager to attain a
              full-time or part time internship while I complete my master’s
              degree at SCU. I specialize in computer architecture, electrical
              design, and embedded systems. Not only am I one of the first
              students to graduate from SCU with a BS in Electrical & Computer
              Engineering, but I am also a surfer, a fisherman, a skier, and a
              traveller. I love the outdoors and solving difficult technical
              problems while learning along the way.
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
