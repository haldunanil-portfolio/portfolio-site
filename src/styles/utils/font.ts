import { StyleGetter } from "./types";

export type Font = "cursive" | "heading" | "body";

// eslint-disable-next-line import/prefer-default-export
export const font = (type: Font): StyleGetter => {
  return props => props.theme.fonts[type];
};
