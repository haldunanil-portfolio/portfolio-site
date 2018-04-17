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
      });
    } else {
      this.setState({
        navbarBackground: "rgb(51, 51, 51, 0.15)",
        navTextColor: "#2D2C2D",
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
      const isTop = window.scrollY < 550;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });

        // change styles as appropriate
        this.handleStyleChange(this.state.isTop);
      }
    });
  }

  getNavLinkList() {
    return this.props.data.map((navLink, i) => {
      return (
        <NavItem key={"navItem_" + i}>
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
          background: this.state.navbarBackground
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
