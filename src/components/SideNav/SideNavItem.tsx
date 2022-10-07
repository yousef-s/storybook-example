import React, { forwardRef } from 'react';
import { BaseButton, BaseText, Box } from '../../primitives';
import { ChevronDownIcon } from '../../icons';
import { stitchesTheme, styled } from '../../styles';

const SideNavItemContainer = styled(BaseButton, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '$9',
  padding: '$2 $3',

  '&:focus, &:focus-visible': {
    boxShadow: '$focusRingPrimary4',
    outline: 'none',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$primary50',
      },
      false: {
        backgroundColor: '$white',
        '&:hover': {
          backgroundColor: '$neutral50',
          boxShadow: 'none',
        },
      },
    },
    isSub: {
      true: {
        paddingLeft: '$10',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

const LeftAccessoryContainer = styled('span', Box, {
  paddingRight: '$2',
});

const RightAccessoryContainer = styled('span', Box, {
  flexDirection: 'row',
  paddingLeft: '$2',
  gap: '$3',
});

const SideNavItemText = styled(BaseText, {
  [`${SideNavItemContainer}[data-is-sub-nav=true] &`]: {
    color: '$neutral500',
  },
  [`${SideNavItemContainer}[data-is-sub-nav=false] &`]: {
    color: '$neutral700',
  },

  [`${SideNavItemContainer}[data-active=true] &`]: {
    color: '$primary700',
  },
});

const RotatableChevronDownIcon = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  [`${SideNavItemContainer}[data-active="true"] &`]: {
    color: '$primary',
  },
  [`${SideNavItemContainer}[data-active="false"] &`]: {
    color: '$neutral500',
  },

  [`${SideNavItemContainer}[data-state="open"] &`]: {
    transform: 'rotate(180deg)',
  },
});

interface SideNavItemAccessoryProps {
  color: string;
}

type SideNavItemAccessoryComponent = (
  props: SideNavItemAccessoryProps
) => JSX.Element;

export interface SideNavItemProps {
  as?: React.ComponentType | keyof JSX.IntrinsicElements;
  children: string;
  href?: string;
  LeftAccessory?: SideNavItemAccessoryComponent;
  active?: boolean;
  disabled?: boolean;
  open?: boolean;
  isSub?: boolean;
  withChevron?: boolean;
}

export const SideNavItem = forwardRef<HTMLButtonElement, SideNavItemProps>(
  (
    {
      as,
      children,
      href,
      LeftAccessory,
      active = false,
      disabled = false,
      open = false,
      isSub = false,
      withChevron = false,
    },
    ref,
  ) => (
    <SideNavItemContainer
      as={as as undefined} // to keep TS happy...
      href={href}
      size="small"
      data-open={open}
      data-active={active}
      active={active}
      disabled={disabled}
      data-is-sub-nav={isSub}
      isSub={isSub}
      ref={ref}
    >
      <Box as="span">
        {LeftAccessory ? (
          <LeftAccessoryContainer>
            <LeftAccessory
              color={
                active
                  ? stitchesTheme.colors.primary
                  : stitchesTheme.colors.neutral500
              }
            />
          </LeftAccessoryContainer>
        ) : null}
        <SideNavItemText size="l" weight={isSub ? 'regular' : 'semiBold'}>
          {children}
        </SideNavItemText>
      </Box>
      {withChevron ? (
        <RightAccessoryContainer>
          {withChevron ? (
            <RotatableChevronDownIcon color="currentColor" />
          ) : null}
        </RightAccessoryContainer>
      ) : null}
    </SideNavItemContainer>
  ),
);

SideNavItem.displayName = 'SideNavItem';
