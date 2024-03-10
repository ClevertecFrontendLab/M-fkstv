import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { history } from '@redux/configure-store';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConfirmEmail } from '@components/ConfirmEmail';
import {
    ErrorCheckEmail,
    ErrorPasswordChange,
    ErrorResponse,
    ErrorUserExist,
} from '@components/ErrorResponse';
import { PasswordChange } from '@components/Form';
import { SuccesPassworChange } from '@components/ResultPassworChange';
import { RootLayout } from '@components/RootLayout';
import { LoginError } from '@pages/error-login';
import { ResultError } from '@pages/error-result';
import { Feedback } from '@pages/feedbacks';
import { MainPage } from '@pages/main-page';
import { RegistrationPage } from '@pages/registration-page';
import { RegistrationSuccess } from '@pages/registration-success';
import { push } from 'redux-first-history';
import { HistoryRouter } from 'redux-first-history/rr6';
import { Layout } from '../Layuot/Layout';
import { PATH } from '@constants/endpoints';
import { CalendarComp } from '@components/Calendar';

export const App = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.user.token);

    useEffect(() => {
        token || localStorage.getItem('token')
            ? dispatch(push(PATH.MAIN))
            : dispatch(push(PATH.AUTH));
    }, [dispatch, token]);

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path={PATH.INDEX} element={<MainPage />}>
                    <Route path={PATH.MAIN} element={<RootLayout />} />
                    <Route path={PATH.FEEDBAKS} element={<Feedback />} />
                    <Route path={PATH.CALENDAR} element={<CalendarComp />} />
                </Route>

                <Route path={PATH.INDEX} element={<Layout />}>
                    <Route path={PATH.AUTH} element={<RegistrationPage mode='auth' />} />
                    <Route path={PATH.AUTH_CONFIRM_EMAIL} element={<ConfirmEmail />} />
                    <Route path={PATH.AUTH_CHANGE_PASS} element={<PasswordChange />} />
                    <Route
                        path={PATH.AUTH_REG}
                        element={<RegistrationPage mode='auth/registration' />}
                    />

                    <Route path={PATH.RESULT}>
                        <Route path={PATH.SUCCESS} element={<RegistrationSuccess />} />
                        <Route path={PATH.SUCCESS_PASS_CHANGE} element={<SuccesPassworChange />} />
                        <Route path={PATH.ERROR} element={<ResultError />} />
                        <Route path={PATH.ERROR_LOGIN} element={<LoginError />} />
                        <Route path={PATH.ERROR_USER} element={<ErrorUserExist />} />
                        <Route path={PATH.ERROR_EMAIL} element={<ErrorCheckEmail />} />
                        <Route path={PATH.ERROR_EMAIL_NO_EXIST} element={<ErrorResponse />} />
                        <Route path={PATH.ERROR_CHANGE_PASS} element={<ErrorPasswordChange />} />
                    </Route>
                </Route>
            </Routes>
        </HistoryRouter>
    );
};
