import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={"images/brendan.jpg"}
              alt="Brendan Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              My name is Brendan Engh. I'm a surfer, a fisher, a skier, a
              traveller, and I'm also one of the first students to graduate from
              Santa Clara University with a BS in Electrical & Computer
              Engineering. I love the outdoors and enjoy solving difficult
              technical problems and learning along the way. I specialize in
              computer architecture, electrical design, and embedded systems.
              I'm also currently seeking a full-time job or a part-time
              internship while I complete my master's degree at SCU.
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
