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

const authService = {
  register,
  login,
};

export default authService;