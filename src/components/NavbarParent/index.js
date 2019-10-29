import React, { Component } from "react"
import "./NavbarParent.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import WebsiteTitle from "../WebsiteTitle"

class NavbarParent extends Component {
  state = {
    isOpen: false,
    isTop: true,
    navbarBackground: "transparent",
    navTextColor: "#ffffff",
  }

  getNavLinkList = () => {
    const { data } = this.props

    return (
      data &&
      data.map((navLink, i) => {
        return (
          <NavItem key={"navItem_" + i}>
            <NavLink
              href={navLink.href}
              disabled={navLink.disabled}
              style={{
                color: navLink.disabled ? null : this.state.navTextColor,
              }}
            >
              {navLink.label}
            </NavLink>
          </NavItem>
        )
      })
    )
  }

  handleStyleChange = condition => {
    if (condition) {
      this.setState({
        navbarBackground: "transparent",
        navTextColor: "#ffffff",
      })
    } else {
      this.setState({
        navbarBackground: "rgb(51, 51, 51, 0.15)",
        navTextColor: "#2D2C2D",
      })
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })

    // change styles as appropriate
    this.handleStyleChange(this.state.isOpen)
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 550
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })

        // change styles as appropriate
        this.handleStyleChange(this.state.isTop)
      }
    })
  }

  render() {
    const { isOpen, isTop, navbarBackground, navTextColor } = this.state

    // initialize togglerStatus element to decide color
    let togglerStatus

    // decide the color of the interior
    if (isTop) {
      // if we're at the top of the screen AND the toggler is open, make the colors active
      if (isOpen) {
        togglerStatus = "active"

        // if we're at the top of the screen AND the toggler is closed, make the colors passive
      } else {
        togglerStatus = "passive"
      }

      // if we're NOT at the top, make the colors active
    } else {
      togglerStatus = "active"
    }

    return (
      <Navbar
        fixed="top"
        expand="md"
        style={{
          background: navbarBackground,
        }}
      >
        <WebsiteTitle color={navTextColor} />
        <NavbarToggler
          style={{ borderColor: navTextColor }}
          onClick={this.toggle}
          className={"NavbarToggler-" + togglerStatus}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.getNavLinkList()}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavbarParent
