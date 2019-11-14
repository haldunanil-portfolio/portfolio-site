import { StyleGetter } from "./types";

export type Font = "cursive" | "heading" | "body";

export const font = (type: Font): StyleGetter => {
  return props => props.theme.fonts[type];
};
