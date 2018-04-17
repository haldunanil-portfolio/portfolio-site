import React, { Component } from "react";
import "./Section.css";
import {
  Card,
  Button,
  CardImgOverlay,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  Container
} from "reactstrap";
import CallToAction from "../CallToAction";

class Section extends Component {
  constructor(props) {
    super(props);
    this.getCardDeck = this.getCardDeck.bind(this);
  }

  getCardDeck() {
    return this.props.data.map(card => {
      return (
        <Card inverse>
          <CardImg src={card.imageSrc} alt={card.imageAlt} />
          <CardImgOverlay>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
            <a href={card.buttonHref}>
              <Button color="primary">{card.buttonText}</Button>
            </a>
          </CardImgOverlay>
        </Card>
      );
    });
  }

  render() {
    return (
      <div
        className="Section"
        style={{
          background: this.props.backgroundColor
            ? this.props.backgroundColor
            : null
        }}
      >
        <h2 style={{ paddingBottom: "20px" }}>{this.props.header}</h2>
        {this.props.data ? (
          <Container className="Grid-container">
            <CardDeck className="Generic-grid">{this.getCardDeck()}</CardDeck>
          </Container>
        ) : (
          this.props.children
        )}
        {this.props.href ? (
          <CallToAction href={this.props.href}>
            {this.props.callToAction}
          </CallToAction>
        ) : null}
      </div>
    );
  }
}

export default Section;
