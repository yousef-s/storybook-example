import { CSSProp } from '../types';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
