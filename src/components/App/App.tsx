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
import { LoginError } from '@pages/error-login';
import { ResultError } from '@pages/error-result';
import { EmailCheck } from '@components/EmailCheck';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.getItem('token') ? dispatch(push('/main')) : dispatch(push('/auth'));
    }, [dispatch]);

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path='main' element={<MainPage />} />
                <Route path='/' element={<Layout />}>
                    <Route path='auth' element={<RegistrationPage mode='auth' />} />
                    <Route path='auth/check-email' element={<EmailCheck />} />
                    <Route
                        path='auth/registration'
                        element={<RegistrationPage mode='auth/registration' />}
                    />

                    <Route path='result'>
                        <Route path='success' element={<RegistrationSuccess />} />
                        <Route path='error' element={<ResultError />} />
                        <Route path='error-login' element={<LoginError />} />
                        <Route path='error-user-exist' element={<ResponseCard />} />
                    </Route>
                </Route>
            </Routes>
        </HistoryRouter>
    );
};
