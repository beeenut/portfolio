import React, { Component } from "react";
/*
              <li key="github">
                <a href="http://github.com/beeenut" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li key="twitter">
                <a href="https://twitter.com/EnghBrendan" target="_blank">
                  <i className="fa fa-twitter"></i>
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
*/

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Brendan Engh</h1>
            <h3>
              Current graduate student of Electrical & Computer Engineering, MS
              at Santa Clara University, pursuing a full-time position in
              aerospace or computer architecture. I specialize in computer
              architecture, electrical design, and embedded systems.
            </h3>
            <hr />
            <ul className="social">
              <li key="linkedin">
                <a
                  href="https://www.linkedin.com/in/brendan-engh/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
