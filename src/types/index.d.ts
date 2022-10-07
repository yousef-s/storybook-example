/// <reference types="@stitches/react" />
/// <reference types="react" />

import type * as React from 'react';

import type * as Stitches from '@stitches/react';

import { CSSProp } from '../types';
import { config } from '../src/styles';

export type ConfigCSS = Stitches.CSS<typeof config>;
export type CSSProp = { css?: ConfigCSS };

export type BackgroundImageUtil = Stitches.PropertyValue<'backgroundImage'>;

export type ColorsUtil = Stitches.PropertyValue<'backgroundColor' | 'color'>;

export type FontFamilyUtil =
  | Stitches.ScaleValue<'fontFamily'>
  | Stitches.PropertyValue<'fontFamily'>;

export type FontWeightsUtil = Stitches.PropertyValue<'fontWeight'>;

export type RadiiUtil = Stitches.PropertyValue<'borderRadius'>;

export type SizeUtil =
  | Stitches.ScaleValue<'sizes'>
  | Stitches.PropertyValue<'height' | 'width'>;

export type SpaceUtil =
  | Stitches.ScaleValue<'space'>
  | Stitches.PropertyValue<'padding' | 'margin'>;

export type ComponentOwnProps<T> = React.ComponentProps<T> & CSSProp;

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
