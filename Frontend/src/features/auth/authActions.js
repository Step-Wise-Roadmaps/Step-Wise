import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

const getCoreError = (error) => {
  return error.response?.data?.message || error.message || error.toString();
};

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});

export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const data = await authService.login(userData);
    if (data?.data?.user) {
      localStorage.setItem('user', JSON.stringify(data.data.user));
      localStorage.setItem('token', data.data.token);
    }
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});

export const getMe = createAsyncThunk('auth/getMe', async (user, thunkAPI) => {
  try {
    const data = await authService.getMe(user);
    if(data?.data?.user) {
      localStorage.setItem('user', JSON.stringify(data.data.user));
    }

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});

export const getLessonsWithCourcesId = createAsyncThunk(
  "auth/getLessonsWithCourcesId",
  async (_, thunkAPI) => {
    try {
      const response = await authService.getLessonsWithCourcesId();
      return response;
    } catch (error) {
      console.log("Thunk error:", error);

      return thunkAPI.rejectWithValue(getCoreError(error));
    }
  }
);

export const getCoursesLessonsByCourcesId = createAsyncThunk(
  "auth/getCoursesLessonsByCourcesId",
  async (id, thunkAPI) => {
    try {
      const response = await authService.getCoursesLessonsByCourcesId(id);
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const progress = createAsyncThunk("auth/progress", async (progressData, thunkAPI) => {
  try {
    const response = await authService.progress(progressData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, thunkAPI) => {
  try {
    return await authService.forgotPassword(email);
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async (reset, thunkAPI) => {
  try {
    return await authService.resetPassword(reset);
  } catch (error) {
    return thunkAPI.rejectWithValue(getCoreError(error));
  }
});