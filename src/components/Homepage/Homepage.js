import React, { Component } from "react";
import "./Homepage.css";
import HeaderParent from "../HeaderParent";
import Section from "../Section";
import PortfolioSection from "../PortfolioSection";
import InstagramSection from "../InstagramSection";
import { Container } from "reactstrap";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeaderParent
          backgroundImage={this.props.data.header.backgroundImage}
          byline={this.props.data.header.byline}
          headline={this.props.data.header.headline}
          callToAction={this.props.data.header.callToAction}
          href={this.props.data.header.callToActionHref}
        />
        <Section
          header={this.props.data.aboutMeSection.header}
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          <Container className="Content-container">
            {this.props.data.aboutMeSection.content}
          </Container>
        </Section>
        <Section
          header={this.props.data.webDevelopmentSection.header}
          callToAction={this.props.data.webDevelopmentSection.callToAction}
          href={this.props.data.webDevelopmentSection.callToActionHref}
        >
          <PortfolioSection
            data={this.props.data.webDevelopmentSection.projects}
          />
        </Section>
        <Section
          header={this.props.data.blogSection.header}
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          This section is under construction, check back later!
        </Section>
        <Section header={this.props.data.djSection.header}>
          <Container>
            <iframe
              width="100%"
              height="120"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjpiro%2F"
              frameBorder="0"
            />

            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              style={{ paddingTop: "20px" }}
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23063116&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </Container>
        </Section>
        <Section
          header={this.props.data.instagramSection.header}
          callToAction={this.props.data.instagramSection.callToAction}
          href={this.props.data.instagramSection.callToActionHref}
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          <InstagramSection data={this.props.data.instagramSection.images} />
        </Section>
      </div>
    );
  }
}

export default Homepage;
