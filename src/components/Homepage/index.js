import React from "react"
import "./Homepage.css"
import HeaderParent from "../HeaderParent"
import Section from "../Section"
import PortfolioSection from "../PortfolioSection"
// import InstagramSection from "../InstagramSection";
import { Container } from "reactstrap"

const Homepage = ({ data, settings }) => (
  <>
    <HeaderParent
      backgroundImage={data.header.backgroundImage}
      byline={data.header.byline}
      headline={data.header.headline}
      callToAction={data.header.callToAction}
      href={data.header.callToActionHref}
    />
    <Section
      header={data.aboutMeSection.header}
      backgroundColor={settings.secondaryBackgroundColor}
    >
      <Container className="Content-container">
        {data.aboutMeSection.content}
      </Container>
    </Section>
    <Section
      header={data.webDevelopmentSection.header}
      callToAction={data.webDevelopmentSection.callToAction}
      href={data.webDevelopmentSection.callToActionHref}
    >
      <PortfolioSection data={data.webDevelopmentSection.projects} />
    </Section>
    <Section
      header={data.blogSection.header}
      backgroundColor={settings.secondaryBackgroundColor}
    >
      This section is under construction, check back later!
    </Section>
    <Section header={data.djSection.header}>
      <Container>
        <iframe
          title="soundcloud-iframe"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          style={{ paddingTop: "20px" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23063116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />

        <iframe
          title="mixcloud-iframe"
          width="100%"
          height="120"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjpiro%2F"
          frameBorder="0"
        />
      </Container>
    </Section>
  </>
)

export default Homepage
