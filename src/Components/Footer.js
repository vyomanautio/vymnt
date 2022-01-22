import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          {/* <a href={network.url}> */}
          <a href={'/'}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <div>
        <img src={'/images/gradient.png'} alt="ISRO" class="fix-img-btm" />
        <footer>
          <div className="row">
            <div id="go-top">
              {/* <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a> */}
            </div>
            <div>
              <center>
                <ul className="social-links">{networks}</ul>
              </center>
              <center className="text-dark">
                &copy; Copyright 2022
              </center>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
