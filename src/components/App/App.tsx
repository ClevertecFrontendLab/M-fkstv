import { MainPage } from '@pages/main-page';
import { RegistrationPage } from '@pages/registration-page';
import { RegistrationSuccess } from '@pages/registration-success';
import { history, store } from '@redux/configure-store';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

export const App = () => {
    useEffect(() => {
        localStorage.getItem('token') ? history.push('/main') : history.push('/auth');
    }, []);

    return (
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path='/' element={<Outlet />}>
                        <Route path='auth' element={<RegistrationPage mode='auth' />} />
                        <Route
                            path='auth/registration'
                            element={<RegistrationPage mode='auth/registration' />}
                        />

                        <Route path='main' element={<MainPage />} />
                        <Route path='result'>
                            <Route path='success' element={<RegistrationSuccess />} />
                            <Route path='error' element={<div>Error...</div>} />
                            <Route path='error/login' element={<div>Error Login...</div>} />
                            <Route path='error-user-exist' element={<div>Error Login...</div>} />
                        </Route>
                    </Route>
                </Routes>
            </HistoryRouter>
        </Provider>
    );
};
