import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          {/* <a href={network.url}> */}
          <a href={'/'}>
            <i className={network.className+' text-white'}></i>
          </a>
        </li>
      );
    });

    return (
      <div>
        <img src={'/images/gradient.png'} alt="ISRO" class="fix-img-btm" />
        <footer>
          <div className="row">
            <div id="go-top"></div>
            <div>
              <center>
                <ul className="social-links text-white">{networks}</ul>
              </center>
              <center >
                <h5 className="text-white">&copy; Copyright 2022</h5>
              </center>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
