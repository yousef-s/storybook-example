import type {
  BackgroundImageUtil,
  ColorsUtil,
  FontWeightsUtil,
  RadiiUtil,
  SizeUtil,
  SpaceUtil,
} from '../../types';

/**
 * Shorthand CSS utilities to use as alternatives to CSS properties.
 *
 * https://stitches.dev/docs/utils
 */
export const utils = {
  br: (value: RadiiUtil) => ({ borderRadius: value }),
  bg: (value: ColorsUtil) => ({ backgroundColor: value }),

  linearGradient: (value: BackgroundImageUtil) => ({ backgroundImage: value }),

  weight: (value: FontWeightsUtil) => ({ fontWeight: value }),

  m: (value: SpaceUtil) => ({ margin: value }),
  mt: (value: SpaceUtil) => ({ marginTop: value }),
  mr: (value: SpaceUtil) => ({ marginRight: value }),
  mb: (value: SpaceUtil) => ({ marginBottom: value }),
  ml: (value: SpaceUtil) => ({ marginLeft: value }),
  mx: (value: SpaceUtil) => ({ marginLeft: value, marginRight: value }),
  my: (value: SpaceUtil) => ({ marginTop: value, marginBottom: value }),
  p: (value: SpaceUtil) => ({ padding: value }),
  pt: (value: SpaceUtil) => ({ paddingTop: value }),
  pr: (value: SpaceUtil) => ({ paddingRight: value }),
  pb: (value: SpaceUtil) => ({ paddingBottom: value }),
  pl: (value: SpaceUtil) => ({ paddingLeft: value }),
  px: (value: SpaceUtil) => ({ paddingLeft: value, paddingRight: value }),
  py: (value: SpaceUtil) => ({ paddingTop: value, paddingBottom: value }),

  size: (value: SizeUtil) => ({ width: value, height: value }),
};
