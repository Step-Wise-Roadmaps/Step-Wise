import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login, getMe, getLessonsWithCourcesId, getCoursesLessonsByCourcesId, progress, forgotPassword, resetPassword, changeUserProfile, changePassword } from './authActions';

const storedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: storedUser ? storedUser : null,
  lessonsWithCourses: [],
  lessonsWithCoursesId: [],
  progress: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    logout: (state) => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      state.user = null;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => { state.isLoading = true; })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      // Login
      .addCase(login.pending, (state) => { state.isLoading = true; })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload?.data?.user || action.payload?.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      // getMe
      .addCase(getMe.pending, (state) => { state.isLoading = true; })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload?.data || action.payload;
        state.message = action.payload.message
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // getLessonsWithCourcesId
      .addCase(getLessonsWithCourcesId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLessonsWithCourcesId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.lessonsWithCourses = action.payload.data;
      })
      .addCase(getLessonsWithCourcesId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // getCoursesLessonsByCourcesId
      .addCase(getCoursesLessonsByCourcesId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoursesLessonsByCourcesId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.lessonsWithCoursesId = action.payload.data;
      })
      .addCase(getCoursesLessonsByCourcesId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // progress
      .addCase(progress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(progress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.progress = action.payload; 
      })
      .addCase(progress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      // forgotPassword
      .addCase(forgotPassword.pending, (state) => { state.isLoading = true; })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // resetPassword
      .addCase(resetPassword.pending, (state) => { state.isLoading = true; })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // changeUserProfile
      .addCase(changeUserProfile.pending, (state) => { state.isLoading = true; })
      .addCase(changeUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {
            ...state.user,
            id: action.payload.id,
            full_name: action.payload.full_name,
            email: action.payload.email,
            role: action.payload.role,
        };

        localStorage.setItem( "user",JSON.stringify(state.user));
        state.message = action.payload.data;
      })
      .addCase(changeUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // changePassword
      .addCase(changePassword.pending, (state) => {state.isLoading = true})
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;

export { register, login, getMe, getLessonsWithCourcesId, getCoursesLessonsByCourcesId, progress, forgotPassword, resetPassword, changeUserProfile, changePassword } from './authActions';
