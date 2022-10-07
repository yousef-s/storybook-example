/**
 * Property Mapping - https://stitches.dev/docs/tokens#property-mapping
 *
 * GDS Guidelines - https://ons-design-system.netlify.app/foundations/
 */
export const stitchesTheme = {
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  sizes: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
  colors: {
    // Palettes
    // TODO: Replace the following theme tokens values with Design System Color Scales
    oceanBlue: '#206095',
    skyBlue: '#27a0cc',
    black: '#000',
    dark1: '#D1D5DB',
    dark2: '#374151',
    dark3: '#111827',
    white: '#fff',
    primary: '#771AC9',
    primary1: '#E1E1FE',
    tertiary: '#1E22FB',
    grey: '#6B7280',

    // Color assignments
    text: '$black',
    textLink: '$oceanBlue',
    textLinkHover: '$nightBlue',

    // Status
    info: '$oceanBlue',
    infoTint: '#e9eff4',

    // neutral
    neutral50: '#f9fafb',
    neutral200: '#E5E7EB',
    neutral500: '#6B7280',
    neutral700: '#374151',

    // primary
    primary50: '#F5F5FF',
    primary700: '#0408E7',
  },
  fonts: {
    primary:
      '"Inter", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    1: '0.875rem', // 14px
    2: '1.125rem', // 18px
    3: '1.25rem', // 20px
    4: '1.375rem', // 22px
    5: '1.5rem', // 24px
    6: '1.625rem', // 26px
    7: '1.75rem', // 28px
    8: '1.875rem', // 30px
    9: '2rem', // 32px
    10: '2.25rem', // 36px
    11: '3rem', // 48px
    12: '3.25rem', // 52px
    13: '2.75rem', // 44px
    14: '2.5rem', // 40px
    base: '$2', // 18px
    xs: '0.75rem', // 12px,
  },
  lineHeights: {
    base: 1.5,
    heading: 1.2,
    pageheading: 1,
    text: 0.75,
    1: 1.1,
    2: 3.5,
    3: 2.6,
    4: 2.75,
    5: 2.5,
    6: 2,
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 600,
    xBold: 700,
    xxBold: 800,
    regular: '$normal',
  },
  shadows: {
    focusRingPrimary4: '0px 0px 0px $space$1 $colors$primary1',
  },
};
