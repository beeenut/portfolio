import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
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
              <a href="mailto:brendanengh@gmail.com">brendanengh@gmail.com</a>
            </span>
          </p>
        </div>
      </section>
    );
  }
}
export default Contact;
