import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationAPI = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useRegistrationMutation } = registrationAPI;
