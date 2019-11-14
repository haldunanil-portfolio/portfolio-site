import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

import { StyledHeader } from "../Header";
import { spacing } from "../../styles/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
}

export const StyledSection = styled.div`
  padding: 50px 0;

  ${StyledHeader} {
    padding-bottom: ${spacing(3)};
  }
`;

const Section = ({ backgroundColor, children }: SectionProps) => (
  <StyledSection>
    <Container>{children}</Container>
  </StyledSection>
);

export default Section;
