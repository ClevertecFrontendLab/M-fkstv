import { APIbaseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Feedback = {
    id: string;
    fullname: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
};

type FeedbackResponse = Feedback[];

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${APIbaseURL}/feedback`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: ['Feedbacks'],
    endpoints: (builder) => ({
        getFeedbacks: builder.query<FeedbackResponse, null>({
            query: () => '',

            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Feedbacks' as const, id })),
                          { type: 'Feedbacks', id: 'LIST' },
                      ]
                    : [{ type: 'Feedbacks', id: 'LIST' }],
        }),
    }),
});

export const { useGetFeedbacksQuery } = feedbackApi;
