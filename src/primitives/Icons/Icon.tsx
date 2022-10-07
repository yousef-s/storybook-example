import type * as Stitches from '@stitches/react';

import React, { forwardRef } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import type { ComponentOwnProps } from '../../types';

import { styled } from '../../styles';
import { Box } from '../Box';

export const StyledIcon = styled('svg', Box, {
  display: 'inline-block',
  opacity: 1,

  variants: {
    size: {
      s: {
        size: '0.8rem',
      },
      r: {
        size: '1rem',
      },
      m: {
        size: '1.1rem',
      },
      l: {
        size: '1.3rem',
      },
      xl: {
        size: '1.4rem',
      },
      xxl: {
        size: '1.5rem',
      },
      xxxl: {
        size: '1.7rem',
      },
    },
    color: {
      white: {
        color: '$colorWhite',
      },
      black: {
        color: '$colorBlack',
      },
      primary: {
        color: '$primary',
      },
    },
  },
  defaultVariants: {
    size: 'r',
  },
});

export type IconElement = React.ElementRef<typeof StyledIcon>;
export type IconOwnProps = ComponentOwnProps<typeof StyledIcon>;
export type IconVariants = Stitches.VariantProps<typeof StyledIcon>;
export type IconProps = IconOwnProps & { label: string };

export const Icon = forwardRef<IconElement, IconProps>(
  ({ label, ...props }, forwardedRef) => (
    <AccessibleIcon.Root label={label}>
      <StyledIcon
        {...props}
        ref={forwardedRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      />
    </AccessibleIcon.Root>
  )
);
Icon.displayName = 'Icon';
Icon.toString = () => '.icon';
