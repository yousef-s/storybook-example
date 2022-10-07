import React, { forwardRef } from 'react';

import type { IconElement, IconProps } from '../Icon';

import { Icon } from '../Icon';

export const CheckIcon = forwardRef<IconElement, IconProps>(
  ({ viewBox = '0 0 30 22', ...props }, forwardedRef) => (
    <Icon
      width="30"
      height="22"
      {...props}
      ref={forwardedRef}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d="M2 12.8572L9.42857 20.2857L28 1.71429"
        stroke="currentColor"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
);
CheckIcon.displayName = 'CheckIcon';
CheckIcon.toString = () => '.check-icon';
