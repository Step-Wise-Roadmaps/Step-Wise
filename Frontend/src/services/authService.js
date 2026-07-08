import axiosInstance from '../api/axiosInstance';

const register = async (userData) => {
  const response = await axiosInstance.post('/user/register', userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axiosInstance.post('/user/login', userData);

  return response.data;
};

const getMe = async (userData) => {
  const response = await axiosInstance.get('/user/getMe', userData);

  return response.data

}

const getLessonsWithCourcesId = async () => {
  const response = await axiosInstance.get('/user/getLessonsWithCourcesId', );

  return response.data;
}

const getCoursesLessonsByCourcesId = async (id) => {
  const response = await axiosInstance.get(`/user/getCoursesLessonsByCourcesId/${id}`);

  return response.data;
}

const progress = async (progressData) => {
  const response = await axiosInstance.post('/user/complete-lesson', progressData);
}

const forgotPassword = async (emailData) => {
  const response = await axiosInstance.post('/user/forgotPassword', emailData);

  return response.data;
}

const resetPassword = async (resetData) => {
  const response = await axiosInstance.post(`/user/resetPassword/${resetData.token}`, {
    password: resetData.password
  });
  return response.data;
};

const changeUserProfile = async (changeData) => {
  const response = await axiosInstance.put('/user/change-profile', changeData);
  return response.data
}

const changePassword = async (changeData) => {
  const response = await axiosInstance.put('/user/change-password', changeData);
  return response.data
}

const authService = {
  register,
  login,
  forgotPassword,
  resetPassword,
  getMe,
  getLessonsWithCourcesId,
  getCoursesLessonsByCourcesId,
  progress,
  changeUserProfile,
  changePassword
};

export default authService;
