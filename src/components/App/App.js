import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage";
import FooterParent from "../FooterParent";
import NavbarParent from "../NavbarParent/NavbarParent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        primaryBackgroundColor: "#FFFFFF",
        secondaryBackgroundColor: "#f5f5f5",
        accentBackgroundColor: "#E22F37",
        primaryTextColor: "#2D2C2D",
        secondaryTextColor: "#FFFFFF",
        highlightTextColor: "#2B9EB3"
      },
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
        header: {
          backgroundImage: "/hal.jpg",
          byline: "Who am I and why are you on this website?",
          headline: "HELLO, IS IT ME YOU'RE LOOKING FOR?",
          callToAction: "CALL TO ACTION",
          callToActionHref: "/"
        },
        aboutMeSection: {
          header: "About me",
          content: "I strongly believe that being true to myself, my passions, and my interests is my strongest quality as an individual. I am never satisfied with the status quo and am always thinking about new ways to push the envelope, think creatively about the challenges I face, and dare to do things differently. I am not shy about expressing my opinions and am always on the lookout to do whatever I can to improve the world around me."
        },
        webDevelopmentSection: {
          header: "Some picks from my web development portfolio",
          projects: [
            {
              imageSrc: "/minesweeper-screenshot.png",
              imageAlt: "Minesweeper game screenshot",
              title: "MinesweepeReact",
              text: "A fresh take on an old classic: play Minesweeper online! Built with React.js.",
              buttonText: "View Project",
              buttonHref: "https://haldunanil-portfolio.github.io/minesweepereact/"
            },
            {
              imageSrc: "/jammming-screenshot.png",
              imageAlt: "Jammming app screenshot",
              title: "Jammming",
              text: "Built on top of the Spotify Developer SDK, Jammming allows a user to discover new music, listen, and create new playlists through an easy-to-use interface. Built with React.js,",
              buttonText: "View Project",
              buttonHref: "https://haldunanil-portfolio.github.io/jammming/"
            },
            {
              imageSrc: "/ravenous-screenshot.png",
              imageAlt: "Ravenous app screenshot",
              title: "Ravenous",
              text: "A simplified clone of Yelp, use Ravenous whenever you're feeling... well, ravenous! Built with React.js.",
              buttonText: "View Project",
              buttonHref: "https://haldunanil-portfolio.github.io/ravenous/"
            }
          ],
            callToAction: "EXPERIENCE MORE",
            callToActionHref: "/"
        }
      }
    };
  }

  render() {
    return (
      <div className="App">
        <NavbarParent data={this.state.nav} />
        <Homepage settings={this.state.settings} data={this.state.homePage} />
        <FooterParent settings={this.state.settings} data={this.state.nav} />
      </div>
    );
  }
}

export default App;
