import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/users');

    return response.data.data;
}

const userGrowth = async () => {
    const response = await axiosInstance.get('/admin/userGrowth');

    return response.data;
}

const searchUsers = async (adminData) => {
    const response = await axiosInstance.get(`/admin/users/search?search=${search}`);

    return response.data
}

const deleteUser = async (id) => {
    await axiosInstance.delete(`/admin/users/${id}`);

    return id;
}

const deleteCourse = async (id) => {
    await axiosInstance.delete(`/admin/course/${id}`);

    return id;
}

const deleteLesson = async (id) => {
    const response = await axiosInstance.delete(
        `/admin/delete-lesson/${id}`
    );

    return {
        id,
        message: response.data.message
    };
};

const getDesign = async (id) => {
    const response = await axiosInstance.get(`/admin/getDesign/${id}`);
    return response.data;
};

const getLessonsByCourseId = async (id) => {
    const response = await axiosInstance.get(`/admin/getLessonsByCourseId/${id}`);
    return response.data;
}

const getCourses = async (coursesData) => {
    const response = await axiosInstance.get('/admin/course', {
        params: coursesData
    })

    return response.data.data
}

const getSkills = async (skillsData) => {
    const response = await axiosInstance.get('/admin/getSkills', {
        params: skillsData
    }) 

    return response.data.data
}

const getLessons = async (lessonData) => {
    const response = await axiosInstance.get('/admin/getLesson', {
        params: lessonData
    });

    return response.data.data
}

const addCourse = async (addCourse) => {
    const response = await axiosInstance.post(
        '/admin/add-course',
        addCourse
    );

    return response.data;
}

const addLessons = async (addLessons) => {
    const response = await axiosInstance.post(
        '/admin/add-lessons',
        addLessons
    );

    return response.data;
}

const adminDashboardService = {
    getAllUsers,
    userGrowth,
    searchUsers,
    deleteUser,
    getCourses,
    getSkills,
    getLessons,
    addCourse,
    addLessons,
    deleteCourse,
    deleteLesson,
    getDesign,
    getLessonsByCourseId
}

export default adminDashboardService;