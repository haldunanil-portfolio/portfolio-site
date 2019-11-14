import React, { Component } from "react";
import {
  Card as RstrapCard,
  CardImgOverlay as RstrapCardImgOverlay,
  CardImg as RstrapCardImg,
  CardTitle as RstrapCardTitle,
  CardText as RstrapCardText,
  CardDeck,
  Container
} from "reactstrap";
import styled from "styled-components";

import Button from "../Button";

export interface CardButtonProps {
  href?: string;
  text?: string;
}

export interface CardProps {
  id: number;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
  text?: string;
  button: CardButtonProps;
}

export interface PortfolioSectionProps {
  data?: CardProps[];
}

const CardImg = styled(RstrapCardImg)`
  transition: 0.5s ease;
  opacity: 1;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

const CardImgOverlay = styled(RstrapCardImgOverlay)`
  transition: 0.5s ease;
  opacity: 0;
`;

const CardTitle = styled(RstrapCardTitle)`
  font-weight: 600;
`;

const CardText = styled(RstrapCardText)`
  font-size: 0.9rem;
`;

const Card = styled(RstrapCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    ${CardImg} {
      filter: brightness(50%);
    }

    ${CardImgOverlay} {
      opacity: 1;
    }
  }
`;

class PortfolioSection extends Component<PortfolioSectionProps> {
  getCardDeck = () => {
    const { data } = this.props;

    return (
      data
      && data.map(card => {
        return (
          <Card key={`card_${card.id}`} inverse>
            <CardImg src={card.imageSrc} alt={card.imageAlt} />
            <CardImgOverlay>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
              <a
                href={card.button.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{card.button.text}</Button>
              </a>
            </CardImgOverlay>
          </Card>
        );
      })
    );
  };

  render() {
    return (
      <Container>
        <CardDeck>{this.getCardDeck()}</CardDeck>
      </Container>
    );
  }
}

export default PortfolioSection;
