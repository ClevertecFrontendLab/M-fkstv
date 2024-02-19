import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { formValues } from '../types/formValues';

export interface Itoken {
    accessToken: string;
}
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

            transformResponse: (response: Itoken, meta, arg) => response,

            transformErrorResponse: (response: { status: string | number }, meta, arg) => response,
        }),
    }),
});

export const { useLoginMutation } = loginAPI;
