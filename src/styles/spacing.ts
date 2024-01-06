import { css } from "@emotion/react";

const style = (attribute: string) => (value: number) => css`
  ${attribute}: ${value}px;
`;

const applyPrefix = (prefix: "padding" | "margin") =>
  Object.assign(style(prefix), {
    top: style(`${prefix}-top`),
    bottom: style(`${prefix}-bottom`),
    left: style(`${prefix}-left`),
    right: style(`${prefix}-right`),
    vertical: style(`${prefix}-block`),
    horizontal: style(`${prefix}-inline`),
  });

/**
 * @example
 * padding(8)             // 8px padding for all sides
 * padding.top(8)         // 8px padding for top
 * padding.horizontal(8)  // 8px padding for left and right
 */
export const padding = applyPrefix("padding");

/**
 * @example
 * margin(8)             // 8px margin for all sides
 * margin.top(8)         // 8px margin for top
 * margin.horizontal(8)  // 8px margin for left and right
 */
export const margin = applyPrefix("margin");
