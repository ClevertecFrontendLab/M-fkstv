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

            // transformResponse: (response, meta, arg) => console.log(response, meta),

            // onQueryStarted: async (api) => {
            //     console.log(api);

            //     const { data } = await api.queryFulfilled.then((res: any) => res);

            //     console.log(data);

            //     return data;
            // },
        }),
    }),
});

export const { useRegistrationMutation } = registrationAPI;
