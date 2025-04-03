import React, { Component } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar as RstrapNavbar,
  NavbarToggler as RstrapNavbarToggler,
  Nav,
  NavItem,
  NavLink as RstrapNavLink,
  NavLinkProps,
} from "reactstrap";
import styled, { css } from "styled-components";

import {
  color, font, spacing, Color
} from "../../styles/utils";

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  to?: string;
}

export interface NavbarParentProps {
  data?: NavLinkProps;
  defaultIsTop?: boolean;
}

interface NavbarParentState {
  isOpen: boolean;
  isTop: boolean;
  navbarBackground: string;
  navTextColor: string;
}

const Navbar = styled(RstrapNavbar)`
  transition: 0.25s ease;
`;

const NavbarBrand = styled.div<NavbarBrandProps>`
  font-size: ${spacing(5)};
  font-weight: 500;
  transition-duration: 0.25s;
  font-family: ${font("heading")};
  color: ${(props) => props.color};

  &:hover {
    text-decoration: none;
    color: ${color("primary", 3)};
  }
`;

const NavbarToggler = styled(
  ({ ...props }: { togglerStatus: string; [key: string]: any }) => (
    <RstrapNavbarToggler {...props} />
  ),
)`
  ${(props) => (props.togglerStatus === "active"
    ? css`
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#222' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
        `
    : css`
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
        `)};
`;

const NavLink = styled(RstrapNavLink)`
  transition-duration: 0.25s;
  font-family: ${font("heading")};
  font-size: ${spacing(5)};

  &:hover {
    color: ${color("primary", 3)} !important;
  }
`;

const externalRe = /http[s]:\/\/.*/;

class NavbarParent extends Component<NavbarParentProps, NavbarParentState> {
  public static defaultProps: NavbarParentProps = {
    defaultIsTop: false,
  };

  private getNavLinkList = () => {
    const { data } = this.props;
    const { navTextColor } = this.state;

    return (
      data
      && data.map((navLink: NavLinkProps) => {
        const external = externalRe.test(navLink.href as string);
        let navProps = {};

        if (external) {
          navProps = {
            tag: "a",
            target: "_blank",
            href: navLink.href,
          };
        } else {
          navProps = {
            tag: Link,
            to: navLink.href,
          };
        }

        return (
          <NavItem
            key={`navItem_${navLink.label}`}
            style={{ cursor: navLink.disabled ? "no-drop" : undefined }}
          >
            <NavLink
              {...navProps}
              disabled={navLink.disabled}
              style={{
                color: navLink.disabled ? null : navTextColor,
              }}
            >
              {navLink.label}
            </NavLink>
          </NavItem>
        );
      })
    );
  };

  private handleStyleChange = (condition: boolean) => {
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
  };

  private toggle = () => {
    const { isOpen } = this.state;

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));

    // change styles as appropriate
    this.handleStyleChange(isOpen);
  };

  public readonly state: NavbarParentState = {
    isOpen: false,
    // eslint-disable-next-line react/destructuring-assignment
    isTop: this.props.defaultIsTop as boolean,
    navbarBackground: "transparent",
    navTextColor: "#ffffff",
  };

  public componentDidMount() {
    const { isTop } = this.state;

    this.handleStyleChange(isTop as boolean);

    document.addEventListener("scroll", () => {
      const newIsTop = window.scrollY < 500;
      if (newIsTop !== isTop) {
        this.setState({ isTop });

        // change styles as appropriate
        this.handleStyleChange(isTop as boolean);
      }
    });
  }

  render() {
    const {
      isOpen, isTop, navbarBackground, navTextColor
    } = this.state;

    // initialize togglerStatus element to decide color
    let togglerStatus;

    // decide the color of the interior
    if (isTop) {
      // if we're at the top of the screen AND the toggler is open, make the colors active
      if (isOpen) {
        togglerStatus = "active";

        // if we're at the top of the screen AND the toggler is closed, make the colors passive
      } else {
        togglerStatus = "passive";
      }

      // if we're NOT at the top, make the colors active
    } else {
      togglerStatus = "active";
    }

    return (
      <Navbar
        fixed="top"
        expand="md"
        style={{
          background: navbarBackground,
        }}
      >
        <NavbarBrand as={Link} to="/" color={navTextColor as Color}>
          Haldun Anil
        </NavbarBrand>
        <NavbarToggler
          style={{ borderColor: navTextColor }}
          onClick={this.toggle}
          togglerStatus={togglerStatus}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.getNavLinkList()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarParent;
