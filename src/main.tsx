import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { store } from '~/store/configure-store.ts';

import { router } from './router/router';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme} resetCSS>
            <Provider store={store}>
                <BrowserRouter>{router}</BrowserRouter>
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
