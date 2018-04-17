import React, { Component } from "react";
import "./FooterParent.css";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutubePlay,
  FaInstagram
} from "react-icons/lib/fa";
import { GoMail } from "react-icons/lib/go";

class FooterParent extends Component {
  constructor(props) {
    super(props);
    this.getNavLinkList = this.getNavLinkList.bind(this);
  }

  getNavLinkList() {
    return this.props.data.map((navLink, i) => {
      return (
        <a
          href={navLink.href}
          className={navLink.disabled ? "disabled" : ""}
          key={"navLink_" + i}
        >
          <li>{navLink.label}</li>
        </a>
      );
    });
  }

  render() {
    return (
      <footer
        className="footer"
        style={{ background: this.props.settings.accentBackgroundColor }}
      >
        <div className="container Footer-content">
          <h2 className="Footer-header">
            Let's create something awesome together!
          </h2>
          <ul className="Footer-nav">{this.getNavLinkList()}</ul>
          <p>© 2018 Haldun Anil. All rights reserved.</p>
          <ul className="Footer-nav">
            <a
              href="https://www.facebook.com/pyrmusic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/haldunanil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaLinkedin />
              </li>
            </a>
            <a
              href="https://www.youtube.com/channel/UC__u0LCq0eEUhjpFMIA6EZg/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaYoutubePlay />
              </li>
            </a>
            <a
              href="https://www.instagram.com/halsdunes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaInstagram />
              </li>
            </a>
            <a>
              <li>
                <GoMail />
              </li>
            </a>
          </ul>
        </div>
      </footer>
    );
  }
}

export default FooterParent;
