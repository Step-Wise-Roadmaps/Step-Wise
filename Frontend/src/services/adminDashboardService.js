import axiosInstance from "../api/axiosInstance";

const getAllUsers = async (adminData) => {
    const response = await axiosInstance.get('/admin/getAllUsers', adminData);

    return response.data;
}

const adminDashboardService = {
    getAllUsers,
}

export default adminDashboardService;