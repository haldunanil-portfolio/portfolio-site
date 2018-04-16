import React, { Component } from "react";
import "./CallToAction.css";
import { Button } from "reactstrap";

class CallToAction extends Component {
  render() {
    return (
      <a href={this.props.href}>
        <Button color="primary">{this.props.children}</Button>
      </a>
    );
  }
}

export default CallToAction;
