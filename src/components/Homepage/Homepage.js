import React, { Component } from "react";
import "./Homepage.css";
import Header from "../Header/Header";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        Hello, is it me you're looking for?
      </div>
    );
  }
}

export default Homepage;
