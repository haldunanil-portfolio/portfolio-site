import React, { Component } from "react";
import "./Homepage.css";
import HeaderParent from "../HeaderParent";
import Section from "../Section";
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
          data={this.props.data.webDevelopmentSection.projects}
          callToAction={this.props.data.webDevelopmentSection.callToAction}
          href={this.props.data.webDevelopmentSection.callToActionHref}
        />
        <Section
          header="Read some of my latest blog posts"
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          This section is under construction, check back later!
        </Section>
        <Section header="Listen to my latest DJ sets">
          This section is under construction, check back later!
        </Section>
        <Section
          header="See what a day in my life looks like"
          backgroundColor={this.props.settings.secondaryBackgroundColor}
        >
          This section is under construction, check back later!
        </Section>
      </div>
    );
  }
}

export default Homepage;
