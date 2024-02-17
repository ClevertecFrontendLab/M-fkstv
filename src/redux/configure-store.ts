import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from '../api/authApi';

export const store = configureStore({
    reducer: {
        [authAPI.reducerPath]: authAPI.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
