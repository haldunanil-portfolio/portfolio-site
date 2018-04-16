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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand="md">
        <WebsiteTitle />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                PORTFOLIO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                BLOG
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                DJ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                ABOUT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarParent;
