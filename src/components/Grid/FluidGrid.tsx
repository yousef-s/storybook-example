import { styled } from '../../styles';

export const FluidGrid = styled('div', {
  display: 'grid',
  width: '100%',

  variants: {
    columns: {
      12: {
        gridTemplateColumns: 'repeat(12, 1fr)',
        columnGap: '$6',
        padding: '0 $6',
      },
      6: {
        gridTemplateColumns: 'repeat(6, 1fr)',
        columnGap: '$6',
        padding: '0 $6',
      },
      5: {
        gridTemplateColumns: 'repeat(5, 1fr)',
        columnGap: '$6',
        padding: '0 $6',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        columnGap: '$4',
        padding: '0 $4',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '$4',
        padding: '0 $4',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '$4',
        padding: '0 $4',
      },
    },
  },
});
