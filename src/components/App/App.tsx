import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { MainPage } from '@pages/main-page';
import { RegistrationPage } from '@pages/registration-page';
import { RegistrationSuccess } from '@pages/registration-success';
import { history } from '@redux/configure-store';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layuot/Layout';
import { ResponseCard } from '../ResponseCard/ResponseCard';
import { push } from 'redux-first-history';
import { HistoryRouter } from 'redux-first-history/rr6';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.getItem('token') ? dispatch(push('/main')) : dispatch(push('/auth'));
    }, []);

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path='main' element={<MainPage />} />
                <Route path='/' element={<Layout />}>
                    <Route path='auth' element={<RegistrationPage mode='auth' />} />
                    <Route
                        path='auth/registration'
                        element={<RegistrationPage mode='auth/registration' />}
                    />

                    <Route path='result'>
                        <Route path='success' element={<RegistrationSuccess />} />
                        <Route path='error' element={<div>Error...</div>} />
                        <Route path='error/login' element={<div>Error Login...</div>} />
                        <Route path='error-user-exist' element={<ResponseCard />} />
                    </Route>
                </Route>
            </Routes>
        </HistoryRouter>
    );
};
