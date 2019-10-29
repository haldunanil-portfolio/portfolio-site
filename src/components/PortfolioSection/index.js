import React, { Component } from "react"
import "./PortfolioSection.css"
import {
  Card,
  Button,
  CardImgOverlay,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  Container,
} from "reactstrap"

class PortfolioSection extends Component {
  getCardDeck = () => {
    const { data } = this.props

    return (
      data &&
      data.map((card, i) => {
        return (
          <Card key={"card_" + i} inverse>
            <CardImg src={card.imageSrc} alt={card.imageAlt} />
            <CardImgOverlay>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
              <a href={card.button.href}>
                <Button color="primary">{card.button.text}</Button>
              </a>
              <CardText>
                <small className="text-muted">Posted on 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
          </Card>
        )
      })
    )
  }

  render() {
    return (
      <Container className="Grid-container">
        <CardDeck className="Generic-grid">{this.getCardDeck()}</CardDeck>
      </Container>
    )
  }
}

export default PortfolioSection
