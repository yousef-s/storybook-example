import type * as React from 'react';
import type * as Stitches from '@stitches/react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import type { ComponentOwnProps } from '../../types';
import { styled } from '../../styles';
import { Space } from '../Space';
import { Text } from '../Text';
import { CheckIcon } from '../Icons';

////////////////////////////////////////////////////////////////////////////////

///////// Checkbox - Root

////////////////////////////////////////////////////////////////////////////////

const Root = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$primary',
  verticalAlign: 'middle',
  borderRadius: '3px',
  border: '1px solid $dark1',
  height: '1rem',
  width: '1rem',
  transition: 'all 0.25s ease-in-out',

  '&:not(:disabled)': {
    bg: '$white',
    cursor: 'pointer',

    '+ div': {
      cursor: 'pointer',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',

    '& + div': {
      opacity: 0.4,
    },
  },

  '&[data-state="checked"]': {
    bg: '$primary',
    border: '1px solid $primary',
  },
});

Root.displayName = 'CheckboxRoot';

export type CheckboxRootElement = React.ElementRef<typeof Root>;
export type CheckboxRootOwnProps = ComponentOwnProps<typeof Root>;
export type CheckboxRootVariants = Stitches.VariantProps<typeof Root>;

////////////////////////////////////////////////////////////////////////////////

///////// Checkbox - Indicator

////////////////////////////////////////////////////////////////////////////////

const Indicator = styled(CheckboxPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
});

Indicator.displayName = 'CheckboxIndicator';

export type CheckboxIndicatorElement = React.ElementRef<typeof Indicator>;
export type CheckboxIndicatorOwnProps = ComponentOwnProps<typeof Indicator>;
export type CheckboxIndicatorVariants = Stitches.VariantProps<typeof Indicator>;

////////////////////////////////////////////////////////////////////////////////

///////// Checkbox

////////////////////////////////////////////////////////////////////////////////

export const Checkbox = Object.assign({}, Root, { Indicator });

export const CheckboxWithLabel = ({
  children,
  heading,
  onChange,
  disabled,
  id,
  ...rest
}: CheckboxRootOwnProps) => {
  return (
    <Space
      gap="regular"
      css={{
        alignItems: heading ? 'flex-start' : 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Checkbox
        {...rest}
        name="id"
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <Checkbox.Indicator>
          <CheckIcon size="s" />{' '}
        </Checkbox.Indicator>
      </Checkbox>

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

export type CheckboxProps = React.ComponentProps<typeof Checkbox>;
