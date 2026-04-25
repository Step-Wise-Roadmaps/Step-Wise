import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { getMe } from "../features/auth/authSlice";

import { getAllUsers } from "../features/auth/adminDashboardSlice";
import { getCourses } from "../features/auth/adminDashboardSlice";
import { getLessons } from "../features/auth/adminDashboardSlice";

function AdminDashboardLayout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    return (
        <div className="flex">
            <AdminSideBar variant="main" />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminDashboardLayout;