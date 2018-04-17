import React, { Component } from "react";
import "./InstagramSection.css";
import {
  Card,
  CardImgOverlay,
  CardImg,
  CardText,
  CardDeck,
  Container
} from "reactstrap";
import { FaComments, FaThumbsUp } from "react-icons/lib/fa";

class InstagramSection extends Component {
  constructor(props) {
    super(props);
    this.getTimeSince = this.getTimeSince.bind(this);
    this.getCardDeck = this.getCardDeck.bind(this);
  }

  getTimeSince(date) {
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;

    let elapsed = Date.now() - date * 1000;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  }

  getCardDeck(startIndex, endIndex) {
    return this.props.data.slice(startIndex, endIndex).map((card, i) => {
      return (
        <Card key={"card_" + i} inverse>
          <CardImg src={card.imageSrc} alt={card.imageCaption} />
          <CardImgOverlay>
            <CardText>{card.imageCaption}</CardText>
            <CardText>
              {card.numLikes} <FaThumbsUp /> | {card.numComments} <FaComments />
            </CardText>
            <CardText>
              <small className="text-muted">
                Posted {this.getTimeSince(card.takenAt)} ago
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container className="Grid-container">
        <CardDeck className="Generic-grid">{this.getCardDeck(0, 4)}</CardDeck>
        <br />
        <CardDeck className="Generic-grid">{this.getCardDeck(4, 8)}</CardDeck>
        <br />
        <CardDeck className="Generic-grid">{this.getCardDeck(8, 12)}</CardDeck>
      </Container>
    );
  }
}

export default InstagramSection;
