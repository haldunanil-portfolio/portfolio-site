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
      isOpen: false,
      isTop: true,
      navbarBackground: "transparent",
      navTextColor: "#ffffff",
      navbarShadow: "none"
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getNavLinkList = this.getNavLinkList.bind(this);
  }

  handleStyleChange(condition) {
    if (condition) {
      this.setState({
        navbarBackground: "transparent",
        navTextColor: "#ffffff",
        navbarShadow: "none"
      });
    } else {
      this.setState({
        navbarBackground: "#ffffff",
        navTextColor: "#2D2C2D",
        navbarShadow: "0px 2px 5px grey"
      });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

    // change styles as appropriate
    this.handleStyleChange(this.state.isOpen);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });

        // change styles as appropriate
        this.handleStyleChange(this.state.isTop);
      }
    });
  }

  getNavLinkList() {
    return this.props.data.map(navLink => {
      return (
        <NavItem>
          <NavLink
            href={navLink.href}
            disabled={navLink.disabled}
            style={{ color: navLink.disabled ? null : this.state.navTextColor }}
          >
            {navLink.label}
          </NavLink>
        </NavItem>
      );
    });
  }

  render() {
    return (
      <Navbar
        fixed="top"
        expand="md"
        style={{
          background: this.state.navbarBackground,
          WebkitBoxShadow: this.state.navbarShadow,
          MozBoxShadow: this.state.navbarShadow,
          boxShadow: this.state.navbarShadow
        }}
      >
        <WebsiteTitle color={this.state.navTextColor} />
        <NavbarToggler style={{ borderColor: this.state.navTextColor }} onClick={this.toggle} />
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
