import React, { Component } from "react";
import Flip from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.projectDetails;

    return (
        <div>
          <div className="img-container">
            <Flip duration={1000}>
              <img src={'/images/astro2.png'} alt="boohoo" className="img-to-fit"/>
            </Flip>
            {/* <div className="logo-div">
              <img src={'/images/vyomnaut.png'} alt="boohoo" className="logo"/>
            </div> */}
          </div>
        </div>
    );
  }
}

export default Header;