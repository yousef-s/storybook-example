import { styled } from "../../styles";

export const GridItem = styled('div', {
    overflow: 'hidden',
    
    variants: {
        span: {
            1: {
                gridColumn: 'span 1',
            },
            2: {
                gridColumn: 'span 2',
            },
            3: {
                gridColumn: 'span 3',
            },
            4: {
                gridColumn: 'span 4',
            },
            5: {
                gridColumn: 'span 5',
            },
            6: {
                gridColumn: 'span 6',
            },
            7: {
                gridColumn: 'span 7',
            },
            8: {
                gridColumn: 'span 8',
            },
            9: {
                gridColumn: 'span 9',
            },
            10: {
                gridColumn: 'span 10',
            },
            11: {
                gridColumn: 'span 11',
            },
            12: {
                gridColumn: 'span 12',
            }
        }
    },
    defaultVariants: {
        span: 1,
    }
});