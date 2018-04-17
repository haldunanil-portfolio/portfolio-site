import React, { Component } from "react";
import "./Section.css";
import CallToAction from "../CallToAction";

class Section extends Component {
  render() {
    return (
      <div
        className="Section"
        style={{
          background: this.props.backgroundColor
            ? this.props.backgroundColor
            : null
        }}
      >
        <h2 style={{ paddingBottom: "20px" }}>{this.props.header}</h2>
        {this.props.children}
        {this.props.href ? (
          <CallToAction href={this.props.href}>
            {this.props.callToAction}
          </CallToAction>
        ) : null}
      </div>
    );
  }
}

export default Section;
