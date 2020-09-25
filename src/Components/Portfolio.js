import React, { Component } from "react";
import { set } from "react-ga";
import Project from "./Project.js";

var projectss = [
  {
    title: "Adaptive Navigation Utilizing a Drone Cluster",
    category: "Senior Design Project built at Santa Clara University",
    image: "drone.jpg",
  },
  {
    title: "PCB Speaker",
    category: "Designed a portable PCB speaker using EAGLE",
    image: "pcb-speaker.png",
  },
  {
    title: "Advanced Computer Architecture",
    category:
      "Verilog implementation of a 5-stage processor with hazard detection, forwarding, and caching ",
    image: "pipeline.png",
  },
  {
    title: "Mouse Controlled LED Light Strip",
    category: "LED rainbow controlled by an STM32L4 microcontroller",
    image: "led.jpg",
  },
  {
    title: "4 Bit Ripple Carry Adder Hierarchical Design",
    category: "Designed Using Synopsis Custom Compiler ",
    image: "full-adder.png",
  },
  {
    title: "BrendanEngh.com",
    category: "This Website!",
    image: "website.png",
  },
];
//<a href={projects.url} title={projects.title}>
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false, project: "none" };
    this.popup = this.popup.bind(this);
    this.projectpop = this.projectpop.bind(this);
  }

  popup() {
    if (this.state.toggle) this.setState({ toggle: false });
    else this.setState({ toggle: true });
  }
  projectpop(x) {
    this.setState({ project: x });
  }

  render() {
    var pop = this.popup;
    var title = this.projectpop;
    var projects = projectss.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div
          key={projects.title}
          className="columns portfolio-item"
          onClick={() => {
            title(projects.title);
            pop();
          }}
        >
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />
            <div className="link-container">
              <div className="link-plus">
                <i className="fa fa-plus-circle"></i>
              </div>
            </div>
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-plus-circle"></i>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>

            <div id="portfolio-wrapper" className="s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
        <div className={this.state.toggle ? "show" : "noShow"}>
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={pop}>
                &times;
              </span>
              <div>
                <Project title={this.state.project}></Project>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
