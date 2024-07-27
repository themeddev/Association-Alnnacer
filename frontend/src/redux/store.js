import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './activitiesSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    users: usersReducer,
    // Add other reducers here if needed
  },
});
