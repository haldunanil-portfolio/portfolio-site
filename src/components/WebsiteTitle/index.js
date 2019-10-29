import React from "react"
import "./WebsiteTitle.css"
import { NavbarBrand } from "reactstrap"

const WebsiteTitle = ({ color }) => (
  <NavbarBrand style={{ color }} id="Navbar-brand" href="/">
    Haldun Anil
  </NavbarBrand>
)

export default WebsiteTitle
