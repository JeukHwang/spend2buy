/// <reference types="@emotion/react/types/css-prop" />

import type { Theme as CustomTheme } from "@biseo/web/theme";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
