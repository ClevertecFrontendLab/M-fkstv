import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            150: '#d7ff94',
            600: '#2db100',
            800: '#134B00',
        },
        black: '#000',
        white: '#fff',
    },
    breakpoints: {
        md: '768px',
    },
});
