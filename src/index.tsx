import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@components/App/App';
import { store } from '@redux/configure-store';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={ruRU}>
                <App />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
);
