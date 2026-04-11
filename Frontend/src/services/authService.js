import axiosInstance from '../api/axiosInstance';

const register = async (userData) => {
  const response = await axiosInstance.post('/user/register', userData);
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

const login = async (userData) => {
  const response = await axiosInstance.post('/user/login', userData);
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

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

const authService = {
  register,
  login,
  forgotPassword,
  resetPassword,
};

export default authService;