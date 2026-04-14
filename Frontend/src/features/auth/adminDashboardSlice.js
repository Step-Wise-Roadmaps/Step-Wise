import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminDashboardService from "../../services/adminDashboardService";
import { reset } from "./authSlice";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getAllUsers = createAsyncThunk('admin/getAllUsers', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.getAllUsers(adminData)
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
        // getAllUsers
        .addCase(getAllUsers.pending, (state) => {state.isLoading = true})
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload;
        })
        .addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;