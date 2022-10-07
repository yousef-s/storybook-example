import { styled } from '../../styles';

export const Grid = styled('div', {
  display: 'grid',
  width: '100%',

  variants: {
    small: {
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '$3',
        padding: '0 $4',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
        columnGap: '$3',
        padding: '0 $4',
      },
    },
    medium: {
      6: {
        '@m': {
          gridTemplateColumns: 'repeat(6, 1fr)',
          columnGap: '$5',
          padding: '0 $8',
        },
      },
      8: {
        '@m': {
          gridTemplateColumns: 'repeat(8, 1fr)',
          columnGap: '$5',
          padding: '0 $8',
        },
      },
    },
    large: {
      12: {
        '@l': {
          gridTemplateColumns: 'repeat(12, 1fr)',
          columnGap: '$8',
          padding: '0 112px',
        },
      },
    },
  },
  defaultVariants: {
    small: 4,
    medium: 6,
    large: 12,
  },
});
