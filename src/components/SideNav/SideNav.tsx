import React, { useMemo } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { styled, keyframes } from '../../styles';
import { SideNavItem, SideNavItemProps } from './SideNavItem';
import { Box } from '../../primitives';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  overflow: 'visible',
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

interface AccordianTriggerProps extends Omit<SideNavItemProps, 'withChevron'> {
  hasItems: boolean;
  LinkComponent?: React.ComponentType | keyof JSX.IntrinsicElements;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordianTriggerProps
>(({ children, LinkComponent = 'a', ...props }, forwardedRef) => (
  <SideNavItem
    {...props}
    as={
      props.hasItems
        ? AccordionPrimitive.Trigger
        : props.href
        ? LinkComponent
        : 'span'
    }
    ref={forwardedRef}
    withChevron={props.hasItems}
  >
    {children}
  </SideNavItem>
));

interface BaseNavItem {
  id: string;
  href?: string;
}

interface SubNavItem extends BaseNavItem {
  text: string;
}

interface NavItem extends BaseNavItem {
  text: string;
  IconComponent?: SideNavItemProps['LeftAccessory'];
  items?: SubNavItem[];
}

const getParentIdsOfSubNavItemIds = (
  subNavItemIds: string[],
  navItems: NavItem[]
): string[] => {
  const parentIds: string[] = [];
  navItems.forEach((navItem) => {
    if (!navItem.items) return;

    navItem.items.forEach((subNavItem) => {
      if (subNavItemIds.includes(subNavItem.id)) {
        parentIds.push(navItem.id);
      }
    });
  });

  return parentIds;
};

export interface SideNavProps {
  children?: never;
  items: NavItem[];
  activeItems?: string[];
  LinkComponent?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
  css?: React.ComponentProps<typeof StyledAccordion>['css'];
}

export function SideNav({
  items,
  LinkComponent = 'a',
  activeItems = [],
  ...rest
}: SideNavProps) {
  const openItems = useMemo(
    () => getParentIdsOfSubNavItemIds(activeItems, items),
    [activeItems, items]
  );

  return items.length ? (
    <StyledAccordion {...rest} type="multiple" defaultValue={openItems}>
      {items.map((item) => (
        <AccordionPrimitive.Item key={item.id} value={item.id}>
          <AccordionTrigger
            {...item}
            LinkComponent={LinkComponent}
            active={activeItems.includes(item.id)}
            LeftAccessory={item.IconComponent}
            hasItems={!!item.items}
          >
            {item.text}
          </AccordionTrigger>
          {item.items ? (
            <StyledContent>
              <Box css={{ flexDirection: 'column', padding: '$1 0' }}>
                {item.items.map((subItem) => (
                  <SideNavItem
                    {...subItem}
                    key={subItem.id}
                    as={subItem.href ? LinkComponent : 'span'}
                    active={activeItems.includes(subItem.id)}
                    isSub
                  >
                    {subItem.text}
                  </SideNavItem>
                ))}
              </Box>
            </StyledContent>
          ) : null}
        </AccordionPrimitive.Item>
      ))}
    </StyledAccordion>
  ) : null;
}
