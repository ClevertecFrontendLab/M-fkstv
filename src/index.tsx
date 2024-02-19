import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './index.css';
import { App } from '@components/App/App';
import { Provider } from 'react-redux';
import { store } from '@redux/configure-store';

import { history } from '@redux/configure-store';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import { MainPage, RegistrationPage } from './pages';
import { LoginForm } from '@components/LoginForm';
import { Content } from '@components/Content';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/main' element={<MainPage />} />
                    <Route path='/' element={<RegistrationPage />} />
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
