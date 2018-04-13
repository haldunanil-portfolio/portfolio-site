import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import FooterParent from "../FooterParent/FooterParent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePage: {
                headerBackgroundImage: "/hal.jpg"
            }
        };
    }

  render() {
    return (
      <div className="App">
        <Homepage options={this.state.homePage} />
        <FooterParent />
      </div>
    );
  }
}

export default App;
