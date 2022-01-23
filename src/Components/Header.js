import React, { Component,Fragment } from "react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;


    return (
        <Fragment>
          <div className="row">
            <div className="col-md-12 col-12  img-set-background">
              <h1>
              <button type="button" class="cursor-custom btn btn-outline-secondary float-end mt-5 me-md-5 me-3" disabled>
                {'Connect'}
              </button>
              </h1>
            </div>
          </div>
        </Fragment>
    );
  }
}

export default Header;