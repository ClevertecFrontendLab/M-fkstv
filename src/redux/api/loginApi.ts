import { authURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    IChangePassword,
    IChangePasswordResponse,
    IConfirmEmail,
    IConfirmEmailResponse,
    IEmail,
    IcheckEmailResponse,
    Itoken,
    formValues,
} from '../../types/types';

export const loginAPI = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${authURL}` }),

    endpoints: (builder) => ({
        login: builder.mutation<Itoken, formValues>({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),
        registration: builder.mutation<Itoken, formValues>({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
        checkEmail: builder.mutation<IcheckEmailResponse, IEmail>({
            query: (body) => ({
                url: 'check-email',
                method: 'POST',
                body,
            }),
        }),

        confirmEmail: builder.mutation<IConfirmEmailResponse, IConfirmEmail>({
            query: (body) => ({
                url: 'confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        changePassword: builder.mutation<IChangePasswordResponse, IChangePassword>({
            query: (body) => ({
                url: 'change-password',
                method: 'POST',
                credentials: 'include',
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
    useChangePasswordMutation,
} = loginAPI;
