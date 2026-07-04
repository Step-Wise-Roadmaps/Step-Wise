import { createAsyncThunk } from '@reduxjs/toolkit';
import UserDashboardService from "../../services/UserDashboardService";

const getCoreError = (error) => {
  return error.response?.data?.message || error.message || error.toString();
};
