import React, { forwardRef } from 'react';

import type { IconElement, IconProps } from '../Icon';

import { Icon } from '../Icon';

export const CloseIcon = forwardRef<IconElement, IconProps>(
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
        d="M2 28L28 2M2 2L28 28"
        stroke="currentColor"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
);
CloseIcon.displayName = 'CloseIcon';
CloseIcon.toString = () => '.check-icon';
