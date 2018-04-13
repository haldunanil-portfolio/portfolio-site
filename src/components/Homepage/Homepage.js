import React, { Component } from "react";
import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Homepage extends Component {
  render() {
    return (
        <div>
            <Header/>
            Hello, is it me you're looking for?
            <Footer/>
        </div>
    );
  }
}

export default Homepage;
