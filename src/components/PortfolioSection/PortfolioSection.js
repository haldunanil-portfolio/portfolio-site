import React, { Component } from "react";
import "./PortfolioSection.css";
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

class PortfolioSection extends Component {
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
            <CardText>
              <small className="text-muted">Posted on 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container className="Grid-container">
        <CardDeck className="Generic-grid">{this.getCardDeck()}</CardDeck>
      </Container>
    );
  }
}

export default PortfolioSection;
