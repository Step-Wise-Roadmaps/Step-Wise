import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/users');

    return response.data.data;
}

const userGrowth = async () => {
    const response = await axiosInstance.get('/admin/userGrowth');

    console.log("API RESPONSE:", response.data);

    return response.data;
}

const searchUsers = async (adminData) => {
    const response = await axiosInstance.get(`/admin/users/search?search=${search}`);

    return response.data
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

const getSkills = async (skillsData) => {
    const response = await axiosInstance.get('admin/getSkills', {
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

const adminDashboardService = {
    getAllUsers,
    userGrowth,
    searchUsers,
    deleteUser,
    getCourses,
    getLessons
}

export default adminDashboardService;