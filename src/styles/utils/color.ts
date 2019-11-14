import { StyleGetter } from "./types"

export type Color = "primary" | "secondary" | "danger" | "warning" | "success" | "gray"

export type Intensity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const color = (color: Color, intensity: Intensity): StyleGetter => {
  return props => props.theme.colors[color][`$${intensity}00`]
}
