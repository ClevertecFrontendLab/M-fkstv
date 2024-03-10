import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { loginAPI } from './api/loginApi';
import { feedbackApi } from './api/feedbackApi';

import { createBrowserHistory } from 'history';
import { feedbackReducer, userReducer } from './slices/user.slice';
import { trainingApi } from './api/trainingApi';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});

export const store = configureStore({
    reducer: combineReducers({
        user: userReducer,
        feedback: feedbackReducer,
        router: routerReducer,
        [loginAPI.reducerPath]: loginAPI.reducer,
        [feedbackApi.reducerPath]: feedbackApi.reducer,
        [trainingApi.reducerPath]: trainingApi.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginAPI.middleware).concat(feedbackApi.middleware).concat(trainingApi.middleware).concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
