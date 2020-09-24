import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li key="linkedin">
                <a
                  href="https://www.linkedin.com/in/brendan-engh/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li key="twitter">
                <a href="https://twitter.com/EnghBrendan" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                Website Created by Brendan Engh with help from{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>{" "}
                and{" "}
                <a
                  title="Tim Baker"
                  href="https://github.com/tbakerx/react-resume-template"
                >
                  Tim Baker
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
