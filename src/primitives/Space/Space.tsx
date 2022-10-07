import React from 'react';

import type { ComponentOwnProps } from '../../types';
import type * as Stitches from '@stitches/react';

import { styled } from '../../styles';
import { Box } from '../Box';

export const Space = styled(Box, {
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    gap: {
      xxs: {
        gap: '4px',
      },
      xs: {
        gap: '8px',
      },
      small: {
        gap: '10px',
      },
      regular: {
        gap: '12px',
      },
      m: {
        gap: '17px',
      },
      none: {
        gap: 0,
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    gap: 'small',
  },
});

export type SpaceElement = React.ElementRef<typeof Space>;
export type SpaceOwnProps = ComponentOwnProps<typeof Space>;

export type SpaceVariants = Stitches.VariantProps<typeof Space>;

Space.displayName = 'Space';
