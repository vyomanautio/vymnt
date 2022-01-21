import React, { Component,Fragment } from "react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;


    return (
        // <div>
        //   <div className="img-container">
        //     <img src={'/images/new/asto 1.png'} alt="boohoo" className="img-to-fit"/>
        //   </div>
        // </div>
        <Fragment>
          <div className="row">
            <div className="col-md-1 col-12"></div>
            <div className="col-md-10 col-12 text-center">
              <img src={'/images/new/asto 1.png'} alt="boohoo" className="img-to-fit"/>
            </div>
            <div className="col-md-1 col-12"></div>
          </div>
        </Fragment>
    );
  }
}

export default Header;