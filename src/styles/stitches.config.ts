import { createStitches } from '@stitches/react';

import { globalCssStyles, stitchesTheme, utils, media } from './config';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  theme: stitchesTheme,
  utils,
  media,
});

export const globalStyles = globalCss(globalCssStyles);
