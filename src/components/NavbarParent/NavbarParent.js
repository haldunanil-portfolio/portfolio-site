import React, { Component } from "react";
import "./NavbarParent.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import WebsiteTitle from "../WebsiteTitle";

class NavbarParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.getNavLinkList = this.getNavLinkList.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getNavLinkList() {
    return this.props.data.map(navLink => {
      return (
        <NavItem>
          <NavLink href={navLink.href} disabled={navLink.disabled}>
            {navLink.label}
          </NavLink>
        </NavItem>
      );
    });
  }

  render() {
    return (
      <Navbar expand="md">
        <WebsiteTitle />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.getNavLinkList()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarParent;
