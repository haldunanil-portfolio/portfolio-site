import React, { Component } from "react";
import "./HeaderParent.css";

class HeaderParent extends Component {
  render() {
    return (
      <div
        className="header"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        This is a header
      </div>
    );
  }
}

export default HeaderParent;
