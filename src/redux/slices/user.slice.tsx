import { Itoken } from '@redux/api/loginApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    email: string;
    password: string;
    token?: Itoken | '';
}

const initialState: IUser = {
    email: '',
    password: '',
    token : '',
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

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
