import React, { Component } from "react";
import "./FooterParent.css";

class FooterParent extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          Place sticky footer content here.
        </div>
      </footer>
    );
  }
}

export default FooterParent;
