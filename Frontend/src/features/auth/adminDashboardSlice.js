import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminDashboardService from "../../services/adminDashboardService";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    users: [],
    courses: [],
    lessons: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getAllUsers = createAsyncThunk('admin/getAllUsers', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.getAllUsers(adminData);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getCourses = createAsyncThunk('admin/getCourses', async (coursesData, thunkAPI) => {
    try {
        return await adminDashboardService.getCourses(coursesData);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getLessons = createAsyncThunk('/admin/getLessons', async (lessonData, thunkAPI) => {
    try {
        return await adminDashboardService.getLessons(lessonData);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

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
        })
        // getCourses
        .addCase(getCourses.pending, (state) => {state.isLoading = true})
        .addCase(getCourses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.courses = action.payload;
        })
        .addCase(getCourses.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // getLesson
        .addCase(getLessons.pending, (state) => {state.isLoading = true})
        .addCase(getLessons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.lessons = action.payload;
        })
        .addCase(getLessons.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;