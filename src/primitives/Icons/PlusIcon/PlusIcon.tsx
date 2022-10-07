import React, { forwardRef } from 'react';

import type { IconElement, IconProps } from '../Icon';

import { Icon } from '../Icon';

export const PlusIcon = forwardRef<IconElement, IconProps>(
  ({ viewBox = '0 0 30 30', ...props }, forwardedRef) => (
    <Icon
      width="30"
      height="30"
      {...props}
      ref={forwardedRef}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d="M15 2V28M28 15L2 15"
        stroke="currentColor"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
);
PlusIcon.displayName = 'PlusIcon';
PlusIcon.toString = () => '.check-icon';
