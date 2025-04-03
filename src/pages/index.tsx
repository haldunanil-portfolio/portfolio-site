import React from "react";
import { withPrefix } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Section from "../components/Section";
import PortfolioCards from "../components/PortfolioCards";
import Text from "../components/Text";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import AlternatingSections from "../components/AlternatingSections";

const projects = [
  {
    id: 1,
    imageSrc: withPrefix("/homepage-screenshot.png"),
    imageAlt: "Portfolio website screenshot",
    title: "This website!",
    text: `I wanted to create a gateway into the rest of my portfolio that was simple to navigate and fun to use. This is the website you're currently viewing. Built with React.js.
      Currently under construction, check back frequently for updates!`,
    button: {
      text: "View Wireframes",
      href: withPrefix("/haldunanil-portfolio-wireframe.pdf"),
    },
  },
  {
    id: 2,
    imageSrc: withPrefix("/minesweeper-screenshot.png"),
    imageAlt: "Minesweeper game screenshot",
    title: "MinesweepeReact",
    text: "A fresh take on an old classic: play Minesweeper online! Built with React.js.",
    button: {
      text: "View Project",
      href: "https://haldunanil-portfolio.github.io/minesweepereact/",
    },
  },
  {
    id: 3,
    imageSrc: withPrefix("/jammming-screenshot.png"),
    imageAlt: "Jammming app screenshot",
    title: "Jammming",
    text: "Built on top of the Spotify Developer SDK, Jammming allows a user to discover new music, listen, and create new playlists through an easy-to-use interface. Built with React.js,",
    button: {
      text: "View Project",
      href: "https://haldunanil-portfolio.github.io/jammming/",
    },
  },
];

function Home() {
  return (
    <Layout defaultIsTop>
      <SEO title="Home" />
      <Hero
        backgroundImage={withPrefix("/hal2.jpg")}
        byline="I'm a passionate software developer by day and an energetic DJ by night. I also love to travel!"
        headline="HELLO, IS IT ME YOU'RE LOOKING FOR?"
      />
      <AlternatingSections>
        <Section>
          <Header size={2}>About me</Header>
          <Text>
            I strongly believe that being true to myself, my passions, and my
            interests is my strongest quality as an individual. I am never
            satisfied with the status quo and am always thinking about new ways
            to push the envelope, think creatively about the challenges I face,
            and dare to do things differently. I am not shy about expressing my
            opinions and am always on the lookout to do whatever I can to
            improve the world around me.
          </Text>
        </Section>
        <Section>
          <Header>Some picks from my web development portfolio</Header>
          <PortfolioCards data={projects} />
          <CallToAction href="https://www.github.com/haldunanil-portfolio/">
            Experience More
          </CallToAction>
        </Section>
        <Section>
          <Header size={2}>Read some of my latest blog posts</Header>
          <Text>This section is under construction, check back later!</Text>
        </Section>
        <Section>
          <Header size={2}>
            Listen to my latest DJ sets, remixes, mashups, and more
          </Header>
          <iframe
            title="soundcloud-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23063116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />

          <iframe
            title="mixcloud-iframe"
            width="100%"
            height="120"
            style={{ marginTop: "1rem" }}
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjpiro%2F"
            frameBorder="0"
          />
        </Section>
      </AlternatingSections>
    </Layout>
  );
}

export default Home;
