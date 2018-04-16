import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage";
import FooterParent from "../FooterParent";
import NavbarParent from "../NavbarParent/NavbarParent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: {
        headerBgImg: "/hal.jpg",
        headerByline: "Who am I and why are you on this website?",
        headerHeadline: "HELLO, IS IT ME YOU'RE LOOKING FOR?",
        headerCallToAction: "Call to action"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <NavbarParent />
        <Homepage options={this.state.homePage} />
        <FooterParent />
      </div>
    );
  }
}

export default App;
