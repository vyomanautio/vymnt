import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const aboutSection = this.props.data.aboutSectionArray;

    const headArray = aboutSection.map(item => (
        <p>
          <span>
              {item.title} {item.description}
            <br />
            </span>
        </p>
    ));

    return (
      <section id="about">
        <Fade duration={1000}>

          <div className="columns contact-details">
            <h2>About</h2>
            {headArray}
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
