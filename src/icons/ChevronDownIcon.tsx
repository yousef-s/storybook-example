import React from 'react';
import { stitchesTheme } from '../styles';

export interface ChevronDownIconProps {
    width?: number;
    height?: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    color?: keyof typeof stitchesTheme['colors'] | (string & {});
}

export function ChevronDownIcon({
  width = 20, height = 20, color = 'primary', ...rest
}: ChevronDownIconProps) {
  return (
    <svg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 8L10 13L5 8"
        stroke={(stitchesTheme.colors as any)[color] ?? color}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
