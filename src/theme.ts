import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        lime: {
            50: '#ffffd3',
            100: '#eaffc7',
            600: '#2db100',
        },
    },
    breakpoints: {
        md: '769px',
    },
});
