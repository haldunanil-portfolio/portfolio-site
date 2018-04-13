import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
