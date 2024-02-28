import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@components/App/App';
import { store } from '@redux/configure-store';
import 'normalize.css';
import { Provider } from 'react-redux';
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
