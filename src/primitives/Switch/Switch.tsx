import type * as React from 'react';
import type * as Stitches from '@stitches/react';

import * as SwitchPrimitive from '@radix-ui/react-switch';

import type { ComponentOwnProps } from '../../types';

import { styled } from '../../styles';
import { Box, Space, Text } from '../../primitives';

////////////////////////////////////////////////////////////////////////////////

///////// Switch - Thumb

////////////////////////////////////////////////////////////////////////////////

const Thumb = styled(SwitchPrimitive.Thumb, Box, {
  display: 'block',
  width: 14,
  height: 14,
  bg: '$white',
  borderRadius: '50px',
  boxShadow: '0 2px 2px $white',
  transition:
    'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s',
  transform: 'translateX(1px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
});
Thumb.displayName = 'SwitchThumb';

export type SwitchThumbElement = React.ElementRef<typeof Thumb>;
export type SwitchThumbOwnProps = ComponentOwnProps<typeof Thumb>;
export type SwitchThumbVariants = Stitches.VariantProps<typeof Thumb>;

////////////////////////////////////////////////////////////////////////////////

///////// Switch - Root

////////////////////////////////////////////////////////////////////////////////

const Root = styled(SwitchPrimitive.Root, Box, {
  all: 'unset',
  width: 26,
  height: 16,
  bg: '$neutral200',
  borderRadius: '18.25px',
  position: 'relative',
  transition: 'background-color 0.25s ease 0s, box-shadow 0.15s ease 0s',

  '&:not(:focus)': {
    boxShadow: '0 2px 10px $black',
  },

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '& + div': {
      opacity: 0.4,
    },
  },

  '&[data-state="checked"]': {
    bg: '$primary',
  },
});
Root.displayName = 'SwitchRoot';

export type SwitchRootElement = React.ElementRef<typeof Root>;
export type SwitchRootOwnProps = ComponentOwnProps<typeof Root> & {
  heading?: string;
};
export type SwitchRootVariants = Stitches.VariantProps<typeof Root>;

////////////////////////////////////////////////////////////////////////////////

///////// Switch

////////////////////////////////////////////////////////////////////////////////

export const Switch = Object.assign({}, Root, { Thumb });

export type SwitchProps = React.ComponentProps<typeof Switch>;

export const SwitchWithLabel = ({
  children,
  onChange,
  disabled,
  id,
  heading,
  ...rest
}: SwitchRootOwnProps) => {
  return (
    <Space
      gap="regular"
      css={{
        alignItems: heading ? 'flex-start' : 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Switch
        {...rest}
        name={id}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <Switch.Thumb />
      </Switch>

      <Space
        direction="vertical"
        gap="regular"
        css={{ alignItems: 'start', lineHeight: '24px' }}
      >
        {heading && (
          <Text
            size="s"
            weight="semiBold"
            htmlFor={id}
            css={{ whiteSpace: 'nowrap', color: '$dark3' }}
          >
            {heading}
          </Text>
        )}

        {children && (
          <Text
            size="s"
            weight="regular"
            htmlFor={id}
            css={{ whiteSpace: 'nowrap', color: '$grey', alignItems: 'center' }}
          >
            {children}
          </Text>
        )}
      </Space>
    </Space>
  );
};
