import type * as React from 'react';
import type * as Stitches from '@stitches/react';

import type { ComponentOwnProps } from '../../types';

import { styled, globalStyles } from '../../styles';

globalStyles();

export const BaseText = styled('span', {
  margin: 0,
  fontFamily: '$fonts$primary',
  variants: {
    status: {
      error: {
        color: '#EF4444',
      },
    },
    size: {
      xxxl: {
        fontSize: '$fontSizes$12', // 52px
        lineHeights: '$lineHeights$2', // 58px
        letterSpacing: '-0.02em',
      },
      xxl: {
        fontSize: '$fontSizes$13', // 44px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$3', // 48px
      },
      h1: {
        fontSize: '$fontSizes$14', // 40px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$3', // 48px
        '@s': {
          fontSize: '$fontSizes$10', // 36px
          lineHeights: '$lineHeights$4', // 44px
        },
      },
      h2: {
        fontSize: '$fontSizes$10', // 36px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$4', // 44px
        '@s': {
          fontSize: '$fontSizes$9', // 32px
          lineHeights: '$lineHeights$5', // 40px
        },
      },
      h3: {
        fontSize: '$fontSizes$9', // 32px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$5', // 40px
        '@s': {
          fontSize: '$fontSizes$7', // 28px
          lineHeights: '$fontSizes$10', // 36px
        },
      },
      h4: {
        fontSize: '$fontSizes$7', // 32px
        letterSpacing: '-0.02em',
        lineHeights: '$fontSizes$9', // 32px
        '@s': {
          fontSize: '$fontSizes$5', // 24px
          lineHeights: '$fontSizes$9', // 32px
        },
      },
      h5: {
        fontSize: '$fontSizes$5', // 24px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$6', // 36px
        '@s': {
          fontSize: '$fontSizes$3', // 20px
          lineHeights: '$fontSizes$7', // 28px
        },
      },
      h6: {
        fontSize: '$fontSizes$3', // 20px
        letterSpacing: '-0.02em',
        lineHeights: '$lineHeights$7', // 36px
        '@s': {
          fontSize: '$fontSizes$2', // 18px
          lineHeights: '$fontSizes$5', // 24px
        },
      },
      l: {
        fontSize: '$fontSizes$2', // 18px
        lineHeight: '$lineHeights$base',
        fontStyle: 'normal',
        fontFeatureSettings: "'salt' on",
      },
      m: {
        fontSize: '$fontSizes$3', // 20px
        fontStyle: 'normal',
        lineHeight: '$lineHeights$text',
        fontFeatureSettings: "'salt' on",
      },
      s: {
        fontSize: '$fontSizes$1', // 14px
        fontStyle: 'normal',
        lineHeight: '$lineHeights$text',
        fontFeatureSettings: "'salt' on",
      },
      xs: {
        fontSize: '$fontSizes$xs', // 12px
        fontStyle: 'normal',
        lineHeight: '$lineHeights$text',
        fontFeatureSettings: "'salt' on",
      },
    },
    style: {
      italic: {
        fontStyle: 'italic',
      },
      strike: {
        textDecoration: 'line-through',
      },
      underline: {
        textDecoration: 'underline',
      },
    },

    weight: {
      bold: {
        fontWeight: '$fontWeights$bold',
      },
      xBold: {
        fontWeight: '$fontWeights$xBold',
      },
      xxBold: {
        fontWeight: '$fontWeights$xxBold',
      },
      semiBold: {
        fontWeight: '$fontWeights$semiBold',
      },
      regular: {
        fontWeight: '$fontWeights$regular',
      },
    },
  },
});
BaseText.displayName = 'BaseText';

export const Text = styled('p', BaseText, {
  color: '$dark3',
  lineHeight: '$base',
  defaultVariants: {
    size: 'm',
  },
});
Text.displayName = 'Text';

export type TextElement = React.ElementRef<typeof Text>;
export type TextOwnProps = ComponentOwnProps<typeof Text>;
export type TExtVariants = Stitches.VariantProps<typeof Text>;
