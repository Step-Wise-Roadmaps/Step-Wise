import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/users', {
        params: adminData
    });

    return response.data.data;
}

const adminDashboardService = {
    getAllUsers,
}

export default adminDashboardService;