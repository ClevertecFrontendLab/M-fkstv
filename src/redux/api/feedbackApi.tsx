import { APIbaseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Feedback = {
    id: string;
    fullname?: string;
    imageSrc?: string;
    message?: string;
    rating: number;
    createdAt: string;
};

export type FeedbackForm = {
    rating: number;
    message?: string;
};

export type FeedbackResponse = Feedback[];

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
    tagTypes: ['Feedback'],
    endpoints: (builder) => ({
        getFeedbacks: builder.query<FeedbackResponse, void>({
            query: () => '',
            providesTags: ['Feedback'],
        }),

        postFeedback: builder.mutation<void, FeedbackForm>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Feedback'],
        }),
    }),
});

export const { useGetFeedbacksQuery, usePostFeedbackMutation } = feedbackApi;
