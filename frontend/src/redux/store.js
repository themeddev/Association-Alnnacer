import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './activitiesSlice';

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    // Add other reducers here if needed
  },
});
