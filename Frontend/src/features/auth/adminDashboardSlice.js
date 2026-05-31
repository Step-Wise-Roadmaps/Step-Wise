import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminDashboardService from "../../services/adminDashboardService";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    users: [],
    courses: [],
    lessons: [],
    userGrowth: [],
    search: "",
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

export const userGrowth = createAsyncThunk('admin/userGrowth', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.userGrowth(adminData);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const searchUsers = createAsyncThunk('admin/searchUsers', async (adminData, thunkAPI) => {
    try {
        return await adminDashboardService.searchUsers(adminData);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteUser = createAsyncThunk('admin/deleteUser', async (id, thunkAPI) => {
    try {
        return await adminDashboardService.deleteUser(id);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteCourse = createAsyncThunk('admin/deleteCourse', async (id, thunkAPI) => {
    try {
        return await adminDashboardService.deleteCourse(id);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
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

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getCourses = createAsyncThunk('admin/getCourses', async (coursesData, thunkAPI) => {
    try {
        return await adminDashboardService.getCourses(coursesData);
    } catch (error) {
        console.log("DELETE ERROR:", error);
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const getSkills = createAsyncThunk('admin/getSkills', async (skillsData, thunkAPI) => {
    try {
        return await adminDashboardService.getSkills(skillsData);
    } catch (error) {
        console.log("DELETE ERROR:", error);
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
});

export const addCourse = createAsyncThunk('/admin/add-course', async (addCourse, thunkAPI) => {
    try {
        return await adminDashboardService.addCourse(addCourse);
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const addLessons = createAsyncThunk('/admin/add-lessons', async (addLessons, thunkAPI) => {
    try {
        return await adminDashboardService.addLessons(addLessons);
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
            state.message = action.payload;
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
            const deletedId =
        typeof action.payload === 'string'
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
            state.message = action.payload.message;
        })
        .addCase(addCourse.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // addLessons
        .addCase(addLessons.pending, (state) => {state.isLoading = true})
        .addCase(addLessons.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.lessons = action.payload;
            state.message = action.payload.message;
        })
        .addCase(addLessons.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
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
    }
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;