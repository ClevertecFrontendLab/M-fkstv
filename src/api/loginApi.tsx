import { formValues } from '@components/LoginForm';
import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginAPI = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body: formValues) => ({
                url: 'login',
                method: 'POST',
                body,
            }),

            transformResponse: (response: string, meta, arg) => response,

            transformErrorResponse: (response: { status: string | number }, meta, arg) =>
                response.status,
        }),
    }),
});

export const { useLoginMutation } = loginAPI;
