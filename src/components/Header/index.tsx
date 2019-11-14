import React from "react";
import styled from "styled-components";
import { font } from "../../styles/utils";

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const StyledHeader = styled.h1`
  font-family: ${font("heading")};
`;

const Header: React.SFC<HeaderProps> = ({ size, ...props }: HeaderProps) => {
  const Tag = `h${size}`;

  return <StyledHeader as={Tag as any} {...props} />;
};

Header.defaultProps = {
  size: 1
};

export default Header;
