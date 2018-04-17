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
          <PortfolioSection data={this.props.data.webDevelopmentSection.projects} />
        </Section>
        <Section
          header="Read some of my latest blog posts"
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          This section is under construction, check back later!
        </Section>
        <Section header="Listen to my latest DJ sets" id="Dj-section">
          This section is under construction, check back later!
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
