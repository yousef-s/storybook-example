import React, { forwardRef, useCallback } from 'react';
import type * as Stitches from '@stitches/react';
import type { ComponentOwnProps } from '../../types';

import { styled, globalStyles } from '../../styles';
import { Space } from '../Space/Space';

globalStyles();

export const BaseButton = styled('button', {
  appearance: 'none',
  backgroundColor: 'transparent',
  borderWidth: 0,
  userSelect: 'none',
  textDecoration: 'none',
  borderRadius: '6px',
  color: 'inherit',
  gap: '10px',
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 500,
  fontFeatureSettings: '\'salt\' on',
  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:disabled': {
    '&:hover': {
      cursor: 'not-allowed',
    },
    opacity: 0.4,
  },
});

export const StyledButton = styled(BaseButton, {
  variants: {
    size: {
      large: {
        fontSize: '18px',
        lineHeight: '28px',
        padding: '10px 24px',
      },
      medium: {
        fontSize: '16px',
        lineHeight: '24px',
        padding: ' 8px 20px',
      },
      small: {
        fontSize: '14px',
        lineHeight: '20px',
        padding: '8px 16px',
      },
      xSmall: {
        fontSize: '12px',
        lineHeight: '20px',
        padding: '6px 10px',
      },
    },
    type: {
      primary: {
        color: '$white',
        background: '$primary',
        '&:hover:not(:disabled)': {
          boxShadow: '$focusRingPrimary4',
        },
      },
      secondary: {
        background: '#F5F5FF',
        color: '$primary',
        '&:hover:not(:disabled)': {
          boxShadow: '$focusRingPrimary4',
        },
      },
      outlined: {
        bg: 'transparent',
        border: '1px solid $dark1',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        color: '#dark2',
      },
      tertiary: {
        color: '$tertiary',
        bg: 'transparent',
        border: 'none',
      },
    },

    destructive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      destructive: true,
      type: 'primary',
      css: {
        bg: '#EF4444',
        '&:hover:not(:disabled)': {
          boxShadow: ' 0px 0px 0px 4px #FEE2E2',
        },
      },
    },
    {
      destructive: true,
      type: 'secondary',
      css: {
        color: '#DC2626',
        bg: '#FEF2F2',
        '&:hover:not(:disabled)': {
          boxShadow: ' 0px 0px 0px 4px #FEE2E2',
        },
      },
    },
    {
      destructive: true,
      type: 'outlined',
      css: {
        color: '#EF4444',
        border: '1px solid #fcbbbb',
      },
    },
    {
      destructive: true,
      type: 'tertiary',
      css: {
        color: '#DC2626',
      },
    },
  ],
  defaultVariants: {
    size: 'large',
    type: 'primary',
  },
});

export type ButtonElement = React.ElementRef<typeof StyledButton>;
export type ButtonOwnProps = ComponentOwnProps<typeof StyledButton> & {
  BeforeIcon?: React.FC;
  AfterIcon?: React.FC;
};

export type ButtonVariants = Stitches.VariantProps<typeof StyledButton>;

export const Button = forwardRef<ButtonElement, ButtonOwnProps>(
  (
    {
      children, disabled, onClick, BeforeIcon, AfterIcon, ...props
    },
    forwardedRef,
  ) => {
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
      },
      [onClick],
    );

    return (
      <StyledButton
        {...props}
        ref={forwardedRef}
        disabled={disabled}
        onClick={handleClick}
      >
        <Space>
          <span>{BeforeIcon && <BeforeIcon />}</span>
          {children}
          <span>{AfterIcon && <AfterIcon />}</span>
        </Space>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
