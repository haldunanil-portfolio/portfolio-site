import React, { Component } from "react";
import "./Homepage.css";
import HeaderParent from "../HeaderParent";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeaderParent
          backgroundImage={this.props.options.headerBackgroundImage}
        />
        Hello, is it me you're looking for?
      </div>
    );
  }
}

export default Homepage;
