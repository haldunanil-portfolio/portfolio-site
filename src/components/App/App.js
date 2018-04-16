import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage";
import FooterParent from "../FooterParent";
import NavbarParent from "../NavbarParent/NavbarParent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        {
          label: "Home",
          href: "/",
          disabled: false
        },
        {
          label: "Portfolio",
          href: "#",
          disabled: true
        },
        {
          label: "Blog",
          href: "#",
          disabled: true
        },
        {
          label: "DJ",
          href: "#",
          disabled: true
        },
        {
          label: "About",
          href: "#",
          disabled: true
        }
      ],
      homePage: {
        headerBgImg: "/hal.jpg",
        headerByline: "Who am I and why are you on this website?",
        headerHeadline: "HELLO, IS IT ME YOU'RE LOOKING FOR?",
        headerCallToAction: "CALL TO ACTION",
        headerCallToActionHref: "/"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <NavbarParent data={this.state.nav} />
        <Homepage options={this.state.homePage} />
        <FooterParent />
      </div>
    );
  }
}

export default App;
