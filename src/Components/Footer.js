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
              <li key="email">
                <a href="mailto:brendanengh@gmail.com" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li key="GitHub">
                <a href="https://github.com/beeenut/" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <br />

                <br />
              </li>
              <li>
                Header Photo credit:{" "}
                <a
                  title="Casey Horner"
                  href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
                  target="_blank"
                >
                  Casey Horner
                </a>
              </li>
              <li>
                Website Created by Brendan Engh using templates from{" "}
                <a
                  title="Styleshout"
                  href="http://www.styleshout.com/"
                  target="_blank"
                >
                  Styleshout
                </a>{" "}
                and{" "}
                <a
                  title="Tim Baker"
                  href="https://github.com/tbakerx/react-resume-template"
                  target="_blank"
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
