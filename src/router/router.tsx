import { Route, Routes } from 'react-router';

import App from '~/app/App';
import { JusiestPage } from '~/pages/JusiestPage/JusiestPage';
import { MainPage } from '~/pages/MainPage/MainPage';
import { VeganPage } from '~/pages/VeganPage/VeganPage';

const enum path {
    INDEX = '/',
    JUSIEST = 'jusiest',
    VEGAN = 'vegan',
}

export const router = (
    <Routes>
        <Route path={path.INDEX} element={<App />}>
            <Route index element={<MainPage />}></Route>

            <Route path={path.VEGAN} element={<VeganPage />}></Route>
            <Route path={path.JUSIEST} element={<JusiestPage />}></Route>
        </Route>
    </Routes>
);
