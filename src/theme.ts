import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            150: '#d7ff94',
            300: '#c4ff61',
            400: '#b1ff2e',
            600: '#2db100',
            800: '#134B00',
        },
        black: '#000',
        white: '#fff',
    },
    hoverShadow: {
        boxShadow:
            '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
    },
    breakpoints: {
        md: '768px',
    },
});
