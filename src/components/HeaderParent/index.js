import React from "react"
import "./HeaderParent.css"
import CallToAction from "../CallToAction"

const HeaderParent = ({
  backgroundImage,
  byline,
  callToAction,
  headline,
  href,
}) => (
  <div
    className="Header-parent"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="Header-content container">
      <h1>{headline}</h1>
      <span>{byline}</span>
      {href ? <CallToAction href={href}>{callToAction}</CallToAction> : null}
    </div>
  </div>
)

export default HeaderParent
