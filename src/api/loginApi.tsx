import { baseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginAPI = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}` }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),

            // transformResponse: (response, meta, arg) => console.log(response),

            // onQueryStarted: async (api) => {
            //     console.log(api);

            //     const { data } = await api.queryFulfilled.then((res: any) => res);

            //     console.log(data);

            //     return data;
            // },
        }),
    }),
});

export const { useLoginMutation } = loginAPI;
