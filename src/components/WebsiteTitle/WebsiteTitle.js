import React, { Component } from "react";
import "./WebsiteTitle.css";
import { NavbarBrand } from "reactstrap";

class WebsiteTitle extends Component {
  render() {
    return (
      <NavbarBrand id="Navbar-brand" href="/">
        Haldun Anil
      </NavbarBrand>
    );
  }
}

export default WebsiteTitle;
