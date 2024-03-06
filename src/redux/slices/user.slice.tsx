import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Itoken } from '../../types/types';

interface IUser {
    email: string;
    password: string;
    token?: Itoken | '';
}

const initialState: IUser = {
    email: '',
    password: '',
    token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            return action.payload;
        },
        removeUser(state) {
            state.password = '';
            state.email = '';
            state.token = '';
        },
    },
});

type Feedback = {
    rating: number;
    message: string;
};

const feedbackState: Feedback = {
    rating: 0,
    message: '',
};

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: feedbackState,
    reducers: {
        setFeedback(state, action: PayloadAction<Feedback>) {
            return action.payload;
        },
        reset(state) {
            state.message;
            state.rating;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export const { setFeedback } = feedbackSlice.actions;

export const userReducer = userSlice.reducer;
export const feedbackReducer = feedbackSlice.reducer;
