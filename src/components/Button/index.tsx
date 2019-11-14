import styled from "styled-components";
import { color, font, spacing } from "../../styles/utils";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = styled.button<ButtonProps>`
  padding: ${spacing(3)};
  border-radius: ${spacing(2)};
  font-family: ${font("heading")};
  font-size: ${spacing(5)};
  background-color: ${color("primary", 5)};
  color: ${color("gray", 0)};
  border: none;
  box-shadow: 1px 1px 5px 1px #ccc;
  transition: box-shadow 0.1s ease-in-out, background-color 0.1s ease-in-out;
  line-height: 1;
  text-transform: uppercase;

  &,
  &:focus {
    outline: none;
    user-select: none;
  }

  &:hover {
    background-color: ${color("primary", 4)};
    box-shadow: 3px 3px 5px 3px #ccc;
  }

  &:active {
    background-color: ${color("primary", 6)} !important;
    box-shadow: none;
  }
`;

export default Button;
