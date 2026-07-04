
import axiosInstance from '../api/axiosInstance';

const getCourses = async (coursesData) => {
    const response = await axiosInstance.get('/user/course', {
        params: coursesData
    })

    return response.data.data
}

const getLessons = async (lessonData) => {
    const response = await axiosInstance.get('/user/getLesson', {
        params: lessonData
    });

    return response.data.data
}

const UserDashboardService = {
    getLessons,
    getLessons,
}

export default UserDashboardService;