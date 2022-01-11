import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.projectDetails;

    return (
        <div>
          <div className="img-container">
            <img src={'/images/main_bg.png'} alt="boohoo" className="img-to-fit"/>
            <div className="logo-div">
              <img src={'/images/vyomnaut.png'} alt="boohoo" className="logo"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;