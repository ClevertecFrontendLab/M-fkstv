import { ErrorElem } from '@components/Error';
import { RegistrationForm } from '@components/Form';
import { MainPage } from '@pages/main-page';
import { RegistrationPage } from '@pages/registration-page';
import { history, store } from '@redux/configure-store';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
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
                        <Route path='auth' element={<RegistrationPage />}>
                            <Route path='registration' element={<RegistrationPage />} />
                        </Route>

                        <Route path='main' element={<MainPage />} />
                        <Route path='result'>
                            <Route path='error' element={<div>Error...</div>} />
                        </Route>
                    </Route>
                </Routes>
            </HistoryRouter>
        </Provider>
    );
};
