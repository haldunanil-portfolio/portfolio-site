import React, { Component } from "react";
import "./HeaderParent.css";
import { Button } from "reactstrap";

class HeaderParent extends Component {
  render() {
    return (
      <div
        className="Header-parent"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <div className="Header-content">
          <span>{this.props.byline}</span>
          <h1>{this.props.headline}</h1>
          <br />
          <Button color="primary">{this.props.callToAction}</Button>
        </div>
      </div>
    );
  }
}

export default HeaderParent;
