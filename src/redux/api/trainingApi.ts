import { APIbaseURL } from '@constants/baseURL';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type  TrainingResposne = Training[]

export type Training ={
    _id: string;
    name: string;
    date: string;
    isImplementation: boolean;
    userId: string;
    parameters: Parameters;
    exercises: Exercise[];
}

export type Parameters ={
    repeat: boolean;
    period: number;
    jointTraining: boolean;
    participants: string[];
}

export type Exercise= {
    _id: string;
    name: string;
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
}

export const trainingApi = createApi({
    reducerPath: 'trainingApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${APIbaseURL}`,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
}),
    

    endpoints: (builder) => ({
        getTrainings: builder.query<TrainingResposne, void>({
            query: () => '/training',
            
        }),
        getTrainingsList: builder.query<TrainingResposne, void>({
            query: () => 'catalogs/training-list',
            
        }),
    }),

  
});

export const { useLazyGetTrainingsQuery, useLazyGetTrainingsListQuery } = trainingApi;
