import React from "react"
import "./CallToAction.css"
import { Button } from "reactstrap"

const CallToAction = ({ children, href }) => {
  return (
    <a href={href} target="_blank">
      <Button className="Primary-cta">{children}</Button>
    </a>
  )
}

export default CallToAction
