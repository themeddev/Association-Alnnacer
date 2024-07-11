import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const HOST = import.meta.env.VITE_APP_BACKEND_HOST || "http://127.0.0.1:8000";

const initialState = {
  activities: [],
  activity: null,
  recentActivities: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  hasMore: true,
};

// Define a thunk to fetch activities from the API with pagination
export const fetchActivities = createAsyncThunk('activities/fetchActivities', async (page, { getState }) => {
  try {
    const response = await axios.get(`${HOST}/api/activities?page=${page}`);
    return {
      data: response.data.data,
      currentPage: response.data.current_page,
      lastPage: response.data.last_page,
      total: response.data.total
    };
  } catch (error) {
    throw Error('Failed to fetch activities');
  }
});

// Define a thunk to fetch a single activity by ID
export const fetchActivityById = createAsyncThunk('activities/fetchActivityById', async (id) => {
  try {
    const response = await axios.get(`${HOST}/api/activities/${id}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch activity');
  }
});

// Define a thunk to create a new activity
export const createActivity = createAsyncThunk('activities/createActivity', async (activityData) => {
  try {
    const response = await axios.post(`${HOST}/api/activities`, activityData);
    return response.data;
  } catch (error) {
    throw Error('Failed to create activity');
  }
});

// Define a thunk to update an existing activity
export const updateActivity = createAsyncThunk('activities/updateActivity', async ({ id, ...activityData }) => {
  try {
    const response = await axios.put(`${HOST}/api/activities/${id}`, activityData);
    return response.data;
  } catch (error) {
    throw Error('Failed to update activity');
  }
});

// Define a thunk to delete an activity
export const deleteActivity = createAsyncThunk('activities/deleteActivity', async (id) => {
  try {
    await axios.delete(`${HOST}/api/activities/${id}`);
    return id;
  } catch (error) {
    throw Error('Failed to delete activity');
  }
});

// Fetch first 3 recent activities
export const fetchRecentActivities = createAsyncThunk('activities/fetchRecentActivities',
  async () => {
    try {
      const response = await axios.get(`${HOST}/api/recentActivities`);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch recent activities');
    }
  }
);

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    resetActivities: (state) => {
      state.activities = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.currentPage === 1) {
          state.activities = action.payload.data;
        } else {
          state.activities = [...state.activities, ...action.payload.data];
        }
        state.currentPage = action.payload.currentPage;
        state.hasMore = action.payload.currentPage < action.payload.lastPage;
        state.total = action.payload.total;
        state.error = null;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchActivityById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActivityById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activity = action.payload;
        state.error = null;
      })
      .addCase(fetchActivityById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchRecentActivities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecentActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recentActivities = action.payload;
        state.error = null;
      })
      .addCase(fetchRecentActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createActivity.fulfilled, (state, action) => {
        state.activities.push(action.payload);
      })
      .addCase(updateActivity.fulfilled, (state, action) => {
        const updatedActivity = action.payload;
        const existingActivityIndex = state.activities.findIndex(activity => activity.id === updatedActivity.id);
        if (existingActivityIndex !== -1) {
          state.activities[existingActivityIndex] = updatedActivity;
        }
      })
      .addCase(deleteActivity.fulfilled, (state, action) => {
        state.activities = state.activities.filter(activity => activity.id !== action.payload);
      });
  },
});

export const { resetActivities } = activitiesSlice.actions;
export default activitiesSlice.reducer;

// Selectors
export const selectAllActivities = (state) => state.activities.activities;
export const selectRecentActivities = (state) => state.activities.recentActivities;
export const selectActivityById = (state) => state.activities.activity;
export const selectActivitiesStatus = (state) => state.activities.status;
export const selectActivitiesError = (state) => state.activities.error;
export const selectHasMoreActivities = (state) => state.activities.hasMore;
export const selectCurrentPage = (state) => state.activities.currentPage;
