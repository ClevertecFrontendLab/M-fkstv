import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),

            transformResponse: (response, meta, arg) => response,
            onQueryStarted: async (api) => {
                const { data } = await api.queryFulfilled.then((res: any) => res);
                console.log(data);

                return data;
            },
        }),
    }),
});

export const { useAuthMutation } = authAPI;
