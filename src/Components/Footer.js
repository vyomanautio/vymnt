import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa';
import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <div>
        <img src={'/images/gradient.png'} alt="ISRO" class="fix-img-btm" />
        <footer>
          <div className="row">
            <div id="go-top"></div>
            <div>
              <center>
                <ul className="social-links text-white">
                  <li>
                    <a className="text-white" href={"https://twitter.com/"}>
                      <BsTwitter/>
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href={"https://www.instagram.com/vyomanaut.io/"}>
                      <BsInstagram/>
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href={"https://discord.gg/bX6zD87e2j"}>
                      <BsDiscord/>
                    </a>
                  </li>
                </ul>
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
