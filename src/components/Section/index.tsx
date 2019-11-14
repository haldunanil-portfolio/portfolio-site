import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

import { StyledHeader } from "../Header";
import { spacing } from "../../styles/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const StyledSection = styled.div`
  padding: 50px 0;
  text-align: center;

  ${StyledHeader} {
    padding-bottom: ${spacing(3)};
  }
`;

const Section = ({ children }: SectionProps) => (
  <StyledSection>
    <Container>{children}</Container>
  </StyledSection>
);

export default Section;
