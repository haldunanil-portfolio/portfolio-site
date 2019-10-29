import React from "react"
import "./Section.css"
import CallToAction from "../CallToAction"

const Section = ({ backgroundColor, callToAction, children, header, href }) => (
  <div
    className="Section"
    style={{
      background: backgroundColor ? backgroundColor : null,
    }}
  >
    <h2 style={{ paddingBottom: "20px" }}>{header}</h2>
    {children}
    {href ? <CallToAction href={href}>{callToAction}</CallToAction> : null}
  </div>
)

export default Section
