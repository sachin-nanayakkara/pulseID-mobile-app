import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mocki.io/v1/a230749b-0390-4fcd-8339-438e304028b5`,
    prepareHeaders: (headers) => {

      // const apiKey = process.env.REACT_APP_API_KEY;
      // const apiSecret = process.env.REACT_APP_API_SECRET;
      //
      // if (apiKey) {
      //   headers.set('x-api-key', apiKey);
      // }
      // if (apiSecret) {
      //   headers.set('x-api-secret', apiSecret);
      // }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOffers: builder.query<any, void>({
      query: () => '',
    }),
  }),
});

export const { useGetOffersQuery } = api;