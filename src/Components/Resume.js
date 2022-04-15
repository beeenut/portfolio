import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }
    var languages = [
      "C/C++",
      "Python",
      "JavaScript",
      "Verilog",
      "ARM Assembly",
    ];
    var language = languages.map(function (languages) {
      return <span>{languages}</span>;
    });
    var softwares = [
      "MATLAB",
      "Eagle",
      "Synopsis Custom Compiler",
      "Vivado",
      "LTspice",
      "LabVIEW",
      "Visual Stuido",
    ];
    var software = softwares.map(function (softwares) {
      return <span>{softwares}</span>;
    });
    var devices = ["FPGAs", "Arduino", "STM32", "Pixhawk"];
    var device = devices.map(function (devices) {
      return <span>{devices}</span>;
    });
    var tools = [
      "Soldering Iron",
      "Oscilloscope",
      "DMM",
      "Function Generator",
      "NI ELVIS II Prototyping Board",
      "Basic Hand Tools",
    ];
    var tool = tools.map(function (tools) {
      return <span>{tools}</span>;
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="Santa Clara University">
                  <h3>Santa Clara University</h3>
                  <p className="info">
                    MS in Electrical & Computer Engineering <span>&bull;</span>
                    <em className="date">Ongoing</em>
                  </p>
                  <p>Focus Area: Digital Systems</p>
                  <p className="info">
                    BS in Electrical & Computer Engineering <span>&bull;</span>
                    <em className="date">Graduated June 2020</em>
                  </p>
                  <p>Minor: Computer Science & Engineering</p>
                </div>
                <div key="Fav Classes">
                  <h5>Coursework</h5>
                  <ul>
                    <li>
                      Machine Learning & Signal Processing using FPGAs{" "}
                      <span>&bull; Ongoing</span>
                    </li>
                    <li>
                      Logic Design Using HDL <span>&bull; Ongoing</span>
                    </li>
                    <li>
                      Adv Computer Architecture <span>&bull; A</span>
                    </li>
                    <li>
                      Computer Architecture + Lab <span>&bull; A</span>
                    </li>
                    <li>
                      VLSI + Lab <span>&bull; A</span>
                    </li>
                    <li>
                      Digital Signal Processing + Lab <span>&bull; A</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div></div>
          <div className="nine columns main-col">
            <div key="Lockheed Martin Space">
              <h3>Lockheed Martin Space - Silicon Solutions</h3>
              <p className="info">
                ASIC & FPGA Design Engineer
                <span>&bull;</span>{" "}
                <em className="date">June 2022 - Present</em>
                <p></p>
              </p>
            </div>
            <div key="Northrup Grumman Space Systems">
              <h3>Northrup Grumman Space Systems</h3>
              <p className="info">
                Electrical Engineer
                <span>&bull;</span>{" "}
                <em className="date">December 2020 - April 2022</em>
              </p>
              <p>
                Supported Air Force Launch Facilities and Missile Flight Systems
                by leading a multifunctional AGILE team to create battery load
                profiles and test plans. My work conducting weapon system tests
                and technical analysis lead to the creation of new
                specifications and AF Drawings.
              </p>
            </div>
            <div key="Robotic Systems Laboratory - SCU">
              <h3>Robotic Systems Laboratory - SCU</h3>
              <p className="info">
                Satellite Operator and Engineering Intern
                <span>&bull;</span>{" "}
                <em className="date">June 2019 - March 2020</em>
              </p>
              <p>
                Tracked NASA and privately contracted satellites around the
                clock as well as worked on multiple projects including an
                emergency radio system for SCU and integrated LoRa radios for
                use on other RSL projects.
              </p>
            </div>
            <div key="Underwriters Laboratory">
              <h3>Underwriters Laboratory</h3>
              <p className="info">
                Web Development Intern
                <span>&bull;</span>{" "}
                <em className="date">June 2019 - August 2019</em>
              </p>
              <p>
                Tested and developed a project management web application for
                all UL offices using Python + Selenium, Github, MongoDB,
                React.js,and Node.js
              </p>
            </div>
            <div key="Mobile Solar">
              <h3>Mobile Solar</h3>
              <p className="info">
                Engineering Intern
                <span>&bull;</span>{" "}
                <em className="date">June 2018 - July 2018</em>
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>
              This is a list of programming languages, software, devices, and
              tools I've successfully used in past projects, classes, and jobs.
            </p>
            <ul className="skillls">
              <li>
                <div>
                  <span>Programming Languages</span>
                  <div className="skill-item">{language}</div>
                </div>
              </li>
              <li>
                <div>
                  <span>Software</span>
                  <div className="skill-item">{software}</div>
                </div>
              </li>
              <li>
                <span>Devices</span>
                <div className="skill-item">{device}</div>
              </li>
              <li>
                <span>Tools</span>
                <div className="skill-item">{tool}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="row licenses">
          <div className="three columns header-col">
            <h1>
              <span>Licenses</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <h5>Part 107 Small Unmanned Aircraft Systems License</h5>
            <p>
              FAA drone license acquired January 2020 for SCU Senior Design
              Project.
            </p>
            <h5>Amateur Radio License-Technician Class</h5>
            <p>
              Certified HAM radio operator
              <br></br>Callsign: W6NFB
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
