import { css } from "@emotion/react";

type Size = number | "hug" | "fill";
const calcSize = (size: Size) => {
  if (size === "fill") return "100%";
  if (size === "hug") return "fit-content";
  return `${size}px`;
};

const applyAttribute = (attribute: "height" | "width") => (value: Size) => css`
  ${attribute}: ${calcSize(value)};
`;

/**
 * Apply height
 * @example
 * h(8)       // 8px height
 * h("fill")  // 100% height
 * h("hug")   // fit-content height
 */
export const h = applyAttribute("height");

/**
 * Apply width
 * @example
 * w(8)       // 8px width
 * w("fill")  // 100% width
 * w("hug")   // fit-content width
 */
export const w = applyAttribute("width");
