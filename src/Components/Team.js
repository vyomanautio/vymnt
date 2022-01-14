import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Team extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.members.map(function (projects) {
      let projectImage = "images/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          {/* <div className="row">
            <div className="twelve columns collapsed">
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-2 border border-white ps-0">
                  <div className="text-white border-end border-bottom border-white p-2">
                      <strong>FOUNDER</strong>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <Zmage alt={projects.title} src={'images/members.png'} />
                      <div style={{ textAlign: "center" }}>{projects.title}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 text-white">
                  <strong>
                    <hr/>
                  </strong>
                </div>
                <div className="col-md-2 border border-white ps-0">
                  <div className="text-white border-end border-bottom border-white p-2">
                      <strong>COMMUNITY DEVLOPER</strong>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <Zmage alt={projects.title} src={'images/members.png'} />
                      <div style={{ textAlign: "center" }}>{projects.title}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 text-white">
                  <strong>
                    <hr/>
                  </strong>
                </div>
                <div className="col-md-2 border border-white ps-0">
                  <div className="text-white border-end border-bottom border-white p-2">
                      <strong>WEB DEVLOPER</strong>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <Zmage alt={projects.title} src={'images/members.png'} />
                      <div style={{ textAlign: "center" }}>{projects.title}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 text-white">
                  <strong>
                    <hr/>
                  </strong>
                </div>
                <div className="col-md-2 border border-white ps-0">
                  <div className="text-white border-end border-bottom border-white p-2">
                      <strong>CONTENT DEVLOPER</strong>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <Zmage alt={projects.title} src={'images/members.png'} />
                      <div style={{ textAlign: "center" }}>{projects.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Team;
