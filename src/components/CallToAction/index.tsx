import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Button from "../Button";
import { spacing } from "../../styles/utils";

export interface CallToActionProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  /** link to redirect user to when using anchor tag or gatsby's 'Link' component */
  href?: string;
}

export const StyledCallToAction = styled.a<CallToActionProps>`
  ${Button} {
    margin-top: ${spacing(4)};
  }
`;

const externalRe = /http[s]:\/\/.*/;

const CallToAction: React.FC<CallToActionProps> = ({
  children,
  href,
}: CallToActionProps) => {
  const external = externalRe.test(href as string);

  return (
    <StyledCallToAction
      as={external ? "a" : Link}
      target={external ? "_blank" : undefined}
      href={external ? href : undefined}
      to={!external ? href : undefined}
    >
      <Button>{children}</Button>
    </StyledCallToAction>
  );
};

export default CallToAction;
