import React from "react";
import styled from "styled-components";
import { StyledSection } from "../Section";
import { color } from "../../styles/utils";

export interface AlternatingSectionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const StyledAltneratingSections = styled.div`
  ${StyledSection} {
    &:nth-of-type(even) {
      background-color: ${color("gray", 0)};
    }
  }
`;

const AlternatingSections: React.FC<AlternatingSectionsProps> = (
  props: AlternatingSectionsProps,
) => {
  return <StyledAltneratingSections {...props} />;
};

export default AlternatingSections;
