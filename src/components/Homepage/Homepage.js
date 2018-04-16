import React, { Component } from "react";
import "./Homepage.css";
import HeaderParent from "../HeaderParent";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeaderParent
          backgroundImage={this.props.options.headerBgImg}
          byline={this.props.options.headerByline}
          headline={this.props.options.headerHeadline}
          callToAction={this.props.options.headerCallToAction}
        />
      </div>
    );
  }
}

export default Homepage;
