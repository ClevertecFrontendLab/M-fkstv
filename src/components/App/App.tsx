import { MainPage } from '@pages/main-page';
import { RegistrationPage } from '@pages/registration-page';
import { history } from '@redux/configure-store';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

export const App = () => {
    // console.log(history);

    <HistoryRouter history={history}>
        <Routes>
            <Route path='/' element={<RegistrationPage />} />
            <Route path='/main' element={<MainPage />} />
        </Routes>
    </HistoryRouter>;
};
