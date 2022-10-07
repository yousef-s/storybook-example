import React, { forwardRef } from 'react';

import type { IconElement, IconProps } from '../Icon';

import { Icon } from '../Icon';

export const MenuIcon = forwardRef<IconElement, IconProps>(
  ({ viewBox = '0 0 24 24', ...props }, forwardedRef) => (
    <Icon
      width="24"
      height="24"
      {...props}
      ref={forwardedRef}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
);
MenuIcon.displayName = 'MenuIcon';
MenuIcon.toString = () => '.menu-icon';
