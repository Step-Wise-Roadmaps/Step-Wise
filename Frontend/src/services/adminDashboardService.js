import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/users');

    return response.data.data;
}

const searchUsers = async (adminData) => {
    const response = await axiosInstance.get(`/admin/users/search?search=${search}`);

    return response.data.data
}

const deleteUser = async (id) => {
    console.log("API CALL WITH ID:", id);
    await axiosInstance.delete(`/admin/users/${id}`);

    return id;
}

const getCourses = async (coursesData) => {
    const response = await axiosInstance.get('/admin/course', {
        params: coursesData
    })

    return response.data.data
}

const getLessons = async (lessonData) => {
    const response = await axiosInstance.get('/admin/getLesson', {
        params: lessonData
    });

    return response.data.data
}

const adminDashboardService = {
    getAllUsers,
    searchUsers,
    deleteUser,
    getCourses,
    getLessons
}

export default adminDashboardService;