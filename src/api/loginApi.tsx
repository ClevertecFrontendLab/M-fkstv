import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formValues } from '../types/formValues';

export interface Itoken {
    accessToken: string;
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

            transformResponse: (response: Itoken) => response,
            async onQueryStarted(args, api) {
                const token = (await api.queryFulfilled).data.accessToken;

                sessionStorage.setItem('token', token);
            },
        }),
        registration: builder.mutation<Itoken, formValues>({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegistrationMutation } = loginAPI;
