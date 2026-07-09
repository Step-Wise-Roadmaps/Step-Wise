import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    userGrowth,
    searchUsers,
    deleteUser,
    deleteCourse,
    deleteLesson,
    getDesign,
    getLessonsByCourseId,
    getCourses,
    getSkills,
    getLessons,
    addCourse,
    addLessons,
    getUserDetail
} from './adminDashboardActions'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    users: [],
    courses: [],
    lessons: [],
    userGrowth: [],
    getUserDetail: [],
    search: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    courseMessage: "",
    lessonMessage: "",
    deleteLessonMessage: "",
    deleteLessonErrorMessage: "",
    searchUsersMessage: ""
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
            state.lessonMessage = "";
            state.courseMessage = "";
            state.deleteLessonMessage = ""
            state.deleteLessonErrorMessage = ""
            state.searchUsersMessage =""
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
        // userGrowth
        .addCase(userGrowth.pending, (state) => {state.isLoading = true})
        .addCase(userGrowth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userGrowth = action.payload;
        })
        .addCase(userGrowth.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // searchUsers
        .addCase(searchUsers.pending, (state) => {state.isLoading = true})
        .addCase(searchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload;
        })
        .addCase(searchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.searchUsersMessage = action.payload;
        })
        // deleteUser
        .addCase(deleteUser.pending, (state) => {state.isLoading = true})
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            const deletedId = typeof action.payload === 'string' ? Number(action.payload) : action.payload;
            state.users = state.users.filter(
                (user) => user.id !== deletedId
            );
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // deleteCourse
        .addCase(deleteCourse.pending, (state) => {state.isLoading = true})
        .addCase(deleteCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            const deletedId = typeof action.payload === 'string'
                ? Number(action.payload)
                : action.payload;
                state.designs = state.designs.filter(
                    (item) => item.id !== deletedId
                );
                state.message = action.payload.message
        })
        .addCase(deleteCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // deleteLesson
        .addCase(deleteLesson.pending, (state) => {state.isLoading = true})
        .addCase(deleteLesson.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;

            const deletedId = action.payload.id;

            state.LessonsByCourseId = state.LessonsByCourseId.filter(
                (item) => item.id !== deletedId
            );

            state.deleteLessonMessage = action.payload.message;
        })
        .addCase(deleteLesson.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.deleteLessonMessage = action.payload;
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
        // getSkills
        .addCase(getSkills.pending, (state) => {state.isLoading = true})
        .addCase(getSkills.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.skills = action.payload;
        })
        .addCase(getSkills.rejected, (state, action) => {
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
        })

        //addCourse
        .addCase(addCourse.pending, (state) => {state.isLoading = true})
        .addCase(addCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.courses = action.payload;
            state.courseMessage = action.payload.message;
        })
        .addCase(addCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.courseMessage = action.payload;
        })
        // addLessons
        .addCase(addLessons.pending, (state) => {state.isLoading = true})
        .addCase(addLessons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.lessons = action.payload;
            state.lessonMessage = action.payload.message;
        })
        .addCase(addLessons.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.lessonMessage = action.payload;
        })
        // getDesign
        .addCase(getDesign.pending, (state) => {state.isLoading = true})
        .addCase(getDesign.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.designs = action.payload.course;
        })
        .addCase(getDesign.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // getUserDetail
        .addCase(getUserDetail.pending, (state) => {state.isLoading = true})
        .addCase(getUserDetail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.getUserDetail = action.payload.data || action.payload;
        })
        .addCase(getUserDetail.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // getLessonsByCourseId
        .addCase(getLessonsByCourseId.pending, (state) => {state.isLoading = true})
        .addCase(getLessonsByCourseId.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.LessonsByCourseId = action.payload.lessons;
        })
        .addCase(getLessonsByCourseId.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;

export {
    getAllUsers,
    userGrowth,
    searchUsers,
    deleteUser,
    deleteCourse,
    deleteLesson,
    getDesign,
    getLessonsByCourseId,
    getCourses,
    getSkills,
    getLessons,
    addCourse,
    addLessons,
    getUserDetail
} from './adminDashboardActions'