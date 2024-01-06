import { css } from "@emotion/react";

const style = (size: number, weight: number) => css`
  font-size: ${size}px;
  font-weight: ${weight};
`;

/**
 * Apply typography styles
 * @description
 * - usage: display, headline, title, body, label
 * - size: L, M, S
 * @example
 * text.titleL  // large title typography
 * text.bodyM   // medium body typography
 * @see https://m3.material.io/styles/typography/type-scale-tokens
 */
export const text = {
  displayL: style(57, 400),
  displayM: style(45, 400),
  displayS: style(36, 400),
  headlineL: style(32, 400),
  headlineM: style(28, 400),
  headlineS: style(24, 400),
  titleL: style(22, 400),
  titleM: style(16, 500),
  titleS: style(14, 500),
  bodyL: style(16, 400),
  bodyM: style(14, 400),
  bodyS: style(12, 400),
  labelL: style(14, 500),
  labelM: style(12, 500),
  labelS: style(11, 500),
} as const;

export const singleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const multiLine = css`
  white-space: pre-wrap;
  word-break: break-all;
`;
