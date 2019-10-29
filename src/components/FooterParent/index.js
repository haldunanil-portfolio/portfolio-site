import React, { Component } from "react"
import "./FooterParent.css"

import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
import { GoMail } from "react-icons/go"

class FooterParent extends Component {
  getNavLinkList = () => {
    const { data } = this.props

    return (
      data &&
      data.map((navLink, i) => {
        return (
          <a
            href={navLink.href}
            className={navLink.disabled ? "disabled" : ""}
            key={"navLink_" + i}
          >
            <li>{navLink.label}</li>
          </a>
        )
      })
    )
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
          <p style={{ fontSize: "0.75rem" }}>
            © 2019 Haldun Anil. All rights reserved. Made with{" "}
            <span role="img" aria-label="golden heart emoji">
              💛
            </span>
            ️ in NYC using React.
          </p>
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
                <FaYoutube />
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
    )
  }
}

export default FooterParent
