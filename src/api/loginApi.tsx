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

            transformResponse: (response: Itoken, meta, arg) => response,

            // transformErrorResponse: (response: { status: string | number }, meta, arg) => response,
        }),
        registration: builder.mutation<void, formValues>({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegistrationMutation } = loginAPI;
