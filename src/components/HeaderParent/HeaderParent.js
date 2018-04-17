import React, { Component } from "react";
import "./HeaderParent.css";
import CallToAction from "../CallToAction";

class HeaderParent extends Component {
  render() {
    return (
      <div
        className="Header-parent"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <div className="Header-content container">
          <span>{this.props.byline}</span>
          <h1>{this.props.headline}</h1>
          {this.props.href ? <CallToAction href={this.props.href}>{this.props.callToAction}</CallToAction> : null}
        </div>
      </div>
    );
  }
}

export default HeaderParent;
