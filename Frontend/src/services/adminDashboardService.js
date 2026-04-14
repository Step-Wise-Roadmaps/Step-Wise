import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/users', {
        params: adminData
    });

    return response.data.data;
}

const getCourses = async (coursesData) => {
    const response = await axiosInstance.get('/admin/course', {
        params: coursesData
    })

    return response.data.data
}

const getLessons = async (lessonData) => {
    const response = await axiosInstance.get('/admin/Lessons', {
        params: lessonData
    });

    return response.data.data
}

const adminDashboardService = {
    getAllUsers,
    getCourses,
    getLessons
}

export default adminDashboardService;