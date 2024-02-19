import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { loginAPI } from '../api/loginApi';
import { registrationAPI } from '../api/registrationApi';

import { createBrowserHistory } from "history";

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
    // reducer: {
    //     [registrationAPI.reducerPath]: registrationAPI.reducer,
    //     [loginAPI.reducerPath]: loginAPI.reducer,
    // },
    reducer: combineReducers({
        router: routerReducer,
        [registrationAPI.reducerPath]: registrationAPI.reducer,
        [loginAPI.reducerPath]: loginAPI.reducer,
      }),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationAPI.middleware).concat(loginAPI.middleware).concat(routerMiddleware),
});

// reducer: combineReducers({
//     router: routerReducer,
//     [registrationAPI.reducerPath]: registrationAPI.reducer,
//     [loginAPI.reducerPath]: loginAPI.reducer,
//   }),

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
