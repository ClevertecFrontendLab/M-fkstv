import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formValues } from '../../types/formValues';

export interface Itoken {
    accessToken: string;
}

export interface IEmail {
    email: string;
}

export interface IcheckEmailResponse {
    statusCode?: number;
    error: string;
    message: string;
}

export const loginAPI = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),

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
    }),
});

export const { useLoginMutation, useRegistrationMutation, useCheckEmailMutation } = loginAPI;
