import { StyleGetter } from "./types";

export type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

// eslint-disable-next-line import/prefer-default-export
export const spacing = (size: Size): StyleGetter => {
  return props => props.theme.spacing[`$${size}00`];
};
