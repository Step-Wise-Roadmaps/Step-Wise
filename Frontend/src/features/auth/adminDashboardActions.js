import { createAsyncThunk } from '@reduxjs/toolkit';
import adminDashboardService from "../../services/adminDashboardService";

const getCoreError = (error) => {
  return error.response?.data?.message || error.message || error.toString();
};

export const getAllUsers = createAsyncThunk('admin/getAllUsers', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.getAllUsers(adminData);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const userGrowth = createAsyncThunk('admin/userGrowth', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.userGrowth(adminData);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const searchUsers = createAsyncThunk('admin/searchUsers', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.searchUsers(adminData);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const deleteUser = createAsyncThunk('admin/deleteUser', async (id, thunkAPI) => {
    try {
        return await adminDashboardService.deleteUser(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const deleteCourse = createAsyncThunk('admin/deleteCourse', async (id, thunkAPI) => {
    try {
        return await adminDashboardService.deleteCourse(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const deleteLesson = createAsyncThunk('admin/deleteLesson', async (id, thunkAPI) => {
    try {
        return await adminDashboardService.deleteLesson(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const getDesign = createAsyncThunk(
    'admin/getDesign',
    async (id, thunkAPI) => {
        try {
            return await adminDashboardService.getDesign(id);
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(getCoreError(error));
        }
    }
);

export const getUserDitail = createAsyncThunk('admin/getUserDitail', async (user_id, thunkAPI) => {
    try {
        return await adminDashboardService.getUserDitail(user_id);
    } catch (err) {
        const message =
            error.response?.data?.message ||
            error.message ||
            error.toString();

        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const getLessonsByCourseId = createAsyncThunk(
    'admin/getLessonsByCourseId',
    async (id, thunkAPI) => {
        try {
            return await adminDashboardService.getLessonsByCourseId(id);
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(getCoreError(error));
        }
    }
);

export const getCourses = createAsyncThunk('admin/getCourses', async (coursesData, thunkAPI) => {
    try {
        return await adminDashboardService.getCourses(coursesData);
    } catch (error) {
        console.log("DELETE ERROR:", error);
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const getSkills = createAsyncThunk('admin/getSkills', async (skillsData, thunkAPI) => {
    try {
        return await adminDashboardService.getSkills(skillsData);
    } catch (error) {
        console.log("DELETE ERROR:", error);
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const getLessons = createAsyncThunk('/admin/getLessons', async (lessonData, thunkAPI) => {
    try {
        return await adminDashboardService.getLessons(lessonData);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const addCourse = createAsyncThunk('/admin/add-course', async (addCourse, thunkAPI) => {
    try {
        return await adminDashboardService.addCourse(addCourse);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});

export const addLessons = createAsyncThunk('/admin/add-lessons', async (addLessons, thunkAPI) => {
    try {
        return await adminDashboardService.addLessons(addLessons);
    } catch (error) {
        return thunkAPI.rejectWithValue(getCoreError(error));
    }
});