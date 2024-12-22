import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/apiSlice.ts';
import dataReducer from './slices/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    [api.reducerPath]: api.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the API middleware
});

export default store;