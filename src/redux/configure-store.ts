import { configureStore } from '@reduxjs/toolkit';
import { registrationAPI } from '../api/registrationApi';
import { loginAPI } from '../api/loginApi';

export const store = configureStore({
    reducer: {
        [registrationAPI.reducerPath]: registrationAPI.reducer,
        [loginAPI.reducerPath]: loginAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationAPI.middleware).concat(loginAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
