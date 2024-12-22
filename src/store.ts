import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/apiSlice.ts';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the API middleware
});

export default store;