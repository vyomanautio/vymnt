import React, { Component } from "react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;


    return (
        <div>
          <div className="img-container">
            <img src={'/images/astro2.png'} alt="boohoo" className="img-to-fit"/>
          </div>
        </div>
    );
  }
}

export default Header;