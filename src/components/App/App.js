import React, { Component } from "react";
import "./App.css";
import Homepage from "../Homepage";
import FooterParent from "../FooterParent";
import NavbarParent from "../NavbarParent/NavbarParent";
import Instagram from "../../util/Instagram/Instagram";

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
          disabled: false,
          hover: false
        },
        {
          label: "Portfolio",
          href: "#",
          disabled: true,
          hover: false
        },
        {
          label: "Blog",
          href: "#",
          disabled: true,
          hover: false
        },
        {
          label: "DJ",
          href: "#",
          disabled: true,
          hover: false
        },
        {
          label: "About",
          href: "#",
          disabled: true,
          hover: false
        }
      ],
      homePage: {
        header: {
          backgroundImage: "/hal2.jpg",
          byline:
            "I'm a passionate software developer by day and an energetic DJ by night. I also love to travel!",
          headline: "HELLO, IS IT ME YOU'RE LOOKING FOR?"
          // callToAction: "CALL TO ACTION",
          // callToActionHref: "/"
        },
        aboutMeSection: {
          header: "About me",
          content:
            "I strongly believe that being true to myself, my passions, and my interests is my strongest quality as an individual. I am never satisfied with the status quo and am always thinking about new ways to push the envelope, think creatively about the challenges I face, and dare to do things differently. I am not shy about expressing my opinions and am always on the lookout to do whatever I can to improve the world around me."
        },
        webDevelopmentSection: {
          header: "Some picks from my web development portfolio",
          projects: [
            {
              imageSrc: "/homepage-screenshot.png",
              imageAlt: "Portfolio website screenshot",
              title: "This website!",
              text:
                "I wanted to create a gateway into the rest of my portfolio that was simple to navigate and fun to use. This is the website you're currently viewing. Built with React.js.\n" +
                "Currently under construction, check back frequently for updates!",
              button: {
                text: "View Wireframes",
                href: "/haldunanil-portfolio-wireframe.pdf"
              }
            },
            {
              imageSrc: "/minesweeper-screenshot.png",
              imageAlt: "Minesweeper game screenshot",
              title: "MinesweepeReact",
              text:
                "A fresh take on an old classic: play Minesweeper online! Built with React.js.",
              button: {
                text: "View Project",
                href: "https://haldunanil-portfolio.github.io/minesweepereact/"
              }
            },
            {
              imageSrc: "/jammming-screenshot.png",
              imageAlt: "Jammming app screenshot",
              title: "Jammming",
              text:
                "Built on top of the Spotify Developer SDK, Jammming allows a user to discover new music, listen, and create new playlists through an easy-to-use interface. Built with React.js,",
              button: {
                text: "View Project",
                href: "https://haldunanil-portfolio.github.io/jammming/"
              }
            }
          ],
          callToAction: "EXPERIENCE MORE",
          callToActionHref: "https://www.github.com/haldunanil-portfolio/"
        },
        blogSection: {
          header: "Read some of my latest blog posts"
        },
        djSection: {
          header: "Listen to my latest DJ sets, remixes, mashups, and more"
        },
        instagramSection: {
          header: "See what a day in my life looks like",
          callToAction: "SEE MORE",
          callToActionHref: "https://www.instagram.com/halsdunes",
          images: []
        }
      }
    };
  }

  componentWillMount() {
    Instagram.scrapeMyFeed(
      this.state.homePage.instagramSection.callToActionHref
    ).then(response => {
      let homePage = this.state.homePage;
      homePage.instagramSection.images = response;
      this.setState({ homePage: homePage });
    });
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
