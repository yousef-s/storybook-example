import React from 'react';
import type { ComponentOwnProps } from '../../types';
import type * as Stitches from '@stitches/react';

import { styled, globalStyles } from '../../styles';
import { Space, BaseText, Text } from '../../primitives';

globalStyles();

////////////////////////////////////////////////////////////////////////////////

const HelperText = styled(Text, {
  color: '#6B7280',
  defaultVariants: {
    weight: 'regular',
    size: 's',
  },
});

HelperText.displayName = 'Input HelperText';

export type HelperTextElement = React.ElementRef<typeof HelperText>;
export type HelperTextOwnProps = ComponentOwnProps<typeof HelperText>;
export type HelperTextVariants = Stitches.VariantProps<typeof HelperText>;

////////////////////////////////////////////////////////////////////////////////

const RightAddon = styled('div', {
  padding: '10px 12px',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  display: 'flex',
  height: '22px',
});

RightAddon.displayName = 'Input RightAddon';

export type RightAddonElement = React.ElementRef<typeof RightAddon>;
export type RightAddonOwnProps = ComponentOwnProps<typeof RightAddon>;
export type RightAddonVariants = Stitches.VariantProps<typeof RightAddon>;
////////////////////////////////////////////////////////////////////////////////

const LeftAddon = styled(RightAddon);

LeftAddon.displayName = 'Input LeftAddon';

export type LeftAddonElement = React.ElementRef<typeof LeftAddon>;
export type LeftAddonOwnProps = ComponentOwnProps<typeof LeftAddon>;
export type LeftAddonVariants = Stitches.VariantProps<typeof LeftAddon>;
////////////////////////////////////////////////////////////////////////////////

const Label = styled(Text, {
  color: 'black',
  defaultVariants: {
    weight: 'semiBold',
    size: 's',
  },
});

Label.displayName = 'Input Label';

export type LabelElement = React.ElementRef<typeof Label>;
export type LabelOwnProps = ComponentOwnProps<typeof Label>;
export type LabelVariants = Stitches.VariantProps<typeof Label>;

////////////////////////////////////////////////////////////////////////////////
const Root = styled('input', BaseText, {
  boxSizing: 'border-box',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '10px 0',
  gap: '12px',

  width: '375px',
  height: '44px',

  background: '#FFFFFF',
  '&:focus-visible': {
    outline: 'none',
  },
  border: 'none',
  flex: 'none',
  alignSelf: 'stretch',
  flexGrow: '0',
});

Root.displayName = 'Input';

export type RootElement = React.ElementRef<typeof Root>;
export type RootOwnProps = ComponentOwnProps<typeof Root> & {
  size: string;
  weight: string;
};
export type RootVariants = Stitches.VariantProps<typeof Root>;

export const Input = Object.assign(Root, {
  Label,
  LeftAddon,
  RightAddon,
  HelperText,
});

const StyledInputContainer = styled(Space, {
  border: '1px solid #D1D5DB',

  '&:disabled': {
    opacity: 0.4,

    '&:hover': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    status: {
      error: {},
    },
    variant: {
      box: {
        borderRadius: '6px',

        '&:focus, &:hover': {
          border: '1px solid #9B9DFD',
          boxShadow: '0px 0px 0px 4px #E1E1FE',
          caretColor: '#771AC9',
        },
        '&:focus-visible': {
          outline: 'transparent',
        },
      },
      line: {
        border: 'none',
        borderBottom: ' 1px solid #D1D5DB',
        '&:focus, &:hover': {
          borderBottom: '1px solid #9B9DFD',
          boxShadow: 'none',
          caretColor: '#771AC9',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'line',
      status: 'error',
      css: {
        '&:focus, &:hover': {
          caretColor: '#EF4444!important',
          borderBottom: '1px solid #EF4444',

          borderColor: '#EF4444',
        },
      },
    },
    {
      variant: 'box',
      status: 'error',
      css: {
        '&:focus, &:hover': {
          caretColor: '#EF4444!important',
          border: '1px solid #FCA5A5',
          boxShadow: ' 0px 0px 0px 4px #FEE2E2;',
        },
      },
    },
  ],
});

export type InputPrimitiveProps = React.ComponentProps<typeof Input>;

export const FormInput = ({
  label,
  message,
  RightAddon,
  LeftAddon,
  variant = 'box',
  status,
  ...inputProps
}: {
  label?: string;
  message?: string;
  RightAddon?: React.ReactElement;
  LeftAddon?: React.ReactElement;
  variant?: 'box' | 'line';
  status?: 'error';
}) => {
  return (
    <Space direction="vertical" gap="xs" css={{ alignItems: 'start' }}>
      <Space direction="vertical" gap="xxs" css={{ alignItems: 'start' }}>
        {label && <Input.Label>{label}</Input.Label>}
        <StyledInputContainer status={status} variant={variant} gap="none">
          <Input.LeftAddon>{LeftAddon}</Input.LeftAddon>
          <Input size="s" weight="regular" {...inputProps} />
          <Input.RightAddon>{RightAddon}</Input.RightAddon>
        </StyledInputContainer>
      </Space>
      <Input.HelperText status={status}>{message}</Input.HelperText>
    </Space>
  );
};
