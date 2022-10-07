import type * as React from 'react';
import type * as Stitches from '@stitches/react';

import type { ComponentOwnProps } from '../../types';

import { styled } from '../../styles';
import { BaseText } from '../Text';

export const Heading = styled('h2', BaseText, {
  color: '$black',
  defaultVariants: {
    weight: 'bold',
  },
});
Heading.displayName = 'Heading';

export type HeadingElement = React.ElementRef<typeof Heading>;
export type HeadingOwnProps = ComponentOwnProps<typeof Heading>;
export type HeadingVariants = Stitches.VariantProps<typeof Heading>;
