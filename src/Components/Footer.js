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
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Dev</li>
                <li>
                  Design by{" "}
                  <a title="Dev" href="">
                    Dev
                  </a>
                </li>
              </ul>
            </div>

          
        </div>
      </footer>
      </div>
    );
  }
}

export default Footer;
