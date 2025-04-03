import React from "react";
import styled from "styled-components";

import { font } from "../../styles/utils";

import CallToAction from "../CallToAction";
import Header, { StyledHeader } from "../Header";

export type BackgroundImage = string;

export interface HeroBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: BackgroundImage;
}

export interface HeroProps {
  backgroundImage?: BackgroundImage;
  byline?: string;
  callToAction?: string;
  headline?: string;
  href?: string;
}

const HeroBody = styled.div<HeroBodyProps>`
  height: 550px;
  width: 100%;
  background: #2d2c2d;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage});
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #ffffff;

  ${StyledHeader} {
    font-size: 3rem;
    font-family: ${font("heading")};
  }
`;

const Subtitle = styled.span`
  font-size: 1.25rem;
  font-family: ${font("cursive")};
`;

const HeroParent: React.FC<HeroProps> = ({
  backgroundImage,
  byline,
  callToAction,
  headline,
  href,
}: HeroProps) => (
  <HeroBody backgroundImage={backgroundImage}>
    <HeroContent className="container">
      <Header>{headline}</Header>
      <Subtitle>{byline}</Subtitle>
      {href ? <CallToAction href={href}>{callToAction}</CallToAction> : null}
    </HeroContent>
  </HeroBody>
);

export default HeroParent;
