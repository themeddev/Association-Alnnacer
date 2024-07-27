import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const HOST = import.meta.env.VITE_APP_BACKEND_HOST || "http://127.0.0.1:8000";

const initialState = {
    users: [],
    user: null,
    status: 'idle',
    error: null,
    currentPage: 1,
    hasMore: true,
};

// Thunk to fetch users with pagination
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page = 1) => {
    const token = Cookies.get('authToken'); // Retrieve the token from cookies
    const response = await axios.get(`${HOST}/api/users?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response)
    return {
        data: response.data.data,
        currentPage: response.data.current_page,
        lastPage: response.data.last_page,
        total: response.data.total,
    };
});

// Thunk to fetch a single user by ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const response = await axios.get(`${HOST}/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});

// Thunk to create a new user
export const createUser = createAsyncThunk('users/createUser', async (userData) => {
    const response = await axios.post(`${HOST}/api/users`, userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});

// Thunk to update an existing user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, ...userData }) => {
    const response = await axios.put(`${HOST}/api/users/${id}`, userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});

// Thunk to delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`${HOST}/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return id;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUsers: (state) => {
            state.users = [];
            state.currentPage = 1;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                if (action.payload.currentPage === 1) {
                    state.users = action.payload.data;
                } else {
                    state.users = [...state.users, ...action.payload.data];
                }
                state.currentPage = action.payload.currentPage;
                state.hasMore = action.payload.currentPage < action.payload.lastPage;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
    },
});

export const { resetUsers } = usersSlice.actions;

export const selectAllUsers = (state) => state.users.users;
export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;

export default usersSlice.reducer;
