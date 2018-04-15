import React, { Component } from "react";
import "./HeaderParent.css";

class HeaderParent extends Component {
  render() {
    return (
      <div
        className="Header-parent"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <div className="logo" />
        <div
          className="Header-nav"
          style={{ lineHeight: "64px", float: "right" }}
        />
      </div>
    );
  }
}

export default HeaderParent;
