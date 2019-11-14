import React from "react";
import styled from "styled-components";
import { font } from "../../styles/utils";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const StyledText = styled.span`
  font-family: ${font("body")};
`;

const Text: React.SFC<TextProps> = (props: TextProps) => {
  return <StyledText {...props} />;
};

export default Text;
