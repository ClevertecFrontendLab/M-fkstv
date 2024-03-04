import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { history } from '@redux/configure-store';
import { Route, Routes } from 'react-router-dom';

import { ConfirmEmail } from '@components/ConfirmEmail';
import {
    ErrorCheckEmail,
    ErrorPasswordChange,
    ErrorResponse,
    ErrorUserExist,
} from '@components/ErrorResponse';
import { Layout } from '../Layuot/Layout';
import { RegistrationPage } from '@pages/registration-page';
import { RegistrationSuccess } from '@pages/registration-success';
import { MainPage } from '@pages/main-page';
import { PasswordChange } from '@components/Form';
import { SuccesPassworChange } from '@components/ResultPassworChange';
import { RootLayout } from '@components/RootLayout';
import { LoginError } from '@pages/error-login';
import { ResultError } from '@pages/error-result';
import { Feedback } from '@pages/feedbacks';
import { push } from 'redux-first-history';
import { HistoryRouter } from 'redux-first-history/rr6';

export const App = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        localStorage.getItem('token') ? dispatch(push('/main')) : dispatch(push('/auth'));
    }, [dispatch]);

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path='/' element={<MainPage />}>
                    <Route path='main' element={<RootLayout />} />
                    <Route path='feedback' element={<Feedback />} />
                </Route>

                <Route path='/' element={<Layout />}>
                    <Route path='auth' element={<RegistrationPage mode='auth' />} />
                    <Route path='auth/confirm-email' element={<ConfirmEmail />} />
                    <Route path='auth/change-password' element={<PasswordChange />} />
                    <Route
                        path='auth/registration'
                        element={<RegistrationPage mode='auth/registration' />}
                    />

                    <Route path='result'>
                        <Route path='success' element={<RegistrationSuccess />} />
                        <Route path='success-change-password' element={<SuccesPassworChange />} />
                        <Route path='error' element={<ResultError />} />
                        <Route path='error-login' element={<LoginError />} />
                        <Route path='error-user-exist' element={<ErrorUserExist />} />
                        <Route path='error-check-email' element={<ErrorCheckEmail />} />
                        <Route path='error-check-email-no-exist' element={<ErrorResponse />} />
                        <Route path='error-change-password' element={<ErrorPasswordChange />} />
                    </Route>
                </Route>
            </Routes>
        </HistoryRouter>
    );
};
