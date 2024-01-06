import { css } from "@emotion/react";

const colorsData = {
  white: "#FFFFFF",
  black: "#444444",
  whiteTrans: "#FFFFFFC0",
  blackTrans: "#444444C0",
  white100: "#FAFBFC",
  gray100: "#FAFAFA",
  gray200: "#EEEEEE",
  gray300: "#D9D9D9",
  gray400: "#B6B6B6",
  gray500: "#8C8C8C",
  gray600: "#555555",
  grayTrans: "rgba(85, 85, 85, 0.1)",
  blue100: "#FAFCFF",
  blue200: "#E7F0FF",
  blue300: "#BFDCFF",
  blue400: "#6EABF4",
  blue500: "#2F80DE",
  blue600: "#065DAC",
  blue700: "#004B81",
  purpleLight: "#F6EEFE",
  purple: "#9836EF",
  orangeLight: "#FDF7E6",
  orange: "#FF9211",
  greenLight: "#E9F9EF",
  green: "#008B1C",
} as const;
type ColorKeys = keyof typeof colorsData;
type Color = (typeof colorsData)[ColorKeys];
export const colors: { [key in ColorKeys]: Color } = colorsData;

const colorThemesData = {
  light: {
    fg: colors.black,
    bg: colors.white,
  },
  dark: {
    fg: colors.white,
    bg: colors.black,
  },
  lightTrans: {
    fg: colors.black,
    bg: colors.whiteTrans,
  },
  darkTrans: {
    fg: colors.white,
    bg: colors.blackTrans,
  },
} as const;
type ThemeKeys = keyof typeof colorThemesData;
type Theme = { fg: Color; bg: Color };
export const colorTheme: { [key in ThemeKeys]: Theme } = colorThemesData;

export function mapColors<T>(
  callback: (color: Color) => T,
): Record<ColorKeys, T> {
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, callback(value)]),
  ) as Record<ColorKeys, T>;
}

/**
 * Apply background-color
 * @example
 * bg.gray100  // gray100 background-color
 */
export const bg = mapColors(
  (color) => css`
    background-color: ${color};
  `,
);

/**
 * Apply color
 * @example
 * fg.gray100  // gray100 color
 */
export const fg = mapColors(
  (color) => css`
    color: ${color};
  `,
);
