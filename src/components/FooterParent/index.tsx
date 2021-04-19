import React, { Component } from "react";
import styled, { css } from "styled-components";

import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Link } from "gatsby";
import { color, font } from "../../styles/utils";

export interface FooterNavLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  href?: string;
  label?: string;
}

export interface FooterParentProps {
  data?: FooterNavLinkProps[];
}

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  color: ${color("gray", 0)};
  font-family: ${font("heading")};
  overflow: auto;
  background-color: ${color("danger", 5)};
  text-align: center;

  @media (max-width: 332px) {
    height: 275px;
  }

  @media (min-width: 333px) and (max-width: 759px) {
    height: 250px;
  }

  @media (min-width: 760px) {
    height: 200px;
  }
`;

const FooterContent = styled.div`
  padding-top: 20px;
`;

const FooterHeader = styled.h2`
  padding-bottom: 10px;
`;

const FooterNav = styled.ul`
  padding: 0;
`;

const FooterNavLink = styled.a<FooterNavLinkProps & { to?: string }>`
  text-decoration: none;
  color: ${color("gray", 0)};
  transition: 0.25s;

  &:hover {
    color: ${color("primary", 3)};
  }

  ${props => props.disabled
    && css`
      &,
      &:hover {
        text-decoration: none;
        color: #cdcdc9;
        cursor: no-drop;
      }
    `}
`;

const FooterNavItem = styled.li`
  display: inline;
  list-style-type: none;
  padding: 0 10px;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
`;

class FooterParent extends Component<FooterParentProps> {
  getNavLinkList = () => {
    const { data } = this.props;

    return (
      data
      && data.map(({ href, disabled, label }) => {
        return (
          <FooterNavLink
            href={href}
            disabled={disabled}
            key={`navLink_${label}`}
          >
            <FooterNavItem>{label}</FooterNavItem>
          </FooterNavLink>
        );
      })
    );
  };

  render() {
    return (
      <Footer>
        <FooterContent className="container">
          <FooterHeader>Let&apos;s create something awesome together!</FooterHeader>
          <FooterNav>{this.getNavLinkList()}</FooterNav>
          <Copyright>
            <span>© 2021 Haldun Anil. All rights reserved. Made with </span>
            <span role="img" aria-label="golden heart emoji">
              💛
            </span>
            ️
            <span>in NYC using React.</span>
          </Copyright>
          <FooterNav>
            <FooterNavLink
              href="https://www.facebook.com/pyrmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaFacebook />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink
              href="https://www.linkedin.com/in/haldunanil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaLinkedin />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink
              href="https://www.github.com/haldunanil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaGithub />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink
              href="https://www.youtube.com/channel/UC__u0LCq0eEUhjpFMIA6EZg/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaYoutube />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink
              href="https://www.instagram.com/halsdunes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaInstagram />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink
              href="https://www.twitter.com/halsdunes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterNavItem>
                <FaTwitter />
              </FooterNavItem>
            </FooterNavLink>
            <FooterNavLink as={Link} to="/about">
              <FooterNavItem>
                <GoMail />
              </FooterNavItem>
            </FooterNavLink>
          </FooterNav>
        </FooterContent>
      </Footer>
    );
  }
}

export default FooterParent;
