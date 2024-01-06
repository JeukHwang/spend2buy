import { css } from "@emotion/react";
import { mapColors } from "./color";

/**
 * Apply border-color, border-radius
 * @example
 * border.gray100   // gray100 border
 * border.round(8)  // 8 border-radius
 */
export const border = {
  round: (value: number) => css`
    border-radius: ${value};
  `,
  ...mapColors(
    (color) => css`
      border: 1px solid ${color};
    `,
  ),
};
